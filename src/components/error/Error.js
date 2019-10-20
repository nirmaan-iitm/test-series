import React, { Component } from 'react'
import { connect } from 'react-redux'

class Error extends Component {
    render(){
        var {auth, id} = this.props;
        if (auth.isLoaded && auth.isEmpty) id = "235"
        var content;
        switch(id) {
            case "234":
                content = "You have already submitted the Quiz";
                break;
            case "235":
                content = "You are not Authenticated";
                break;
            default:
                content = "Unknown Error"
        }
        return (
            <div className="alert alert-danger" role="alert">
                {content}
            </div>
        )
    }
}

const mapStatetoProps = (state, ownProps) => {
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        id: ownProps.match.params.id
    }
}

export default connect(mapStatetoProps)(Error)