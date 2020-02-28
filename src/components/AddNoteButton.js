import React, { Component } from 'react';

class AddNoteButton extends Component {
  constructor(){
    super();
  }

  render(){
    return(
      <button className=" row row-100" onClick={this.props.handleClick}>
        + add note
      </button>
    )
  }
}

export default AddNoteButton;
