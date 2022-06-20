import { MapOfferRequest } from './map-offer-request';

export class LanguageCourseOfferRequest extends MapOfferRequest {
  language!: string;

  constructor(title: string, description: string, city: string, address: string, Language: string) {
    super(title, description, city, address);
    this.language = Language;
  }
}
