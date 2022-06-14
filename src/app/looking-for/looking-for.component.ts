import { Component, OnInit } from '@angular/core';
import {LookingForOffer} from "../offers/looking-for-offer";
import {RefugeeService} from "./refugee.service";
import {TokenStorageService} from "../auth/token-storage.service";

@Component({
  selector: 'app-looking-for',
  templateUrl: './looking-for.component.html',
  styleUrls: ['./looking-for.component.css']
})
export class LookingForComponent implements OnInit {

  offerList!: LookingForOffer[];
  role!: string;

  constructor(private refugeeService: RefugeeService,
              private token: TokenStorageService) { }

  ngOnInit(): void {
    this.getRole();
    this.getOfferList();
  }

  getRole() {
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

  getOfferList() {
    this.refugeeService.getOfferList().subscribe(
      offerList => this.offerList = offerList
    )
  }
}
