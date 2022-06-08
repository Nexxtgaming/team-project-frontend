import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-volunteers-offer',
  templateUrl: './add-volunteers-offer.component.html',
  styleUrls: ['./add-volunteers-offer.component.css']
})
export class AddVolunteersOfferComponent implements OnInit {

  form: any = {}
  constructor(private location : Location) { }

  ngOnInit(): void {
  }

  onSubmit() {
    return false;
  }

  goBack() {
    this.location.back();
  }
}
