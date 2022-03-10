import { walkingService } from '../rest/walkingApi';
import React from 'react';
import CustomerInfo from './customer';

export default class CustomerList extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            customers : []
        }

        this.getCustomers = this.getCustomers.bind(this);
        this.updateCustomer = this.updateCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.CustomerInfos = this.CustomerInfos.bind(this);
    }

    getCustomers =async() => {
        this._refreshData();
    }

        updateCustomer = async(customer) => {
            await walkingService.update(customer);
            this._refreshData();
        }

        // CustomerInfos isn't passing props properly
        CustomerInfos() {
                    console.log("starting customerinfos in customer-list", this.state.customers);
            return this.state.customers.map(customer => {
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