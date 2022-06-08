import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { InformationComponent } from './home/information/information.component';
import { FooterComponent } from './footer/footer.component';
import { LinksComponent } from './home/information/links/links.component';
import { TwitterFeedComponent } from './home/information/twitter-feed/twitter-feed.component';
import { LogoComponent } from './footer/logo/logo.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { MapOffersComponent } from './map-offers/map-offers.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { VolunteersOfferComponent } from './volunteer/volunteers-offer/volunteers-offer.component';
import { AddVolunteersOfferComponent } from './volunteer/add-volunteers-offer/add-volunteers-offer.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { RoleGuard } from "./guards/role.guard";
import { LoginComponent } from './login/login.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,
		CarouselComponent,
		InformationComponent,
		FooterComponent,
		LinksComponent,
		TwitterFeedComponent,
		LogoComponent,
		SuggestionsComponent,
		MapOffersComponent,
		VolunteerComponent,
		VolunteersOfferComponent,
		AddVolunteersOfferComponent,
		RegisterComponent,
  LoginComponent,
	],
	imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
	providers: [httpInterceptorProviders],
	bootstrap: [AppComponent],
})
export class AppModule {}
