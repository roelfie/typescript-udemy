import faker from 'faker';
import { Mappable } from './Mappable';

export class Company implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    catchPhrase: string;

    constructor() {
        this.name = faker.company.companyName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
        this.catchPhrase = faker.company.catchPhrase();
    }

    infoHtml() {
        return this.catchPhrase;
    }
}
