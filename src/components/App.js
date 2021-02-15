import React from 'react'
// import { getAll } from '../data/pets'
// import { getByType } from '../data/pets'


import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }


  onChangeType = ({target: {value} }) => {
    this.setState({
      filters: {
        ...this.state.filters,
              type: value
      }
    })
  }

  onFindPetsClick = (event) => {
    // event.preventDefault()

    let query = this.state.filters.type
    let url = "/api/pet"

    if ( query === "all" ) {
      url = `/api/pets`
    } else {
      url = `/api/pets?type=${query}`
    }

    console.log(url)

    // let url = `/api/pets?type=${encodeURI(query)}`

    fetch(url)
    .then(response => response.json())
    .then(pets => {
      this.setState({
        pets: pets
      })
    })

  }

  onAdoptPet = (id) => {
    let findPet = this.state.pets.find(pet => pet.id === id)

    findPet.isAdopted = true

  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser petData={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
