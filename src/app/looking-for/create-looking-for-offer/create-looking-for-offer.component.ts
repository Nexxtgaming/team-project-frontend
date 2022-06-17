import { Component, OnInit } from '@angular/core';
import {LookingForRequest} from "../../offers/request/looking-for-request";
import {RefugeeService} from "../refugee.service";
import {TokenStorageService} from "../../auth/token-storage.service";
import {Location} from "@angular/common";
import {OfferRequest} from "../../offers/request/offer-request";
import {LookingForTypes} from "../../offers/LookingForType";

@Component({
  selector: 'app-create-looking-for-offer',
  templateUrl: './create-looking-for-offer.component.html',
  styleUrls: ['./create-looking-for-offer.component.css']
})
export class CreateLookingForOfferComponent implements OnInit {

  form: any = {};
  offer!: LookingForRequest;

  constructor(private refugeeService: RefugeeService,
              private tokenService: TokenStorageService,
              private location : Location) { }

  ngOnInit(): void {
  }

  onSubmit() {

    this.form.type = LookingForTypes[this.form.type.toUpperCase()];

    this.offer = new LookingForRequest(
      this.form.title,
      this.form.description,
      this.form.city,
      this.form.type
    );
    this.refugeeService.addOffer(this.offer).subscribe();
  }

  goBack() {
    this.location.back();
  }



}
