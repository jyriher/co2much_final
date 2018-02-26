import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {GoogleService} from '../services/google.service';

declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-mapinfo',
    templateUrl: './mapinfo.component.html',
    styleUrls: ['./mapinfo.component.scss']
})
export class MapinfoComponent implements OnInit{

    constructor(private googleService: GoogleService) {
    }


    latitude = 60.192059;
    longitude = 24.945831;
    locationChosen = false;


    origin = '';  // its a example aleatory position
    destination = '';  // its a example aleatory position
    travelMode = '';
    vehicle: string;
    result: any;

    routes: any;

    hae() {
        this.locationChosen = true;
    }

    reset() {
        this.locationChosen = false;
        this.origin = '';  // its a example aleatory position
        this.destination = '';  // its a example aleatory position
    }


    onChoseLocation(event) {
        this.latitude = event.coords.lat;
        this.longitude = event.coords.lng;
        console.log(event);
    }

    selectMode(event) {
        this.travelMode = event.target.selectedOptions[0].value;
        console.log(event.target.selectedOptions[0].value);
        // this.travelMode =
    }


    ngOnInit() {
        this.googleService.getVehicle(this.vehicle).subscribe(response => {
            console.log(response.data['routes']);
            this.result = response.data['routes'];
            // this.lat = response.data['stops'][0].lat;
            // this.lon = response.data['stops'][0].lon;
        });
    }
 }


