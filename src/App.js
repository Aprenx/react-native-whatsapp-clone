import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';
import NavigationHelper from './navigation/NavigationHelper';

export default class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCehfyi6MmC5Iy5tCN_xFBoysICJpnv3Po",
            authDomain: "whatsapp-clone-0.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-0.firebaseio.com",
            projectId: "whatsapp-clone-0",
            storageBucket: "whatsapp-clone-0.appspot.com",
            messagingSenderId: "62045595591"
        });
    }
     
    render(){
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes ref={navigatorRef => { NavigationHelper.setContainer(navigatorRef); }} />
            </Provider>
        );
    }
}
