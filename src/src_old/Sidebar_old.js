import React, { Component } from 'react';
import NoteList from './NoteList.js'

class Sidebar extends Component {
  render(){
    return(
      <div class="Sidebar column column-25">
        <button className="button button-clear" onClick={this.props.onNewNoteClick}>+ new note</button>
      </div>
    )
  }
}

export default Sidebar;
