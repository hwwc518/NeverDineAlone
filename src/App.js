import React, { Component } from 'react';
import Header from './Components/Header/Header'
import CollegeProfile from './Components/Body/Profile/CollegeProfile'
//import Footer from './Components/Footer'

import './static/css/App.css';

class App extends Component {
    render() {
        return (
            <div>
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
              
              <CollegeProfile/>
            </div>
        );
    }
}

export default App;
