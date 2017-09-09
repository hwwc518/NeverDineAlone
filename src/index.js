import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD1j-jKv77ffwom2sz4A8Jb7NWLrc8rPs8",
    authDomain: "sliceofcollege-1fcaa.firebaseapp.com",
    databaseURL: "https://sliceofcollege-1fcaa.firebaseio.com",
    projectId: "sliceofcollege-1fcaa",
    storageBucket: "",
    messagingSenderId: "79099187210"
  };
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
