import { Component, OnInit } from '@angular/core';
import {AccommodationOfferRequest} from "../../offers/request/accomodation-offer-request";
import {Location} from "@angular/common";
import {MapOfferService} from "../map-offer.service";

@Component({
  selector: 'app-accommodation-offer',
  templateUrl: './accommodation-offer.component.html',
  styleUrls: ['./accommodation-offer.component.css']
})
export class AccommodationOfferComponent implements OnInit {

  form: any = {};
  accommodation_offer!: AccommodationOfferRequest;

  constructor(private mapOfferService: MapOfferService,
              private location : Location) { }

  ngOnInit(): void {
  }

  onSubmit() {

    this.accommodation_offer = new AccommodationOfferRequest(
      this.form.title,
      this.form.description,
      this.form.city,
      this.form.address,
      this.form.capacity
    );

    this.mapOfferService.addAccommodationOffer(this.accommodation_offer).subscribe();
  }

  goBack() {
    this.location.back();
  }
}
