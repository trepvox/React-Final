import React from 'react';
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
// import Media from 'react-bootstrap/Media';
import petfish from '../images/petfish.bmp';

export default class ImportantRules extends React.Component {
    render() {
        return (
            <div>

                <Container className='importantRules'>
                    <center><h1>Our Rules from the Start</h1></center>
                    <Card>
                        <Card.Header id='importantbody'>
                            <h4>Our Staff's rules</h4>
                        </ Card.Header>
                        <Card.Body id='importantbody'>
                                <p id='rulestitle'>
                                    Things we make sure to do for every walk
                                </p>    
                                <ul id='ruleslist'>
                                    <li>Waterbottle</li>
                                    <li>a portable bowl for you to give some water to your animal in case of emergencies</li>
                                    <li>Your phone in case of emergencies</li>
                                    <li>Anything the owner might request you bring with them for the animals walk, 
                                        
                                    <img src={petfish} alt="fish" class="walkferret" /> <br></br>
                                    ie. gloves for handling birds, treats, a musical flute to charm snakes.</li>
                                </ul>
                                {/* do more of this to just flesh this side out */}
                                <h5>Our end goal is to make sure your pets are treated as if they are our pets.</h5>
                        </Card.Body>    
                    </Card>  
                </Container>
            </div>
        );
    }
}