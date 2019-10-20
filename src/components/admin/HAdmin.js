import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import basefunc from '../../config/base'

class HAdmin extends Component {
    handleSubmit = (e) => {
        console.log("jhj")
        const num = Math.random().toString(36).slice(2); 
        const url = "create".concat("/", num, "/1")
        window.location = basefunc(url)
    }
    render(){
        const {auth} = this.props;
        if(auth.isLoaded && auth.email !== "admin@nirmaan.com") return <Redirect to="/" />
        return(
            <div>
            <div style={{height: 100}}></div>
            <h2>Create a Quiz now!!!</h2> <br/><hr/>
            <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Create Quiz</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(HAdmin);