import {OfferRequest} from "./offer-request";

export class MapOfferRequest extends OfferRequest {
  address?: string;

  constructor(title: string, description: string, city: string, address: string) {
    super(title, description, city);
    this.address = address;
  }
}
