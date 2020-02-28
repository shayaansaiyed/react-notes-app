import React, { Component } from 'react';
import NotePreview from './NotePreview.js';

class NoteList extends Component {
  render(){
    let notes = [];
    let i = 0;
    for (i = 0; i < localStorage.length; i++){
      if(localStorage[i] === ""){
        notes.push(<div className="row row-100">New Note</div>)
      } else {
        notes.push(<button className=" row row-100" onClick={this.props.onClick}>
          {localStorage[this.props.ID]}
        </button>)
      }
    }
    const notesList = (
      <div className="row row-100">
        <div className="column column-100">
          {notes}
        </div>
      </div>
    )
    return notesList;
  }
}

export default NoteList;
