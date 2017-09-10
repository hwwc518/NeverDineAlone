import React, { Component } from 'react';
import headerImg from '../../static/img/header-img.jpg';
import '../../static/css/Header.css';
import collegesArray from "../CollegeNames.json";
import 'react-power-select/dist/react-power-select.css'
import { PowerSelect } from 'react-power-select'

class App extends Component {
    constructor(props) {
    	super(props);
	this.state = {colleges: []};
         }
    
    componentWillMount () {
	for (var i = 0; i < collegesArray.length; i++) {
	    this.state.colleges.push(collegesArray[i].FIELD1);
	}
    }

    getCollegeInfo() {
        console.log("I am called");
        var college = document.getElementsByClassName("PowerSelect__TriggerLabel")[0];
        var onLoad = true;
        if (onLoad && (college.innerText == null || college.innerText == "") ){
            onLoad = !onLoad;
        }else
            window.location.replace("http://localhost:3000/search?college="+college.innerText);

    }
    
    state = {
	selectedCollege: null,
    };

    handleChange = ({ option }) => {
        this.setState({ selectedCollege: option });
    };
    
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

                  <div className="demo">
		    <h1>Search Colleges</h1>
		    <PowerSelect
	               className="searcher"
	               options={this.state.colleges}
	               selected={this.state.selectedCollege}
	               optionLabelPath="name"
	               searchIndices={['name', 'code']}
	               onChange={this.handleChange}
		       />
		  </div>
                  <button className= "btn-search" type="submit" value="Submit"
                          onClick={this.getCollegeInfo}> Go </button>

                </div>
                </div>
            </div>
            </header>
        );
    }
}

export default App;
