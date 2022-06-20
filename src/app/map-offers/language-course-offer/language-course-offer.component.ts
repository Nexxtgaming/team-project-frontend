import { Component, OnInit } from '@angular/core';
import {LanguageCourseOfferRequest} from "../../offers/request/language-course-offer-request";
import {MapOfferService} from "../map-offer.service";
import {Location} from "@angular/common";
import {OfferRequest} from "../../offers/request/offer-request";

@Component({
  selector: 'app-language-course-offer',
  templateUrl: './language-course-offer.component.html',
  styleUrls: ['./language-course-offer.component.css']
})
export class LanguageCourseOfferComponent implements OnInit {

  form: any = {};
  language_course_request!: LanguageCourseOfferRequest;

  constructor(private mapOfferService: MapOfferService,
              private location : Location) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.language_course_request = new LanguageCourseOfferRequest(
      this.form.title,
      this.form.description,
      this.form.city,
      this.form.address,
      this.form.language
    );
    console.log(this.language_course_request);

    this.mapOfferService.addLanguageCourseOffer(this.language_course_request).subscribe();
  }

  goBack() {
    this.location.back();
  }

}
