import {Directive, Input} from '@angular/core';
import {GoogleMapsAPIWrapper} from '@agm/core';

declare var google: any;


@Directive({
    selector: 'sebm-google-map-directions'
})
export class DirectionsMapDirective {
    @Input() origin;
    @Input() destination;
    @Input() travelMode;

    constructor(private gmapsApi: GoogleMapsAPIWrapper) {
    }

    ngOnInit() {
        this.gmapsApi.getNativeMap().then(map => {
            const directionsService = new google.maps.DirectionsService();
            const directionsDisplay = new google.maps.DirectionsRenderer();
            directionsDisplay.setMap(map);
            const options = {
                origin: this.origin,
                destination: this.destination,
                travelMode: this.travelMode
            };
            console.log(options);
            directionsService.route(options, (response, status) => {
                console.log(response);
                if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });

        });
    }
}