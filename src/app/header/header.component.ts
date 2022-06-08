import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  token!: string;
	constructor(private tokenStorageService: TokenStorageService) {}

	ngOnInit(): void {
    this.token = this.tokenStorageService.getToken();
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
