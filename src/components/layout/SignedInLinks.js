import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
        <ul className="navbar-nav">
            <li className="nav-item"><a href="/" onClick={props.signOut}>Log Out</a></li>
            <li className="nav-item">
                <NavLink to='/' className="btn btn-floating pink ligthen-1">
                    {props.profile.initials}
                </NavLink>
            </li>
        </ul>
    )
}

const mapStatetoProps = (state) => {
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(SignedInLinks)