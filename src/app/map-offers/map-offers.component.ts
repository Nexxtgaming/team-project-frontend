import {Component, OnInit} from '@angular/core';

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

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

}
