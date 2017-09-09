import React, { Component } from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import DateTimeField  from 'react-bootstrap-datetimepicker';

import '../../../static/css/college.css';
import '../../../static/css/react-datetime.css';

class CollegeProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            date: "1990-06-05",
            format: "YYYY-MM-DD",
            inputFormat: "DD/MM/YYYY",
            mode: "date"
        };
    }

    handleChange(newDate){
        console.log("newDate", newDate);
        return this.setState({date: newDate});
    }

    render() {
        return (
            <div style={{width: 0 }} id="collegeProfile">
              <Grid fluid={true}>
                <Row className="collegeHeader">
                  <div className="mainPhoto" style={{backgroundImage: "url('http://www.med.upenn.edu/bateslab/Quad.jpg')" }}>
                    <div  >
                      <div className="datePicker">
                        <DateTimeField
                           dateTime={this.state.date}
                           format={this.state.format}
                           inputFormat={this.state.inputFormat}
                           onChange={this.handleChange}
                           viewMode={this.state.mode}
                           />
                      </div>
                      <Button className="reserveBtn" bsStyle="danger">Reserve</Button>
                    </div>
                  </div>
                </Row>
              </Grid>

              <Grid>
                <Row className="full-rows">
                  <Col sm={3} md={12}>
                    <h1>University Of Pennsylvania</h1> <br/>
                    <div className="collegeAbout">
                      <p>Penn dates its founding to 1740, when prominent evangelist George Whitefield had the idea of building a Philadelphia charity school that would double as a house of worship for his followers. After construction was underway, however, the cost was seen to be much greater than the available resources, and the project went unfinished for a decade.</p>
                      
                    </div>
                  </Col>

                </Row>
                
                <div className="borderLine"/>
                
                <Row className="full-rows">
                  <Col md={6}>
                    <h3>Rating</h3> <br />
                    <h4>Overall : 4.8</h4> <br />
                    <h4>Food : 5.0</h4> <br />
                    <h4>On Campus : 4.8</h4> <br />
                    <h4>Off Campus : 4.8</h4> <br />
                  </Col>
                  
                  <Col md={6}>
                    <h3>Reviews</h3>
                  </Col>
                </Row>
              </Grid>
            </div>
        );
    }

}

         export default CollegeProfile;
