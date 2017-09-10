import React, { Component } from 'react';
import Header from './Components/Header/Header'
import CollegeProfile from './Components/Body/Profile/CollegeProfile'
import CollegeStudentProfile from './Components/Body/Profile/CollegeStudentProfile'
import CollegeInfo from './Components/CollegeInfo'

//import Footer from './Components/Footer'



import './static/css/App.css';

class App extends Component {
    render() {
        return (
                <div>
                  <CollegeProfile/>
                </div>

            
        );
    }
}

export default App;
