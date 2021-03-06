import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { openNewSpace, closeDropdown } from '../../../../../services/actions/headerActions'

class NewSpaceButton extends Component {

  toggleShowSpaceForm = () => {
    this.props.showSpaceForm ? this.props.closeNewSpace() : this.props.openNewSpace()
  }

  render(){
    return (
      <button id="door-button">
        <Link to={this.props.showSpaceForm ? '/' : '/new-space'}>
          <img
            tabIndex="0"
            onKeyPress={event => event.code === "Enter" && this.toggleShowSpaceForm()}
            onClick={this.toggleShowSpaceForm}
            id="door-icon"
            className={this.props.doorColor === 'green' ? 'green-door' : 'orange-door'}
            alt="Button To Add Space"
          />
        </Link>
      </button>
    )
  }
}

const mstp = state => {
  return {
    doorColor: state.header.doorColor,
    showSpaceForm: state.header.showSpaceForm
  }
}

const mdtp = dispatch => {
  return {
    openNewSpace: () => dispatch(openNewSpace),
    closeNewSpace: () => dispatch(closeDropdown)
  }
}

export default connect(mstp, mdtp)(NewSpaceButton)