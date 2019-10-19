import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { createQues } from '../../store/actions/testActions'

class Create extends Component {
    state = {
        testid: "",
        question: "",
        opt1: "",
        opt2: "",
        opt3: "",
        opt4: "",
        ans: "A"
    }
    handleChange = (e) => {
        const {id} = this.props;
        this.setState({
            testid: id,
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log("submitting")
        const {qid} = this.props
        const url = "".concat(Number(qid)+1)
        this.props.createQues(this.state)
        this.props.history.push(url);
        var form = document.getElementById("myForm");
        form.reset();
        this.setState({
            question: "",
            opt1: "",
            opt2: "",
            opt3: "",
            opt4: "",
            ans: "A"
        })
    }
    handleOver = (e) => {
        const {id} = this.props
        const url = "/AThanks/".concat(id);
        window.location = url
    }
    render(){
        const {id, qid, auth} = this.props;
        if(auth.isLoaded && auth.email !== "admin@nirmaan.com") {
            return <Redirect to="/" />
        }
        if(typeof id === 'undefined' || typeof qid === 'undefined') return <Redirect to='/HAdmin' />
        return(
            <div className="container">
                <hr /><br />
                <form id="myForm">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Q</span>
                    </div>
                    <input type="text" className="form-control" id="question" placeholder="Question" aria-label="Username" aria-describedby="basic-addon1"  onChange={this.handleChange}/>
                </div>
                <div className="form-row">
                    <div className="col">
                    <input type="text" id="opt1" className="form-control" placeholder="Option 1"  onChange={this.handleChange}/>
                    </div>
                    <div className="col">
                    <input type="text" id="opt2" className="form-control" placeholder="Option 2"  onChange={this.handleChange}/>
                    </div>
                    <div className="col">
                    <input type="text" id="opt3" className="form-control" placeholder="Option 3"  onChange={this.handleChange}/>
                    </div>
                    <div className="col">
                    <input type="text" id="opt4" className="form-control" placeholder="Option 4"  onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="ans">Answer</label>
                    <select className="form-control" id="ans" onChange={this.handleChange}>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                    </select>
                </div>
                <br />
                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Next Question</button>
                </form>
            <hr /><br />
            <button type="button" className="btn btn-danger" onClick={this.handleOver}>Exit</button>
            <br /><br /><hr/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
        id: ownProps.match.params.id,
        qid: ownProps.match.params.qid
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createQues: (creds) => dispatch(createQues(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);