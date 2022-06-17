import { MapOfferRequest } from "./map-offer-request";

export class LegalAdviceOfferRequest extends MapOfferRequest {

  constructor(title: string, description: string, city: string, address: string) {
    super(title, description, city, address);
  }
}
