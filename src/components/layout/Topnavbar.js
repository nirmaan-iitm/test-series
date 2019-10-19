import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Topnavbar = (props) => {
    const {auth, profile} = props;
    const links = auth.isLoaded && auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

    return (
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container">
            <Link to='/' className="brand-logo"><i className='fa fa-home' style={{fontSize:24}}></i></Link>
                {links}
            </div>
        </nav>
    )
}

const mapStatetoProps = (state) => {
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStatetoProps)(Topnavbar)