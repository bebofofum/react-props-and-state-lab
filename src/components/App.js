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
      url = "/api/pet"
    } else {
      url = `/api/pets?type=${encodeURI(query)}`
    }

    debugger;


    // let url = `/api/pets?type=${encodeURI(query)}`

    fetch(url)
    .then(response => response.json())
    .then(pets => {
      this.setState({
        pets: pets
      })
    })

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
              <Filters handleTypechange={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser petData={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
