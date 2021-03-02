import React, { Component } from 'react';
import { connect } from 'react-redux'

import { openNewPlant, closeDropdown } from '../../../../../services/actions/headerActions'

class NewPlantButton extends Component {

  toggleShowPlantForm = () => {
    this.props.showPlantForm ? this.props.closeNewPlant() : this.props.openNewPlant()
  }

  render(){
    return (
      <button id="leaf-button">
        <img
          tabIndex="0"
          onKeyPress={event => event.code === "Enter" && this.toggleShowPlantForm() }
          onClick={this.toggleShowPlantForm}
          id="leaf-icon"
          className={this.props.leafColor === 'green' ? 'green-leaf' : 'orange-leaf'}
          alt="Button To Add Plant"
        />
      </button>
    )
  }
}

const mstp = state => {
  return {
    leafColor: state.header.leafColor,
    showPlantForm: state.header.showPlantForm
  }
}

const mdtp = dispatch => {
  return {
    openNewPlant: () => dispatch(openNewPlant),
    closeNewPlant: () => dispatch(closeDropdown)
  }
}

export default connect(mstp, mdtp)(NewPlantButton)