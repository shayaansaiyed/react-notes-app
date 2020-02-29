import React, { Component } from 'react';
import Sidebar from './components/Sidebar.js'
import Editor from './components/Editor.js'
import 'milligram'

class App extends Component {
  constructor(){
    super();

    localStorage.clear()

    this.state = {
      editorText: "",
      currentNoteID: 0
    }

    //initialize localStorage for first Note
    localStorage.setItem(this.state.currentNoteID, this.state.editorText);

    this.handleChange=this.handleChange.bind(this);
    this.addNewNote=this.addNewNote.bind(this);
    this.handleNoteSelection=this.handleNoteSelection.bind(this);
  }


  handleChange(value){
    this.setState({
      editorText: value
    })
    localStorage.setItem(this.state.currentNoteID, this.state.editorText);
  }

  addNewNote(){
    this.setState({
      currentNoteID: localStorage.length,
      editorText: " "
    })
    console.log("Add New Note: Note ID: " + this.state.currentNoteID);
    localStorage.setItem(this.state.currentNoteID, this.state.editorText);
  }

  handleNoteSelection(noteID){
    this.setState({
      currentNoteID: noteID,
      editorText: localStorage.getItem(noteID)
    })
  }

  render(){

    return(
      <div class="App">
        <div class="row">
          <h1 class="column"> notes app </h1>
        </div>
        <div class="row">
          <Sidebar
            onNewNoteClick = {this.addNewNote}
            onClick = {this.handleNoteSelection}
          />
          <Editor
            handleChange = {this.handleChange}
            text={this.state.editorText}
          />
        </div>
      </div>
    )
  }
}

export default App;
