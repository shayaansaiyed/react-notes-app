import React, { Component } from 'react';
import NoteList from './NoteList.js'

class Sidebar extends Component {
  constructor(props){
    super(props);

  this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id){
    this.props.onClick(id);
  }

  render(){
    return(
      <div class="Sidebar column column-25">
        <button className="button button-clear" onClick={this.props.onNewNoteClick}>+ new note</button>
        <NoteList handleNoteClick={this.handleClick}/>
      </div>
    )
  }
}

export default Sidebar;
