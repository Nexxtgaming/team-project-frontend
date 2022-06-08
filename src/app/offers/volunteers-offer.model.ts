import { Offer } from './offer.model';

export class VolunteersOffer extends Offer {
	constructor(userId: number, title: string, description: string, city: string, expirationDate: Date) {
		super(userId, title, description, city, expirationDate);
	}
}
