import { Company } from './Company';
import { Mappable } from './Mappable';
import { User } from './User';

export class Map {
    private googleMap: google.maps.Map;

    constructor(mapDiv: Element) {
        this.googleMap = new google.maps.Map(mapDiv, {
            zoom: 2
        });
    }

    addMarker(mappable: Mappable) {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: mappable.location,
            label: mappable.name
        });
        this.googleMap.setCenter(mappable.location);

        const infoWindow = new google.maps.InfoWindow({
            content: mappable.infoHtml()
        });
        marker.addListener('click', () => {
            infoWindow.open(this.googleMap, marker);
        });
    }
}
