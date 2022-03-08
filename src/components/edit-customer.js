import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  Dropdown from "react-bootstrap/Dropdown";
import  Container from "react-bootstrap/Container";
import walkferret from '../images/walkferret.bmp'

export default class EditCustomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customerName: props.customerName,
            petsName: props.petsName,
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
    }

    setAppointmentDay(appointmentDay) {
        this.setState({
            appointmentDay: appointmentDay
        });
    }

    setAppointmentTime(appointmentTime) {
        this.setState({
            appointmentTime: appointmentTime
        });
    }

    setWalkDuration(walkDuration) {
        this.setState({
            walkDuration: walkDuration
        });
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const customerName = target.customerName;

        this.setState({
            [customerName]: value
        });
    }
    
    handleSubmit(event) {
        this.props.updateCustomer(this.state);
        event.preventDefault();
    }

    render() {

        return (
            <div>
                <Container id="customer-edit" key= {this._id}>
                    <form onSubmit={this.handleSubmit} ref={ref => {this.myForm=ref;}} >
                        {/* <div className="form-group">
                            <h3>Edit a Customer's info</h3>
                            <label htmlFor="customerNameInput"><h5>Customer's Name</h5></label>
                            <input name="customerName" value={this.state.name} type="text" className="form-control" id="customerNameInput" onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="petsNameInput"><h5>Pet's name</h5></label>
                            <input name="petsName" value={this.state.petsName} type="text" className="form-control" id="petsNameInput" onChange={this.handleChange} />
                        </div>

                        <Dropdown>
                            <h5>Pet's Type</h5>
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                            {this.state.petType}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            {this.petTypes.map((petType, i) => <Dropdown.Item eventKey = {i} onSelect={(eventKey) => this.setPetType(petType)} > {petType} </Dropdown.Item>)}
                            </Dropdown.Menu>
                        </Dropdown>
                        <p />

                        <div className="form-group">
                            <label htmlFor="petBreedInput"><h5>Pet's Breed</h5></label>
                            <input name="petBreed" value={this.state.petBreed} type="text" className="form-control" id="petBreedInput" onChange={this.handleChange} />
                        </div>
                        <p />
                        <img src={walkferret} alt="ferret" class="walkferret" />

                        <div className="form-group">
                            <label htmlFor="addressInput"><h5>Customer's Address</h5></label>
                            <input name="address" value={this.state.address} type="text" className="form-control" id="addressInput" onChange={this.handleChange} />
                        </div> */}

                        <Dropdown>
                            <h5>Walk Day Appointment</h5>
                            <p>Timeslot for the walk on that specific day</p>
                            <Dropdown.Toggle key={"1"} variant="outline-secondary" id="dropdown-basic">
                                {this.state.appointmentDay}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {this.appointmentDays.map((appointmentDay, i) => <Dropdown.Item eventKey = {i} onSelect={(eventKey) => this.setAppointmentDay(appointmentDay)} > {appointmentDay} </Dropdown.Item>)}
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown >
                            <h5>Walk Appointment Time </ h5>
                            <p>Timeslot for the walk to start</p>
                            <Dropdown.Toggle key={"2"} variant="outline-secondary" id="dropdown-basic">
                                {this.state.appointmentTime}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {this.appointmentTimes.map((appointmentTime, i) => <Dropdown.Item eventKey = {i} onSelect={(eventKey) => this.setAppointmentTime(appointmentTime)} > {appointmentTime} </Dropdown.Item>)}
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown >
                            <h5>Walk Time Length</h5>
                            <p>How long do you want the walk to be</p>
                            <Dropdown.Toggle key={"3"} variant="outline-secondary" id="dropdown-basic">
                                {this.state.walkDuration}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {this.walkDurations.map((walkDuration, i) => <Dropdown.Item eventKey = {i} onSelect={(eventKey) => this.setWalkDuration(walkDuration)} > {walkDuration} </Dropdown.Item>)}
                            </Dropdown.Menu>
                        </Dropdown>

                        <div className="form-group">
                            <label htmlFor="customerNotesInput"><h5>Customer's Notes or any special requests for their pet</h5></label>
                            <input name="customerNotes" value={this.state.customerNotes} type="text" className="form-control" id="customerNotesInput" onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="coworkerNotesInput"><h5>Coworkers's Notes and tips for walking this animal</h5></label>
                            <input name="coworkerNotes" value={this.state.coworkerNotes} type="text" className="form-control" id="coworkerNotesInput" onChange={this.handleChange} />
                        </div>

                        <button type="submit" className="btn btn-outline-success">Update Customer</button>

                    </form>
                </Container>
            </div>
        );
    }
}