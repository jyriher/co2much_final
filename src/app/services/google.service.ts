import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class GoogleService {

    apiUrl = 'https://maps.googleapis.com/maps/api/directions';

    constructor(private http: HttpClient) {
    }

    getVehicle(nimi) {
        const body = `routes() {
                        legs {
                        distance {
                           text
                        }
          }
        }
`;

    const headers = {
        headers: new HttpHeaders().set('Content-type', 'application/graphql')
    };

    interface VehicleData {
    data: Object;

}

    return this.http.post<VehicleData>(this.apiUrl, body, headers);
   }

}