export class OfferRequest {
  title!: string;
  description!: string;
  city!: string;


  constructor(title: string, description: string, city: string) {
    this.title = title;
    this.description = description;
    this.city = city;
  }
}
