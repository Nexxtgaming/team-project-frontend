export class Offer {
  id?: number;
  userId: number;
  title : string;
  description: string;
  city: string;
	expirationDate: Date;


  constructor(userId: number, title: string, description: string, city: string, expirationDate: Date) {
    this.userId = userId;
    this.title = title;
    this.description = description;
    this.city = city;
    this.expirationDate = expirationDate;
  }
}
