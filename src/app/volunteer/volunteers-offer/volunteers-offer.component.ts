import { Component, Input, OnInit } from '@angular/core';
import { VolunteersOffer } from '../../offers/volunteers-offer.model';

@Component({
  selector: 'app-volunteers-offer',
  templateUrl: './volunteers-offer.component.html',
  styleUrls: ['./volunteers-offer.component.css']
})
export class VolunteersOfferComponent implements OnInit {

  @Input() offer?: VolunteersOffer;
  showDescription = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDescriptionDiv() {
    this.showDescription = !this.showDescription;
  }
}
