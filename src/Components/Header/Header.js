import React, { Component } from 'react';
import headerImg from '../../static/img/header-img.jpg';
import '../../static/css/Header.css';


class App extends Component {
    render() {
        return (
            <header>
            <div className = "App">
                <div className = "App-header">
                    <div className = "header-Center">
                        <h2> Dorm Mate </h2>
                        <a href="#" className="App-anchor" style={{float:'right'}}>Log In</a>
                        <a href="#" className="App-anchor" style={{float:'right'}}>Sign Up</a>
                    </div>
                    <div className = "search-cont">
                        <form>
                            <label>
                                <input className= "inputBox" type="text" name="search" placeholder="Search Universities/Colleges" required/>

                            </label>
                            <button className= "btn-search" type="submit" value="Submit"> Go </button>
                        </form>
                    </div>
                </div>
            </div>
            </header>
        );
    }
}

export default App;
