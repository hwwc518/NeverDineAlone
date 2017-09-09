import React, { Component } from 'react';
import headerImg from '../../static/img/header-img.jpg';
import '../../static/css/App.css';

class App extends Component {
    render() {
        return (
            <div className = "App" >
                <div className = "App-header">
                    <h2> Never Dine Alone </h2>
                    <a href="#" className="App-anchor" id="logIn">Log In</a>
                </div>
                <p className = "App-intro"> To get started, edit <code> src / App.js </code> and save to reload. </p>
            </div>
        );
    }
}

export default App;
