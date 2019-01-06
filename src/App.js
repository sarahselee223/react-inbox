import React, { Component } from 'react';
import Toolbar from './Toolbar'
import Message from './Message'
import ComposeForm from './ComposeForm'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      messages : [
        {
          "subject": "test",
          "read": false,
          "starred": true,
          "labels": [
              "dev",
              "personal"
          ],
          "body": "test",
          "id": 1
        }
      ]
    }
  }

  addItem = (newItem) => {
    this.setState({
      ...this.state,
      messages: [...this.state.messages, newItem]
    })
  }

  render() {
    return (
      <div className= "container">
        <Toolbar/>
        <ComposeForm/>
        <Message 
          messages = {this.state.messages}
          addItem = {this.addItem}/>
      </div>
    )
  }
}

export default App;
