import React, { Component } from 'react'
import LabeledMessage from './LabeledMessage'


class Message extends Component {


    render(){
        if(this.props.messages){
            return this.props.messages.map(message => {
                return (
                    <div className={`row message ${message.read ? 'read' : 'unread'} ${message.selected ? 'selected' : null}`} >
                    <div className="col-xs-1">
                        <div className="row">
                        <div className="col-xs-2">
                            <input type="checkbox" checked = {message.selected ? "checked": null} onChange={() => this.props.handleSelectedMessages(message)}/>
                        </div>
                        <div className="col-xs-2">
                            <i className="star fa fa-star-o"></i>
                        </div>
                        </div>
                    </div>
                    <div className="col-xs-11">
                        <LabeledMessage 
                            message={message}/>
                        <a href="#">
                        {message.subject}
                        </a>
                    </div>
                    </div>
                )
            })
        }
    }
}

export default Message