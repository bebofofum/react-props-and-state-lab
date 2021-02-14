import React from 'react'

import Pet from './Pet'



class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">
              {this.props.petData.map(pet => 
               <Pet filteredPets={pet} />)}

      
    </div>
  }
}

export default PetBrowser
