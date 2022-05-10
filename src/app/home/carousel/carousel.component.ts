import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
	message: string;

  availableMessage: string[];

	constructor() {
    this.availableMessage = ["Who are we?","What is this?","What's different?"];
    this.message = this.availableMessage[0]
  }

	ngOnInit(): void {}

  next(): void {
    let index = this.availableMessage.indexOf(this.message,0);
    index = (index + 1) % this.availableMessage.length;
    this.message = this.availableMessage[index]

  }
}
