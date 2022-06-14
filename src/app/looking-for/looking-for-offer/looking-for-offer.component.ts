import {Component, Input, OnInit} from '@angular/core';
import {LookingForOffer} from "../../offers/looking-for-offer";

@Component({
  selector: 'app-looking-for-request',
  templateUrl: './looking-for-request.component.html',
  styleUrls: ['./looking-for-request.component.css']
})
export class LookingForOfferComponent implements OnInit {

  @Input() lookingfor?: LookingForOffer;
  showDescription = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDescriptionDiv() {
    this.showDescription = !this.showDescription;
  }

}
