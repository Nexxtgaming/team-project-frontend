import {Component, OnInit, ViewChild} from '@angular/core';
import {MapOfferService} from "./map-offer.service";
import {TokenStorageService} from "../auth/token-storage.service";
import {MapOffer} from "../offers/map-offer";
import {GoogleMap} from "@angular/google-maps";


@Component({
  selector: 'app-map-offers',
  templateUrl: './map-offers.component.html',
  styleUrls: ['./map-offers.component.css']
})
export class MapOffersComponent implements OnInit {
  @ViewChild(GoogleMap, {static: false}) map!: GoogleMap

  zoom = 8
  geocode!: google.maps.Geocoder
  center!: google.maps.LatLngLiteral
  position?: google.maps.LatLng

  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 50,
    minZoom: 0,
  }
  markers: google.maps.Marker[] = [];
  offerList!: MapOffer[];
  role!: string;

  constructor(private mapOfferService: MapOfferService,
              private token: TokenStorageService) {
  }

  ngOnInit() {
    //Ukrainian Embassy in Poland
    this.position = new google.maps.LatLng(52.237695, 21.005427);
    this.markers.push(new google.maps.Marker({
        position: this.position,
        label: "Ukrainian Embassy"
      })
    );

    //Honorary Consulate of Ukraine
    this.position = new google.maps.LatLng(51.239457, 22.567676);
    this.markers.push(new google.maps.Marker({
        position: this.position,
        label: "Honorary Consulate of Ukraine"
      })
    );

    this.position = new google.maps.LatLng(50.067417, 19.95901);
    this.markers.push(new google.maps.Marker({
        position: this.position,
        label: "Honorary Consulate of Ukraine"
      })
    );

    this.position = new google.maps.LatLng(54.385433, 18.579981);
    this.markers.push(new google.maps.Marker({
        position: this.position,
        label: "Honorary Consulate of Ukraine"
      })
    );

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

  insertPinpoint(type: string) {
    //this.markers.splice(0);
    for (let offer of this.offerList) {
      this.addMarker(offer.address, type, offer.title);
      console.warn(offer.address + " " + type + " " + offer.title);
    }
  }

  addMarker(address: string | undefined, type: string, title: string) {

    this.getAddress(address);

    let marker = new google.maps.Marker({
      position: this.position,
      label: type,
      title: title,
      visible: true
    });

    this.markers.push(marker);

    google.maps.event.trigger(this.map, 'zoom_changed');
  }

  getAddress(address: string | undefined): void {
    this.geocode = new google.maps.Geocoder()
    this.geocode.geocode({address}, (results, status) => {
      if (status === 'OK') {
        if (results) {
          this.position = results[0].geometry.location;
          console.warn("position ok")
        }
      }
    })
  }

  getAccommodationOffer() {
    this.mapOfferService.getAccommodationOfferList().subscribe({
      next: (list) => {
        this.offerList = list;
        //this.insertPinpoint("Accommodation");
      }
    })
  }


  getLanguageOffer() {
    this.mapOfferService.getLanguageCourseOfferList().subscribe({
      next: (list) => {
        this.offerList = list;
        //this.insertPinpoint("LanguageCourse");
      }
    })
  }

  getLegalAdviceOffer() {
    this.mapOfferService.getLegalAdviceOfferList().subscribe({
      next: (list) => {
        this.offerList = list;
        //this.insertPinpoint("LegalAdvice");
      }
    })
  }

  getTranslationOffer() {
    this.mapOfferService.getTranslationOfferList().subscribe({
      next: (list) => {
        this.offerList = list;
        //this.insertPinpoint("Translation");
      }
    })
  }

  getTransportationOffer() {
    this.mapOfferService.getTransportationOfferList().subscribe({
      next: (list) => {
        this.offerList = list;
        //this.insertPinpoint("Transportation");
      }
    })
  }

}
