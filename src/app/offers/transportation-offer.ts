import { MapOffer } from './map-offer';

export class TransportationOffer extends MapOffer {
  cityOfArrival!: string;
  seatsAvailable!: number;
  dateOfDeparture!: string;
  dateOfArrival!: string;
  vehicleType!: string;
}
