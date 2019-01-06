import React, { Component } from 'react'
import axios from 'axios'

class Message extends Component {
  
    constructor(props){
        super(props)
        this.state = {
            messages: ''
        }
    }

    componentWillMount(){
        this.getMessages()
    }
    
    getMessages = async() => {
        try{
            const response = await axios.get((`${process.env.REACT_APP_API_URL}/messages`))
            console.log(response.data)
            this.setState({
                messages: response.data
            })
        } catch(err){
            console.log(err)
        }
    }

    renderMessage(){
        if(this.state.messages){
            return this.state.messages.map(message => {
                return (
                    <div class="row message unread">
                    <div class="col-xs-1">
                        <div class="row">
                        <div class="col-xs-2">
                            <input type="checkbox" />
                        </div>
                        <div class="col-xs-2">
                            <i class="star fa fa-star-o"></i>
                        </div>
                        </div>
                    </div>
                    <div class="col-xs-11">
                        <a href="#">
                        {message.subject}
                        </a>
                    </div>
                    </div>
                )
            })
        }
    }

    render(){
        return (
            <>
            {this.renderMessage()}
            </>
        )
    }

}

export default Message