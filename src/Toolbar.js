import React, { Component } from 'react';
import ComposeForm from './ComposeForm'

class Toolbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            isComposeFormOpen: true,
        }     
    }

    handleComposeForm = ()=>{
        this.setState(state =>({
            isComposeFormOpen: !state.isComposeFormOpen
        }))
    }

    render(){
        return (
            <div>
            <div className="row toolbar">
            <div className="col-md-12">
                <p className="pull-right">
                <span className="badge badge">2</span>
                unread messages
                </p>
    
                <a className="btn btn-danger" onClick={this.handleComposeForm}>
                <i className = {this.state.isComposeFormOpen ? "fa fa-plus" : "fa fa-minus"}></i>
                </a>
    
                <button className="btn btn-default">
                <i className="fa fa-minus-square-o"></i>
                </button>
    
                <button className="btn btn-default">Mark As Read</button>
    
                <button className="btn btn-default">Mark As Unread</button>
    
                <select className="form-control label-select">
                <option>Apply label</option>
                <option value="dev">dev</option>
                <option value="personal">personal</option>
                <option value="gschool">gschool</option>
                </select>
    
                <select className="form-control label-select">
                <option>Remove label</option>
                <option value="dev">dev</option>
                <option value="personal">personal</option>
                <option value="gschool">gschool</option>
                </select>
    
                <button className="btn btn-default">
                <i className="fa fa-trash-o" ></i>
                </button>
            </div>
            </div>
            {this.state.isComposeFormOpen ? "" : 
                <ComposeForm 
                addItem = {this.props.addItem}
                handleComposeForm = {this.handleComposeForm}/>}
            </div>
        )
    }
}

export default Toolbar