import React, { Component } from 'react';
import NotePreview from './NotePreview.js';

const liStyle = {
  listStyleType: 'none'
};

const buttonStyle = {
  paddingLeft: '10px',
  marginLeft: '5px',
  width: '100%',
  marginRight: '5px'
}

const newNoteStyle = {
  paddingLeft: '10px',
  marginLeft: '5px',
  width: '100%',
  marginRight: '5px',
  background: 'none',
  color: '#9b4dca'
}


class NoteList extends Component {
  constructor(props){
    console.log("NoteList constructor");
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.createNoteList = this.createNoteList.bind(this);
  }

  handleClick(noteID){
    console.log("NoteList handleClick");
    this.props.handleNoteClick(noteID);
  }

  createNoteList(){
    console.log("NoteList createNoteList");
    let notes = [];
    let i = 0;
    for (i = 0; i < localStorage.length; i++){
      const id = i;
      if(localStorage[i] === ""){
        notes.push(<li style={liStyle} key={i.toString()}><button style={newNoteStyle} className="row" onClick={()=>{this.handleClick(id)}}>
                    New Note
                   </button></li>);
      } else {
        notes.push(<li style={liStyle} key={i.toString()}><button style={buttonStyle} className="row" onClick={()=>{this.handleClick(id)}}>
          {localStorage[i]}
        </button></li>);
      }
    }
    return notes;
  }

  render(){
    console.log("NoteList render");
    return <ul>{this.createNoteList()}</ul>
  }
}

export default NoteList;
