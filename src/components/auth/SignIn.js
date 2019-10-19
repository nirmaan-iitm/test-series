import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import '../../css/signin.css'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }
    render() {
        const { authError, auth } = this.props;
        if (auth.isLoaded && !auth.isEmpty) return <Redirect to='/' />
        return (
            <div className="container">
            <div className="row">
            <div className="col-md-3 col-sm-2"></div>
            <div id="loginbox" className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">                    
            <div className="panel panel-info" >
                <div className="panel-heading">
                    <div className="panel-title">Login</div>
                </div>     
                <div id="panel-body" className="panel-body" >  
                    <form id="loginform" className="form-horizontal" onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                            <input id="email" type="email" className="form-control" placeholder="Email" onChange={this.handleChange}/>                                        
                        </div>
                                
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                            <input id="password" type="password" className="form-control" placeholder="Password"  onChange={this.handleChange}/>
                        </div>

                        <div className="form-group">
                            <div className="col-sm-12 controls">
                                <button className="btn btn-success">Login</button>
                                    { authError ? <div className="alert alert-danger col-sm-12">{authError}</div> : null }
                            </div>
                        </div>   
                        </form>     
                    </div>                     
                </div>
            </div>
            </div>
            </div>  
        )
    }
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)