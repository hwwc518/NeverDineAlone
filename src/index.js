import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/index.css';
import {Route} from 'react-router';
import { BrowserRouter } from 'react-router-dom'

import App from './App';
import CollegeProfile from './Components/Body/Profile/CollegeProfile';
import CollegeStudentProfile from './Components/Body/Profile/CollegeStudentProfile';
import SignUp from './Components/SignUp';
//import Footer from './Components/Footer'
import CollegeInfo from './Components/CollegeInfo';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/signUp" component={SignUp}/>
        <Route path="/search" component={CollegeProfile}/>
        <Route path="/studentprofile" component={CollegeStudentProfile}/>
      </div>
    </BrowserRouter>
        , document.getElementById('root')
);

registerServiceWorker();
