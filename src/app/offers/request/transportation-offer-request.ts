import {MapOfferRequest} from "./map-offer-request";

export class TransportationOfferRequest extends MapOfferRequest {
  cityOfArrival!: string;
  seatsAvailable!: number;
  dateOfDeparture!: string;
  dateOfArrival!: string;
  vehicleType!: string;

  constructor(title: string, description: string, city: string, address: string, cityOfArrival: string, seatsAvailable: number, dateOfDeparture: string, dateOfArrival: string, vehicleType: string) {
    super(title, description, city, address);
    this.cityOfArrival = cityOfArrival;
    this.seatsAvailable = seatsAvailable;
    this.dateOfDeparture = dateOfDeparture;
    this.dateOfArrival = dateOfArrival;
    this.vehicleType = vehicleType;
  }
}
