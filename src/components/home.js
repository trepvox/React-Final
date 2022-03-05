import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/esm/Container';
import dogwalk from '../images/dogwalk.bmp'


export default class Home extends React.Component {
    render() {
        return (
            <center><Container className='home'>
                <h2 id='homeheader'>Pets be walking</h2>    
                <p id='homeparagraphs'>
                    Do your pets need some exercise but you aren't around during the weekday to take care of them until you get home and you're to tired to?
                </ p>
                <img src={dogwalk} alt="dog" class="dogpic" />
                <br />
                <p />
                <p id='homeparagraphs'>   
                    Well let us help you out by having us walk your pets.
                    We aren't shy and our experts are trained to handle all your pets needs so they'll be just as healthy and happy as they can be.
                </p>
                <br />
                <h5 id='homeparagraphs'>Our experts are trained and familiar with any of your pets needs. <br></br>
                    Be it Dog, Cat, or plenty of other animals, we are qualified and ready to help you take care of your pets needs.</h5>
                <p />
                <br />
            </Container></center>
        );
    }
}