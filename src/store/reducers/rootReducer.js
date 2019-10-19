import authReducer from './authReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import testReducer from './testReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    test: testReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;