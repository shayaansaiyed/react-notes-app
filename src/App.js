import React, { Component } from 'react';
import Sidebar from './components/Sidebar.js'
import Editor from './components/Editor.js'
import 'milligram'


class App extends Component {
  constructor(){
    console.log("App constructor");
    super();

    this.state = {
        editorText: "",
        noteList: [],
        currentNoteID: 0
    }
      
    this.handleChange=this.handleChange.bind(this);
    this.addNewNote=this.addNewNote.bind(this);
    this.handleNoteSelection=this.handleNoteSelection.bind(this);
  }


  handleChange(value){
    console.log("App handleChange");
    
    let notesList = this.state.noteList;
    notesList[this.state.currentNoteID] = value;
    
    this.setState({
        noteList: notesList
    })  
      
    console.log(this.state.noteList[this.state.currentNoteID]);
    console.log(value);
  }

  addNewNote(){
    console.log("App addNewNote");
      
    let currentNoteID = this.state.currentNoteID;
    let notesList = this.state.noteList;
    
    currentNoteID = currentNoteID + 1;
    notesList.push("");
      
    this.setState({
      currentNoteID: currentNoteID,
      noteList: notesList
    })
  }

  handleNoteSelection(noteID){
    console.log("App handleNoteSelection");
    this.setState({
      currentNoteID: noteID
    })
  }

  render(){
    console.log("App render");
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
            text={this.state.noteList[this.state.currentNoteID]}
          />
        </div>
      </div>
    )
  }
}

export default App;
