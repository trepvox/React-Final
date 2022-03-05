import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import paw from '../images/paw.bmp'

export default class Contact extends React.Component {
    render() {

        return(
            <div>
                <Container>
                    <Card id="contact">
                        <Card.Header id='contactheader'> <center> <h3>Contact Us</h3> </center> </Card.Header>
                        <Card.Body id='contactbody'>
                            <center><h5>If you need to reach out to us at any time, <br /> here's where you can reach us</h5>
                            <br />
                            <p id='contactphone'>1-(978)-485-985-645-1</p>
                            <p id='contactemail'>petsforwalkies@gmail.gov</p> </center>
                            <center><img src={paw} alt="paw" class="pawprint" /> </center>
                             <br></br>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        );
    }
}