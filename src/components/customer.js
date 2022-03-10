import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import EditCustomer from './edit-customer';
import CustomerList from './customer-list';
import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';

export default class CustomerInfo extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }
    
    handleDeleteClick() {
        console.log(this.props._id);
        this.props.deleteCustomer(this.props._id);
    }

    componentDidMount() {
        console.log(this.props);
    this.props._refreshData();
    }

    render() {

        return(
            <div> 
                <Container>
                    <Card id="customer" key={this._id}>
                        <Card.Header id='customerheader'> <h3>Customer's Name: {this.props.customerName} </h3></Card.Header>
                        <Card.Body>
                            <Card.Subtitle id='customersubtitle'>
                                <h4>Pet's Name is:  {this.props.petName} <br /> who is a {this.props.petBreed}.</h4>
                            </Card.Subtitle>

                            {/* <Card.Text id='customertext'> */}
                                <h5>Customer's Address {this.props.address}</h5>
                                    
                                <h5>Their scheduled walk is on {this.props.appointmentDay} 
                                    at {this.props.appointmentTime} for {this.props.walkDuration}.</h5>
                            {/* </Card.Text> */}
                            <br />
                            {/* <Card.Text id='customertext'> */}
                                <h5> <li>Notes from the Customer: </li>  {this.props.customerNotes} </h5>
                                <h5> <li>Coworkers notes: </li> {this.props.walkerNotes} </h5>
                            {/* </Card.Text> */}
                        </Card.Body>

                        <EditCustomer {...this.props} updateCustomer={this.props.updateCustomer} />
                        <ButtonGroup>
                            <Button variant= "btn btn-outline-danger" id="deleteButton" onClick={this.handleDeleteClick}>Delete Customer</Button>
                        </ButtonGroup>
                    </Card>
                </Container>
                <br />
            </div>
        );
    }
}