import { VolunteersOffer } from '../offers/volunteers-offer.model';

export const OFFERS: VolunteersOffer[] = [
  {id: 1, userId: 1, title: "Food", description: "We give food for family in need", city: "Lodz", expirationDate: new Date()},
  {id: 2, userId: 2, title: "Clothes", description: "Free clothes for children", city: "Krakow", expirationDate: new Date()},
  {id: 3, userId: 2, title: "Bank", description: "Help to open a bank account in Poland", city: "Lodz", expirationDate: new Date()},
  {id: 4, userId: 3, title: "Food", description: "We give food for family in need", city: "Gdansk", expirationDate: new Date()},
  {id: 5, userId: 1, title: "Health", description: "Free medical consultation", city: "Warsaw", expirationDate: new Date()}
	]

