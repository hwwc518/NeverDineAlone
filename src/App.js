import React, { Component } from 'react';
import Header from './Components/Header/Header'
import CollegeProfile from './Components/Body/Profile/CollegeProfile'
import CollegeStudentProfile from './Components/Body/Profile/CollegeStudentProfile'

//import Footer from './Components/Footer'

import './static/css/App.css';

class App extends Component {
    render() {
        return (
                <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
                <CollegeStudentProfile />
                </div>

        );
    }
}

export default App;
