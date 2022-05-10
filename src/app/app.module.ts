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
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
