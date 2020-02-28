import React, { Component } from 'react';
import SimpleMDE from "react-simplemde-editor"

class Editor extends Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div class="Editor column column-s75">
          <SimpleMDE
            value={this.props.text}
            options={{
              autofocus: true
            }}
            onChange={this.props.handleChange}
          />
      </div>
    )
  }
}

export default Editor;
