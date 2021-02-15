import React from 'react'

class Filters extends React.Component {

  handleClick = (event) => {
    // event.preventDefault();
    // console.log('show me')
    // console.log(event.target)
    // console.log(event.target.value)


    // if(event.target && event.target.matches('#type')) {
    //   this.props.handleTypeChange(event.target.value)
    // }

  }

  // handleChange = (event) => {
  //   console.log(event.target.value)
  //   debugger;
  //   this.props.handleTypechange(event.target.value)
  // }



  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.props.onChangeType}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.props.onFindPetsClick}
          className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
