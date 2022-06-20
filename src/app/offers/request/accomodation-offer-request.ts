import {MapOfferRequest} from "./map-offer-request";


export class AccommodationOfferRequest extends MapOfferRequest {
  capacity!: number;

  constructor(title: string, description: string, city: string, address: string, capacity: number) {
    super(title, description, city, address);
    this.capacity = capacity;
  }
}
