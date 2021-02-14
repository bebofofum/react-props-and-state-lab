import React from 'react'


class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            Name: {this.props.filteredPets.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.filteredPets.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.filteredPets.age}</p>
            <p>Weight: {this.props.filteredPets.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
