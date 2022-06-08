import { Component, OnInit } from '@angular/core';
import { VolunteersOffer } from '../offers/volunteers-offer.model';
import {OFFERS} from "./mock-volunteers-offer";
import {TokenStorageService} from "../auth/token-storage.service";

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

  offerList!: VolunteersOffer[];
  role!: string;

  constructor(private token: TokenStorageService) {}


  ngOnInit(): void {
    this.offerList = OFFERS;
    this.token.getAuthorities().every(role => {
      if (role === 'ROLE_REFUGEE') {
        this.role = 'refugee';
        return false;
      }
      if (role === 'ROLE_HELPER') {
        this.role = 'helper';
        return false;
      }
      if (role === 'ROLE_ADMIN') {
        this.role = 'admin';
        return false;
      }
      this.role = 'user';
      return true;
    });
  }

}
