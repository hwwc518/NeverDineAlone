import React, { Component } from 'react';
import headerImg from '../../static/img/header-img.jpg';
import '../../static/css/Header.css';

class App extends Component {
    render() {
        return (
            <div className = "App" >
                <div className = "App-header">
                    <div className = "header-Center">
                        <h2> Never Dine Alone </h2>
                        <a href="#" className="App-anchor" style={{float:'right'}}>Log In</a>
                        <a href="#" className="App-anchor" style={{float:'right'}}>Sign Up</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
