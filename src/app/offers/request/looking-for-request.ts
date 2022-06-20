import {OfferRequest} from "./offer-request";
import {LookingForTypes} from "../LookingForType";

export class LookingForRequest extends OfferRequest {
  type!: LookingForTypes;

  constructor(title: string, description: string, city: string, type: LookingForTypes) {
    super(title, description, city);
    this.type = type;
  }
}
