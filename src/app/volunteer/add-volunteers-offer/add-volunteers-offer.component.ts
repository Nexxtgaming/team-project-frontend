import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {VolunteerService} from "../volunteer.service";
import {TokenStorageService} from "../../auth/token-storage.service";
import {OfferRequest} from "../../offers/request/offer-request";

@Component({
  selector: 'app-add-volunteers-offer',
  templateUrl: './add-volunteers-offer.component.html',
  styleUrls: ['./add-volunteers-offer.component.css']
})
export class AddVolunteersOfferComponent implements OnInit {

  form: any = {}
  offer!: OfferRequest;

  constructor(private volunteerService: VolunteerService,
              private tokenService: TokenStorageService,
              private location : Location) { }

  ngOnInit(): void {
  }

  onSubmit() {

    this.offer = new OfferRequest(
      this.form.title,
      this.form.description,
      this.form.city,
    );

    this.volunteerService.addOffer(this.offer).subscribe();
  }

  goBack() {
    this.location.back();
  }
}
