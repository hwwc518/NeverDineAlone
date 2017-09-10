import React, { Component } from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import DateTimeField  from 'react-bootstrap-datetimepicker';
import Rating from './ProfileParts/Rating';
import ReviewCard from './ProfileParts/ReviewCard';

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
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
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

                    <Row>
                      <Col md={4} ></Col>
                      <Col md={2} ><h4>Overall :</h4> </Col>
                      <Col md={6}><Rating stars="4.8" reviewWidth="95%" /></Col>
                    </Row>
 
                    <Row>
                      <Col md={4} ></Col>
                      <Col md={2} ><h4>Food :</h4> </Col>
                      <Col md={6}><Rating stars="4" reviewWidth="80%" /></Col>
                    </Row>

                    <Row>
                      <Col md={4} ></Col>
                      <Col md={2} ><h4>On-Campus :</h4> </Col>
                      <Col md={6}><Rating stars="4.8" reviewWidth="95%" /></Col>
                    </Row>

                    <Row>
                      <Col md={4} ></Col>
                      <Col md={2} ><h4>Off-Campus :</h4> </Col>
                      <Col md={6}><Rating stars="4.5" reviewWidth="90%" /></Col>
                    </Row>

                  </Col>
                  
                  <Col md={6}>
                    <h3>Reviews</h3>

                    <ReviewCard profile="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA2-AAAAJGM2NWI1MzAzLWJhNmUtNDRiNy1hY2U4LTdmOTdhZGEzNTI2OQ.jpg" name="Kevin Foo" rating="10.0" comment="Way better than better than the Fu School of Engineering "/>

                  </Col>
                </Row>
              </Grid>
            </div>
        );
    }

}

         export default CollegeProfile;
