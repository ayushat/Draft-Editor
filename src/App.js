import React, { Component } from 'react';
import './App.css';
import DraftEditor from './components/DraftEditor.js';

class App extends Component {
  render() {
    return (
      <div className="App">
			<div className="container mx-auto">
					<h2 my-3>Your story here ... !!</h2>
      	<DraftEditor />
			</div>
      </div>
    );
  }
}

export default App;
