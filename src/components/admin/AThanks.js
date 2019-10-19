import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class AThanks extends Component {
    render(){
        const {auth} = this.props;
        const {id} = this.props
        if(auth.isLoaded && auth.email !== "admin@nirmaan.com") {
            return <Redirect to="/" />
        }
        return(
            <div>
                <p>Test Created at the following url</p>
                <p>Url: https://nirmaan-iitm.github.io/test-series/tests/{id}</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
        id: ownProps.match.params.id
    }
}

export default connect(mapStateToProps)(AThanks);