import React from 'react';
import { render} from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider, getFirebase} from "react-redux-firebase";
import { createFirestoreInstance, getFirestore, reduxFirestore } from "redux-firestore";
var firebase
var fire

//Comment when in development
// fire = require("./config/firebase_prod") 
//Comment when in production
fire = require("./config/firebase") 

firebase = fire.default

const initialState = {}

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(firebase),
    )
);

const rrfProps = {
	firebase,
	config: {
        userProfile: "users",
        logErrors: false,
        useFirestoreForProfile: true 
	},
    dispatch: store.dispatch,
	createFirestoreInstance
};

render(
  	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rrfProps}>
			<App / >
		</ReactReduxFirebaseProvider>
    </Provider>
    , document.getElementById('root')
);

serviceWorker.unregister();