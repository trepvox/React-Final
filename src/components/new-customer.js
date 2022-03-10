import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import { walkingService } from '../rest/walkingApi';

export const NewCustomer = (props) => {
    const [customerName, setCustomerName] = useState('');
    const [petName, setPetName] = useState('');
    // const [petType, setPetType] = useState('');
    const [petBreed, setPetBreed] = useState('');

    const [address, setAddress] = useState('');
    const [appointmentDay, setAppointmentDay] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [walkDuration, setWalkDuration] = useState('');
    const [customerNotes, setCustomerNotes] = useState('');
    const [walkerNotes, setWalkerNotes] = useState('');

    // const petTypes = ['Dog', 'Cat', 'Sugar Glider', 'Bird', 'Snake', 'Ferret', 'Other'];
    const appointmentDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const appointmentTimes = ['10 am', '10:30 am', '11 am', '11:30 am', '12 pm', '12:30 pm', '1 pm', '1:30 pm', '2 pm', '2:30 pm'];
    const walkDurations = ['20 minutes','30 minutes', '45 minutes', '60 minutes', '75 minutes', '90 minutes'];

    const handleSubmit = (event) => {
        event.preventDefault();
        addNewCustomer({customerName, petName, petBreed, address, appointmentDay, appointmentTime, walkDuration, customerNotes, walkerNotes})
        console.log('The customers props are ' + customerName + ' ' + petName + ' ' + petBreed + ' ' + address + ' ' + appointmentDay + ' ' + 
                    appointmentTime + ' ' + walkDuration + ' ' + customerNotes + ' ' + walkerNotes + '.');
        // console.log('The customers props are `/${this.props}`' );
        // console.log('The customers props are {this.props.customerName, petName, petBreed, address, appointmentDay, appointmentTime, walkDuration, customerNotes, walkerNotes}' );
    }

    const _refreshData = async() => {
        const customers = await walkingService.getAll();
    }

    function componentDidMount() {
        _refreshData();
    }

    const addNewCustomer = async(customer) => {
        await walkingService.create(customer);
        _refreshData();
    }

    return (
        <form onSubmit={handleSubmit}>
            <Container id="customer-edit">
                <div className='form-group'>
                    <center><h2>New Customer form</h2></center>
                    <label htmlFor="customerNameInput"><h5>New Customer's Name</h5></label>
                    <input name="customerName" value={customerName} type="text" className="form-control" id="customerNameInput" 
                    onChange={(e) => setCustomerName(e.target.value)} />
                    <div className="form-group">
                        <br></br>

                        <div className="form-group">
                            <label htmlFor="petNameInput"><h5>Pet's Name</h5></label>
                            <input name="petName" value={petName} type="text" className="form-control" id="petNameInput" 
                            onChange={(e) => setPetName(e.target.value)} /><br></br>
                        </div>
                    </div>
                    <div />
                    {/* <Dropdown>
                        <h5>Pet Type</h5>
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                            {petType}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {petTypes.map((petType, i) => <Dropdown.Item eventKey = {i} onSelect={(eventKey) => setPetType(petType)}> {petType} </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                        <br></br> */}

                    <div className="form-group">
                        <label htmlFor="petBreedInput"><h5>Pet's Breed</h5></label>
                        <input name="petBreed" type="text" value={petBreed} className="form-control" id="petBreedInput" 
                            onChange={(e) => setPetBreed(e.target.value)} /><br></br>
                    </div>

                    <div className="form-group">
                        <label htmlFor="addressInput"><h5>Customer's Address</h5> </ label>
                        <input name="address" value={address} type="text" className="form-control" id="addressInput" 
                            onChange={(e) => setAddress(e.target.value)} />
                    </div>
                        <br></br> 

                    <Dropdown>
                        <h5>Walk Appointment Day</h5>
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                            {appointmentDay ? appointmentDay : 'Select a Day'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {appointmentDays.map((appointmentDay) => 
                                <Dropdown.Item 
                                    eventKey = {appointmentDay} 
                                    onClick={(eventKey) => setAppointmentDay(appointmentDay)}>
                                        {appointmentDay} 
                                </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                        {/* <br></br> */}
                    <Dropdown>
                        <h5>Walk Appointment Time</h5>
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                            {appointmentTime ? appointmentTime : 'Select walk start time'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {appointmentTimes.map((appointmentTime) => 
                                <Dropdown.Item 
                                    eventKey = {appointmentTime} 
                                    onClick={(eventKey) => setAppointmentTime(appointmentTime)}>
                                        {appointmentTime} 
                                </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                        {/* <br></br> */}
                        <Dropdown >
                            <h5>Walk Time Length</h5>
                            <p>How long do you want the walk to be</p>
                            <Dropdown.Toggle  variant="info" id="dropdown-basic">
                                {walkDuration ? walkDuration : 'Select Walk Time Amount'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {walkDurations.map((walkDuration) =>
                                <Dropdown.Item eventKey = {walkDuration}
                                onClick={(eventKey) => setWalkDuration(walkDuration)}>
                                     {walkDuration} 
                                </Dropdown.Item>)}
                            </Dropdown.Menu>
                    </Dropdown>
                        <br></br>

                    <div className="form-group">
                        <label htmlFor="customerNotesInput"><h5>Customer's Notes about their pet, quirks, needed items, ect.</h5> </ label>
                        <input name="customerNotes" value={customerNotes} type="text" className="form-control" id="customerNotesInput" 
                            onChange={(e) => setCustomerNotes(e.target.value)} />
                    </div>
                        <br></br> 

                    <div className="form-group">
                        <label htmlFor="walkerNotesInput"><h5>Coworkers Notes about their pet, quirks, needed items, ect.</h5> </ label>
                        <input name="walkerNotes" value={walkerNotes} type="text" className="form-control" id="walkerNotesInput" 
                            onChange={(e) => setWalkerNotes(e.target.value)} />
                    </div>
                        <br></br> 
                </div>

                <button type="submit" className="btn btn-outline-success">Add New Customer</button>
            
            </Container>
        </form>
    );
}