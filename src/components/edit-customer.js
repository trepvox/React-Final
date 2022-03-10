import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  Dropdown from "react-bootstrap/Dropdown";
import  Container from "react-bootstrap/Container";
import walkferret from '../images/walkferret.bmp'
import DropdownItem from "react-bootstrap/esm/DropdownItem";

export default class EditCustomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customerName: props.customerName,
            petName: props.petName,
            petType: props.petType,
            petBreed: props.petBreed,
            
            address: props.address,
            appointmentDay: props.appointmentDay,
            appointmentTime: props.appointmentTime,
            walkDuration: props.walkDuration,
            customerNotes: props.customerNotes,
            walkerNotes: props.walkerNotes,

            _id: props._id
        }

        this.petTypes = ['Dog', 'Cat', 'Sugar Glider', 'Bird', 'Snake', 'Ferret', 'Other'];
        this.appointmentDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.appointmentTimes = ['10 am', '10:30 am', '11 am', '11:30 am', '12 pm', '12:30 pm', '1 pm', '1:30 pm', '2 pm', '2:30 pm'];
        this.walkDurations = ['20 minutes','30 minutes', '45 minutes', '60 minutes', '75 minutes', '90 minutes'];

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setPetType = this.setPetType.bind(this);
        this.setAppointmentDay = this.setAppointmentDay.bind(this);
        this.setAppointmentTime = this.setAppointmentTime.bind(this);
        this.setWalkDuration = this.setWalkDuration.bind(this);
    }

    setPetType(petType) {
        this.setState({
            petType: petType
        });
        console.log("setting petType in edit customer")
    }

    setAppointmentDay(appointmentDay) {
        this.setState({
            appointmentDay: appointmentDay
        });
        console.log("setting appointmentDate in edit customer");
    }

    setAppointmentTime(appointmentTime) {
        this.setState({
            appointmentTime: appointmentTime
        });
        console.log("setting appointmentTIme in edit customer");
    }

    setWalkDuration(walkDuration) {
        this.setState({
            walkDuration: walkDuration
        });
        console.log("setting walkDuration in edit customer");
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const field = target.id.replace('input_', '');

        this.setState({
            [field]: value
        });
        console.log("set state on " + field + " in edit customer");
    }
    
    handleSubmit(event) {
        this.props.updateCustomer(this.state);
        event.preventDefault();
    }

    render() {

        return (
            <div>
                
                {console.log(this.state._id)}
                <Container id="customer-edit" >
                    <form onSubmit={this.handleSubmit} ref={ref => {this.myForm=ref;}} >
                    {/* <p>*{this.state.appointmentDay}</p>
                    <p>*{this.state.appointmentTime}</p>
                    <p>*{this.state.walkDuration}</p> */}
                        <Dropdown>
                            <h5>Walk Day Appointment</h5>
                            <p>Timeslot for the walk on that specific day</p>
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                                {this.state.appointmentDay ? this.state.appointmentDay : 'Select a Day'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                 {this.appointmentDays.map((appointmentDay) => 
                                 <Dropdown.Item 
                                    eventKey={appointmentDay}
                                    onClick={(eventKey) => this.setAppointmentDay(appointmentDay)}>
                                     {appointmentDay} 
                              </Dropdown.Item> )}
                          </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown >
                            <h5>Walk Appointment Time</h5>
                            <p>When do you want to walk to start at?</p>
                            <Dropdown.Toggle  variant="outline-secondary" id="dropdown-basic">
                                {this.state.appointmentTime ? this.state.appointmentTime : 'Select walk start time'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {this.appointmentTimes.map((appointmentTime) =>
                                <Dropdown.Item eventKey = {appointmentTime}
                                onClick={(eventKey) => this.setAppointmentTime(appointmentTime)}>
                                     {appointmentTime} 
                                </Dropdown.Item>)}
                            </Dropdown.Menu>
                        </Dropdown> 

                        <Dropdown >
                            <h5>Walk Time Length</h5>
                            <p>How long do you want the walk to be</p>
                            <Dropdown.Toggle  variant="outline-secondary" id="dropdown-basic">
                                {this.state.walkDuration ? this.state.walkDuration : 'Select Walk Time Amount'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {this.walkDurations.map((walkDuration) =>
                                <Dropdown.Item eventKey = {walkDuration}
                                onClick={(eventKey) => this.setWalkDuration(walkDuration)}>
                                     {walkDuration} 
                                </Dropdown.Item>)}
                            </Dropdown.Menu>
                        </Dropdown> 

                        <div className="form-group">
                            <label htmlFor="customerNotesInput"><h5>Customer's Notes or any special requests for their pet</h5></label>
                            <input 
                              value={this.state.customerNotes} 
                              type="text" 
                              className="form-control" 
                              id="input_customerNotes" 
                              onChange={this.handleChange} 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="walkerNotesInput"><h5>Coworkers's Notes and tips for walking this animal</h5></label>
                            <input 
                              value={this.state.walkerNotes} 
                              type="text" 
                              className="form-control" 
                              id="input_walkerNotes" 
                              onChange={this.handleChange} 
                            />
                        </div>

                        <button type="submit" className="btn btn-outline-success">Update Customer</button>

                    </form>
                </Container>
                <br />
            </div>
            
        );
    }
}