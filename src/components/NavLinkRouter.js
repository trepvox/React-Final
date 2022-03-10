import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"
import Home from './home';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import CustomerInfo from './customer';
import EditCustomer from './edit-customer';
import ImportantRules from './importantRules';
import Contact from './contact';
import { NewCustomer } from './new-customer';
import CustomerList from './customer-list';
import ProjectRequirements from './projectRequirements'

export default function NavLinkRouter() {
    return (
        <Router>
            <Container>
            <Nav className="navBar">
                <Link to= "/" exact="true" className='nav-link'></Link>
                    <Link to='/home' className='nav-link'>Home</Link>
                    <NavDropdown title="Customers" id="customer-nav-dropdown">
                        <NavDropdown.Item href="/customers" className='nav-link'>Current Customers</NavDropdown.Item>
                        <NavDropdown.Item href="/createCustomer" className='nav-link'>New Customer</NavDropdown.Item>
                    </NavDropdown>
                    <Link to='/importantRules' className='nav-link'>Employee Rules</Link>
                    <Link to='/contact' className='nav-link'>Contact Us</Link>
                    <Link to='/projectrequirements' className='nav-link'>Project Requirements</Link>
                </Nav>


                <Switch>
                    <Route path="/customers">
                        <CustomerList /> 
                    </Route>
                    <Route path="/createCustomer">
                        <NewCustomer /> 
                    </Route>


                    <Route path="/importantRules">
                        <ImportantRules />
                    </Route>

                    <Route path="/contact">
                        <Contact />
                    </Route>

                    <Route path="/projectRequirements">
                        <ProjectRequirements />    
                    </Route>

                    <Route path="/home">
                        <Home />
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Container>
        </Router>
    );
}