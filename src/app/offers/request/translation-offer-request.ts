import {MapOfferRequest} from "./map-offer-request";

export class TranslationOfferRequest extends MapOfferRequest {
  language!: string;

  constructor(title: string, description: string, city: string, address: string, language: string) {
    super(title, description, city, address);
    this.language = language;
  }
}
