import React, { Component } from 'react';
import '../../../../static/css/CollegeStudentProfile.css';
import profilePic from '../../../../static/img/quaker.jpg';

class Rating extends Component {
    render() {
        return(
            <li className="reviewChartItem">
              <div className="reviewLabel">
                <div className="reviewStars">
                  <span className="starIcon"></span>
                </div>
                4 Stars
              </div>
              <div className="reviewNum">
                70
              </div>
              <div className="reviewFill" id="thirty-five">
              </div>
            </li> 
        );
    }
}

export default Rating;
