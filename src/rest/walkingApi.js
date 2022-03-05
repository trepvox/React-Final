const WALKING_ENDPOINT = 'https://crudcrud.com/api/0302b480ea3e41d4b2d76d4348d95160';
//need a crudcrud url

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
                // walkTime: walking.walkTime,
                // walkDay: walking.walkDay,
                // animalType: walking.animalType,
                // animalName: walking.animalName,
                // notes: walking.notes
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
            const resp = await fetch(`${WALKING_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(customer)
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