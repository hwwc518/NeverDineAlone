import React, { Component } from 'react';
import Header from './Components/Header/Header';
import CollegeProfile from './Components/Body/Profile/CollegeProfile';
import CollegeStudentProfile from './Components/Body/Profile/CollegeStudentProfile';
import SignUp from './Components/SignUp';
//import Footer from './Components/Footer'
import CollegeInfo from './Components/CollegeInfo';


import './static/css/App.css';
import './static/css/SignUp.css';

class App extends Component {
    render() {
        return (
			<Header/>
        );
    }
}

export default App;
