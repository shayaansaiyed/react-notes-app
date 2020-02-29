import React, { Component } from 'react';
import NotePreview from './NotePreview.js';

const liStyle = {
  listStyleType: 'none'
};

class NoteList extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.createNoteList = this.createNoteList.bind(this);
  }

  handleClick(noteID){
    this.props.handleNoteClick(noteID);
  }

  createNoteList(){
    let notes = [];
    let i = 0;
    for (i = 0; i < localStorage.length; i++){
      const id = i;
      if(localStorage[i] === ""){
        notes.push(<li style={liStyle} key={i.toString()}><div className="row">New Note</div></li>)
      } else {
        notes.push(<li style={liStyle} key={i.toString()}><button className=" row" onClick={()=>{this.handleClick(id)}}>
          {localStorage[i]}
        </button></li>)
      }
    }
    return notes;
  }

  render(){
    // let notes = [];
    // let i = 0;
    // for (i = 0; i < localStorage.length; i++){
    //   if(localStorage[i] === ""){
    //     notes.push(<li key={i.toString()}><div className="row">New Note</div></li>)
    //   } else {
    //     notes.push(<li key={i.toString()}><button className=" row" onClick={()=>{this.handleClick(i)}}>
    //       {localStorage[i]}
    //     </button></li>)
    //   }
    // }

    // notes = localStorage.map((note) =>
    //   console.log(note)
    // )
    // notes = notes.map((note)=>
    //   <button className="row" onClick={()=>{this.handleClick(i)}}>
    //     <li>note</li>
    //   </button>
    // )

    return <ul>{this.createNoteList()}</ul>
  }
}

export default NoteList;
