const WALKING_ENDPOINT = 'https://crudcrud.com/api/90b59f2aad884721956652ce80c307b8/walking';
//need a crudcrud needs a /word at the end of it so it can create something, can be anything of your choosing. 

class WalkingService {
    getAll = async() => {
        try {
            const resp = await fetch(WALKING_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.error(`There was a problem getting your walk: ${e}`);
        }
    }
    update = async(customer) => {
        try {
            let updatedWithoutId = {
                customerName: customer.customerName,
                petName: customer.petName,
                petType: customer.petType,
                petBreed: customer.petBreed,
                address: customer.address,
                appointmentDay: customer.appointmentDay,
                appointmentTime: customer.appointmentTime,
                walkDuration: customer.walkDuration,
                customerNotes: customer.customerNotes,
                walkerNotes: customer.walkerNotes,

            }
            const resp = await fetch(`${WALKING_ENDPOINT}/${customer._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedWithoutId)
            });
            return resp;
        } catch(e) {
            console.error(`There was a problem updating your walk: ${e}`)
        }
    }

    create = async(customer) => {
        try {
            console.log(WALKING_ENDPOINT);
            const resp = await fetch(`${WALKING_ENDPOINT}`, {
                method: 'POST',
                headers: ({
                    'Content-Type': 'application/json'
                }),
                // changed to call every part of the customer rather individually 
                // because calling customer as a whole wasn't working.
                body: JSON.stringify({                    
                "customerName": customer.customerName,
                "petName" : customer.petName,
                "petType": customer.petType,
                "petBreed": customer.petBreed,
                "address": customer.address,
                "appointmentDay": customer.appointmentDay,
                "appointmentTime": customer.appointmentTime,
                "walkDuration": customer.walkDuration,
                "customerNotes": customer.customerNotes,
                "walkerNotes": customer.walkerNotes})
            });
            return resp;
        } catch(e) {
            console.error(`There was a problem creating your walk: ${e}`);
        }
    }

    delete = async(id) => {
        try {
            const resp = await fetch(`${WALKING_ENDPOINT}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return resp;
        } catch(e) {
            console.error(`There was a problem deleting your walk: ${e}`);
        }
    }
}

export const walkingService = new WalkingService();