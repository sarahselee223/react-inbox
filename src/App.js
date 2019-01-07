import React, { Component } from 'react';
import Toolbar from './Toolbar'
import Message from './Message'
import axios from 'axios'

import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      messages : []
    }
  }

  componentDidMount(){
    this.getMessages()
  }

  updateMessage = (message) => {
    let updatedMessage
    if(!message.selected){
        updatedMessage = {...message, selected: true}
    } else if(message.selected){
        updatedMessage = {...message, selected: false}
    }
    return updatedMessage
  } 

  handleSelectedMessages = (message) =>{
    const updateMessage = this.updateMessage(message)
    this.setState({
      messages: this.state.messages.map(el => el.id === message.id ? updateMessage : el)
    });
  }

  getMessages = async() => {
    try{
        const response = await axios.get((`${process.env.REACT_APP_API_URL}/messages`))
        this.setState({
            messages: response.data
        })
    } catch(err){
        console.log(err)
    }
  }

  addItem = (newItem) => {
    this.setState({
      ...this.state,
      messages: [...this.state.messages, newItem]
    })
    console.log(this.state.messages)
  }

  render() {
    return (
      <div className= "container">
        <Toolbar
          key = {this.state.messages.id}
          messages = {this.state.messages}
          addItem = {this.addItem}/>

        <Message 
          key = {this.state.messages.id}
          messages = {this.state.messages}
          handleSelectedMessages = {this.handleSelectedMessages}
          addItem = {this.addItem}/>
      </div>
    )
  }
}

export default App;
