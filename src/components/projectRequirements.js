import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import walkferret from '../images/walkferret.bmp'

export default class ProjectRequirements extends React.Component {
    render() {
        return (
            <Container><br />
                <center><h3 id="titleprojectpage">Project's full requirements page</h3></center>
                <Table id='table'>
                    <thead>
                        <tr>
                            <th><h5>Color</h5></th>
                            <th><h5>What it means</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td id="requirement"></td>
                            <td>Requirements</td>
                        </tr>
                        <tr>
                            <td id="completed"></td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td id="analysising"></td>
                            <td>Analysising</td>
                        </tr>
                        <tr>
                            <td id="debugging"></td>
                            <td>Debugging</td>
                        </tr>
                        <tr>
                            <td id="planning"></td>
                            <td>Planning Phase</td>
                        </tr>
                    </tbody>
                </Table> 
                {/* <br /> */}

                {/* <center><img src={walkferret} alt="ferret" class="dogpic" /> </center> <br /> */}

                <Table>
                    <thead>
                        <tr>
                            <th><h5>#</h5></th>
                            <th><h5>Project's Requirement</h5></th>
                            <th><h5>Data</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td id="completed">Use an Api or multiple Apis to create a react app</td>
                            <td id="requirement">https://crudcrud.com/api/47259cdda4204a70b94557f1f1ff5c15/walking</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td id="completed">Use React Router and have at least 3 pages</td>
                            <td id="requirement">Contains 6 pages and a dropdown within the Navbar</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td id="completed">Use React Bootstrap or an alternative styling library</td>
                            <td id="requirement">Uses React-Bootstrap</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td id="completed">Contain at least 10 components</td>
                            <td id="requirement">Has 10 components including the Api</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td id="completed">Allow for all CRUD operations</td>
                            <td id="requirement">All four CRUD operations are performable on the Customer</td>
                        </tr>
                    </tbody>
                </Table>    

                <center><img src={walkferret} alt="ferret" class="dogpic" /> </center>
            </Container>
        );
    }
}