import React, { Component } from 'react'
import axios from 'axios'

class ComposeForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            newSubject:'',
            newBody:''
        }
    }
    handleSubjectChange=(event)=>{
        this.setState({
            newSubject: event.target.value
        })
    }
    handleBodyChange=(event)=>{
        this.setState({
            newBody: event.target.value
        })
    }

    handleSubmit = async(event) => {
        event.preventDefault()
        try{
            const newItem = {
                "subject": `${this.state.newSubject}`,
                "newBody": `${this.state.newBody}`
            }
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/messages`, newItem)
            this.props.addItem(response.data)
            this.props.handleComposeForm()
        } catch(err){
            console.log(err)
        }
    }

    render(props){
        return (

            <form className="form-horizontal well" onSubmit={this.handleSubmit}>
            <div className="form-group">
                <div className="col-sm-8 col-sm-offset-2">
                <h4>Compose Message</h4>
                </div>
            </div>
            <div className="form-group" >
                <label className="col-sm-2 control-label">Subject</label>
                <div className="col-sm-8">
                <input type="text" className="form-control" id="subject" value={this.state.newSubject} placeholder="Enter a subject" name="subject" onChange={this.handleSubjectChange}></input>
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label">Body</label>
                <div className="col-sm-8">
                <textarea name="body" id="body" className="form-control" value={this.state.newBody} onChange={this.handleBodyChange} ></textarea>
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-8 col-sm-offset-2">
                <input type="submit" value="Send" className="btn btn-primary"></input>
                </div>
            </div>
            </form>
        )
    }
}

export default ComposeForm
