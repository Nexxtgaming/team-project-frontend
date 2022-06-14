import {Offer} from "./offer.model";

export class LookingForOffer extends Offer{
  type!: string;

  constructor(userId: number, title: string, description: string, city: string, expirationDate: Date, type: string) {
    super(userId, title, description, city, expirationDate);
    this.type = type;
  }
}
