import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users/1';

interface Address {
    street: string;
    city: string;
}

interface User {
    id: number;
    name: string;
    address: Address;
    phone: String;
}

axios.get(url).then((response) => {
    const { id, name, phone } = response.data as User;
    const city = response.data.address.city;
    logUser(id, name, city, phone);
});

function logUser(id: number, name: string, city: string, phone: String) {
    console.log(`
      USER:
        UserId: ${id}
        Name: ${name}
        City: ${city}
        Phone: ${phone}`);
}
