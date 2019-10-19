import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.isLoaded && !auth.isEmpty) return <Redirect to='/' /> 
    return (
      <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-2"></div>
        <div id="loginbox" className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">                    
        <div className="panel panel-info" >
        <div className="panel-heading">
            <div className="panel-title">SignUp</div>
        </div>     
        <div id="panel-body" className="panel-body" >  
        <form  id="loginform" className="form-horizontal" onSubmit={this.handleSubmit}>
        <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
            <input id="email" type="email" className="form-control" placeholder="Email" onChange={this.handleChange}/>                                        
        </div>   
        <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
            <input id="password" type="password" className="form-control" placeholder="Password"  onChange={this.handleChange}/>
        </div>
        <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
            <input id="firstName" type="text" className="form-control" placeholder="First Name" onChange={this.handleChange}/>                                        
        </div>   
        <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
            <input id="lastName" type="text" className="form-control" placeholder="Second Name"  onChange={this.handleChange}/>
        </div>
        <div className="form-group">
            <div className="col-sm-12 controls">
                <button className="btn btn-success">SignUp</button>
                <div className="center red-text">
                    { authError ? <p>{authError}</p> : null }
                </div>
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
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)