import {Component, OnInit} from '@angular/core';
import {MapOfferService} from "./map-offer.service";
import {TokenStorageService} from "../auth/token-storage.service";
import {MapOffer} from "../offers/map-offer";


@Component({
  selector: 'app-map-offers',
  templateUrl: './map-offers.component.html',
  styleUrls: ['./map-offers.component.css']
})
export class MapOffersComponent implements OnInit {

  zoom = 12
  geocode!: google.maps.Geocoder
  center!: google.maps.LatLngLiteral
  position?: google.maps.LatLng

  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }

  markers: google.maps.Marker[] = [];
  offerList!: MapOffer[];
  role!: string;

  constructor(private mapOfferService: MapOfferService,
              private token: TokenStorageService) {
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
    this.getRole();

    let m: google.maps.Marker = new google.maps.Marker({
      position: this.center,
      label: "You",
      title: "You're here"
    })

    this.markers.push(m);
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

  getAddress(address: string | undefined): void {
    this.geocode = new google.maps.Geocoder()
    this.geocode.geocode({address}, (results, status) => {
      if (status === 'OK') {
        if (results) {
          this.position = results[0].geometry.location
        }
      }
    })
  }

  addMarker(address: string | undefined, type: string, title: string) {
    this.getAddress(address);

    let marker = new google.maps.Marker({
      position: this.position,
      label: type,
      title: title
    });

    this.markers.push(marker);
  }

  getAccommodationOffer() {
    this.mapOfferService.getAccommodationOfferList().subscribe(
      list => this.offerList = list
    )

    this.markers.splice(0);
    for (let offer of this.offerList) {
      this.addMarker(offer.address, "Accomodation", offer.title);
    }
  }

  getLanguageOffer() {
    this.mapOfferService.getLanguageCourseOfferList().subscribe(
      list => this.offerList = list
    )
    this.markers.splice(0);
    for (let offer of this.offerList) {
      this.addMarker(offer.address, "Language", offer.title);
    }
  }

  getLegalAdviceOffer() {
    this.mapOfferService.getLegalAdviceOfferList().subscribe(
      list => this.offerList = list
    )
    this.markers.splice(0);
    for (let offer of this.offerList) {
      this.addMarker(offer.address, "LegalAdvice", offer.title);
    }
  }

  getTranslationOffer() {
    this.mapOfferService.getTranslationOfferList().subscribe(
      list => this.offerList = list
    )
    this.markers.splice(0);
    for (let offer of this.offerList) {
      this.addMarker(offer.address, "Translation", offer.title);
    }
  }

  getTransportationOffer() {
    this.mapOfferService.getTransportationOfferList().subscribe(
      list => this.offerList = list
    )
    this.markers.splice(0);
    for (let offer of this.offerList) {
      this.addMarker(offer.address, "Transportation", offer.title);
    }
  }

}
