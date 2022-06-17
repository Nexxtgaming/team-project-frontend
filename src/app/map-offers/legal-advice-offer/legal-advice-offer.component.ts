import { Component, OnInit } from '@angular/core';
import {MapOfferService} from "../map-offer.service";
import {Location} from "@angular/common";
import {LegalAdviceOfferRequest} from "../../offers/request/legal-advice-offer-request";

@Component({
  selector: 'app-legal-advice-offer',
  templateUrl: './legal-advice-offer.component.html',
  styleUrls: ['./legal-advice-offer.component.css']
})
export class LegalAdviceOfferComponent implements OnInit {

  form: any = {};
  legal_advice_offer!: LegalAdviceOfferRequest;

  constructor(private mapOfferService: MapOfferService,
              private location : Location) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.legal_advice_offer = new LegalAdviceOfferRequest(
      this.form.title,
      this.form.description,
      this.form.address,
      this.form.city
    );

    this.mapOfferService.addLegalAdviceOffer(this.legal_advice_offer).subscribe();
  }

  goBack() {
    this.location.back();
  }

}
