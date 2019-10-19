import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { submitQuiz } from '../../store/actions/testActions'
var firebase
//Comment when in development
// firebase = require("../../config/firebase_prod") 
//Comment when in production
firebase = require("../../config/firebase") 

const db = firebase.default.firestore()
var i = 1;

class Test extends Component {
    state = {
        questions: [],
        ans: []
    }

    componentDidMount() {
        const {id} = this.props
        this.setState({
            testid: id,
        });
        db.collection(id)
        .get()
        .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({ questions: data });
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const obj = {
            ans: this.state.ans,
            testid: this.state.testid,
            authid: this.props.auth.email
        }
        const test_sol = this.state.testid.concat("_sub")
        db.collection(test_sol).doc(this.props.auth.email).get().then((doc) => {
            if(doc.exists){
                this.props.history.push('/error/234')
            }else{
                this.props.submitQuiz(obj)
                this.props.history.push('/')
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

    handleChange = (e) => {
        let arr = {...this.state.ans}; 
        arr[e.target.id] = e.target.value;
        this.setState({ans: arr});
    }

    render() {
        const { auth, id} = this.props;
        if (auth.isLoaded && (auth.isEmpty || typeof id === "undefined")) return <Redirect to='/' />
        return (
            <div className="container">
                <br/>
                <h1>Quiz</h1>
                <br/>
                <form onSubmit={this.handleSubmit}>
                {this.state.questions.map(question => (
                    <div className="card" style={{marginTop: 20}} key={question.quesid}>
                        <div className="card-header" style={{textAlign: "left"}}>
                            {i++}: {question.ques}
                        </div>
                        <div className="card-body">
                            <ul className="list-group" style={{textAlign: "left"}}>
                                <div className="row">
                                <li className="col-6 list-group-item">A: {question.opt1}</li>
                                <li className="col-6 list-group-item">B: {question.opt2}</li>
                                <li className="col-6 list-group-item">C: {question.opt3}</li>   
                                <li className="col-6 list-group-item">D: {question.opt4}</li>
                                </div>
                            </ul>
                        </div>
                        <div className="form-group row">
                            <label className="col-10" style={{textAlign: "right"}} htmlFor={question.quesid}><b>Answer:</b></label>
                            <div className="col-2">
                            <select className="form-control" onChange={this.handleChange} id={question.quesid}>
                                <option></option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                            </select>
                            </div>
                        </div>
                    </div>
                ))}
            <br/><br/>
            <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </form>
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

const mapDispatchToProps = (dispatch) => {
    return {
        submitQuiz: (creds) => dispatch(submitQuiz(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);