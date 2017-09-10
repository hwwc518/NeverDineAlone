import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/index.css';
import {Router, Route} from 'react-router';
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
        <Route path="/search" component={CollegeInfo}/>
      </div>
    </BrowserRouter>
        , document.getElementById('root')
);

registerServiceWorker();
