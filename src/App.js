import React, { Component } from 'react';
import Header from './Components/Header/Header'
import CollegeProfile from './Components/Body/Profile/CollegeProfile'
import CollegeStudentProfile from './Components/Body/Profile/CollegeStudentProfile'

//import Footer from './Components/Footer'
import CollegeInfo from './Components/CollegeInfo'


import './static/css/App.css';

class App extends Component {
    render() {
        return (
			<Header/>
			//<CollegeStudentProfile/>
        );
    }
}

export default App;
