import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import '../../css/home.css'
import nirmaan from '../../img/nirmaan.jpg'
import basefunc from '../../config/base'

class Home extends Component {
    state = {
        url: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    redirect = (e) => {
        e.preventDefault();
        const test_url = "test/".concat(this.state.url)
        window.location = basefunc(test_url);
    }
    render(){
        const {auth} = this.props;
        if (auth.isLoaded && auth.email === "admin@nirmaan.com") return <Redirect to='/create' />
        // if (auth.isLoaded && !auth.isEmpty) return <Redirect to='/' />
        const content = auth.uid ? 
        <div>
            <form onSubmit={this.redirect}>
                <div className="wrap">
                    <div className="search">
                        <input type="text" className="searchTerm" id="url" onChange={this.handleChange} placeholder="What are you looking for?" />
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
        : <div>
            <br></br>
            <center><img alt="Nirmaan" width="20%" src={nirmaan} /></center>
            <h1><b>Welcome to Nirmaan Test Platform</b></h1>
            <br></br>
            <hr></hr>
            <br></br>
            <button type="button" className="btn btn-primary" onClick={function(){window.location = basefunc("login")}}>Login</button> &nbsp; &nbsp;
            <button type="button" className="btn btn-primary" onClick={function(){window.location = basefunc("signup")}}>SignUp</button>
        </div>
        return(
            <div>
                {content}
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStatetoProps)(Home)