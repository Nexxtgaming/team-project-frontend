import { Component, OnInit } from '@angular/core';
import {AccommodationOfferRequest} from "../../offers/request/accomodation-offer-request";
import {MapOfferService} from "../map-offer.service";
import {Location} from "@angular/common";
import {TransportationOfferRequest} from "../../offers/request/transportation-offer-request";

@Component({
  selector: 'app-transportation-offer',
  templateUrl: './transportation-offer.component.html',
  styleUrls: ['./transportation-offer.component.css']
})
export class TransportationOfferComponent implements OnInit {
  form: any = {};
  accommodation_offer!: TransportationOfferRequest;

  constructor(private mapOfferService: MapOfferService,
              private location : Location) { }

  ngOnInit(): void {
  }

  onSubmit() {

    this.accommodation_offer = new TransportationOfferRequest(
      this.form.title,
      this.form.description,
      this.form.city_of_departure,
      this.form.address,
      this.form.city_of_arrival,
      this.form.capacity,
      this.form.date_of_departure,
      this.form.date_of_arrival,
      this.form.vehicle
    );

    this.mapOfferService.addTransportationOffer(this.accommodation_offer).subscribe();
  }

  goBack() {
    this.location.back();
  }
}
