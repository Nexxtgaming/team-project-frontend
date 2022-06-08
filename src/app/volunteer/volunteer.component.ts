import { Component, OnInit } from '@angular/core';
import { VolunteersOffer } from '../offers/volunteers-offer.model';
import {OFFERS} from "./mock-volunteers-offer";

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

  offerList!: VolunteersOffer[];

  constructor() {}


  ngOnInit(): void {
    this.offerList = OFFERS;
  }

}
