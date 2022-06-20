import { Component, OnInit } from '@angular/core';
import {AccommodationOfferRequest} from "../../offers/request/accomodation-offer-request";
import {MapOfferService} from "../map-offer.service";
import {Location} from "@angular/common";
import {TranslationOfferRequest} from "../../offers/request/translation-offer-request";

@Component({
  selector: 'app-translation-offer',
  templateUrl: './translation-offer.component.html',
  styleUrls: ['./translation-offer.component.css']
})
export class TranslationOfferComponent implements OnInit {

  form: any = {};
  translation_offer!: TranslationOfferRequest;

  constructor(private mapOfferService: MapOfferService,
              private location : Location) { }

  ngOnInit(): void {
  }

  onSubmit() {

    this.translation_offer = new TranslationOfferRequest(
      this.form.title,
      this.form.description,
      this.form.city,
      this.form.address,
      this.form.language
    );

    this.mapOfferService.addTranslationOffer(this.translation_offer).subscribe();
  }

  goBack() {
    this.location.back();
  }
}
