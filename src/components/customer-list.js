import { walkingService } from '../rest/walkingApi';
import React from 'react';
import CustomerInfo from './customer';

export default class CustomerList extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            customers : []
        }

        this.updateCustomer = this.updateCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.CustomerInfos = this.CustomerInfos.bind(this);
    }

        updateCustomer = async(customer) => {
            await walkingService.update(customer);
            this._refreshData();
        }

        // CustomerInfos isn't passing props properly
        CustomerInfos() {
            console.log("starting customerinfos in customer-list");
            return this.state.customers.map(customer => {
                console.log("starting the map to pair the key to each customer");
                return <CustomerInfo {...customer} key={customer._id}
                        deleteCustomer={this.deleteCustomer}
                        _refreshData={this._refreshData}
                        updateCustomer={this.updateCustomer} 
                        />
            });
        }

        deleteCustomer = async(id) => {
            await walkingService.delete(id);
            this._refreshData();
        }

        _refreshData = async() => {
            const customers = await walkingService.getAll();
            this.setState({ customers });
        }

        componentDidMount() {
            this._refreshData();
        }


    render() {

        return (
            <div>
                {this.CustomerInfos()}
            </div>
        );
    };
}