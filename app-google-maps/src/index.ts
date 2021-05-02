import { User } from './User';
import { Company } from './Company';
import { Map } from './Map';

const user = new User();
const company = new Company();

console.log(user);
console.log(company);

const mapDiv = document.getElementById('mapDiv');
const map = new Map(mapDiv);
map.addMarker(company);
map.addMarker(user);
