import {Component, OnInit} from '@angular/core';
import {MapOfferService} from "./map-offer.service";
import {Offer} from "../offers/offer.model";
import {TokenStorageService} from "../auth/token-storage.service";

@Component({
  selector: 'app-map-offers',
  templateUrl: './map-offers.component.html',
  styleUrls: ['./map-offers.component.css']
})
export class MapOffersComponent implements OnInit {

  zoom = 12
  center!: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }

  offerList!: Offer[];
  role!: string;

  constructor(private mapOfferService: MapOfferService,
              private token: TokenStorageService) {}

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
    this.getRole();
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


  getAccommodationOffer() {
    this.mapOfferService.getAccommodationOfferList().subscribe(
      list => this.offerList = list
    )
  }

  getLanguageOffer() {
    this.mapOfferService.getLanguageCourseOfferList().subscribe(
      list => this.offerList = list
    )
  }

  getLegalAdviceOffer() {
    this.mapOfferService.getLegalAdviceOfferList().subscribe(
      list => this.offerList = list
    )
  }

  getTranslationOffer() {
    this.mapOfferService.getTranslationOfferList().subscribe(
      list => this.offerList = list
    )
  }

  getTransportationOffer() {
    this.mapOfferService.getTransportationOfferList().subscribe(
      list => this.offerList = list
    )
  }
}
