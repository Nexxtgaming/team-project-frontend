import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {CarouselComponent} from './home/carousel/carousel.component';
import {InformationComponent} from './home/information/information.component';
import {FooterComponent} from './footer/footer.component';
import {LinksComponent} from './home/information/links/links.component';
import {TwitterFeedComponent} from './home/information/twitter-feed/twitter-feed.component';
import {LogoComponent} from './footer/logo/logo.component';
import {SuggestionsComponent} from './suggestions/suggestions.component';
import {MapOffersComponent} from './map-offers/map-offers.component';
import {VolunteerComponent} from './volunteer/volunteer.component';
import {VolunteersOfferComponent} from './volunteer/volunteers-offer/volunteers-offer.component';
import {AddVolunteersOfferComponent} from './volunteer/add-volunteers-offer/add-volunteers-offer.component';
import {FormsModule} from '@angular/forms';
import {RegisterComponent} from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {httpInterceptorProviders} from './auth/auth-interceptor';
import {LoginComponent} from './login/login.component';
import {GoogleMapsModule} from "@angular/google-maps";
import {LookingForComponent} from './looking-for/looking-for.component';
import {LookingForOfferComponent} from './looking-for/looking-for-offer/looking-for-offer.component';
import {CreateLookingForOfferComponent} from './looking-for/create-looking-for-offer/create-looking-for-offer.component';
import { AccommodationOfferComponent } from './map-offers/accommodation-offer/accommodation-offer.component';
import { LanguageCourseOfferComponent } from './map-offers/language-course-offer/language-course-offer.component';
import { LegalAdviceOfferComponent } from './map-offers/legal-advice-offer/legal-advice-offer.component';
import { TranslationOfferComponent } from './map-offers/translation-offer/translation-offer.component';
import { TransportationOfferComponent } from './map-offers/transportation-offer/transportation-offer.component';
import {NgxTwitterTimelineModule} from 'ngx-twitter-timeline';
import {RouterModule} from "@angular/router";
import { NewsPageComponent } from './news-page/news-page.component';

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
    LookingForComponent,
    LookingForOfferComponent,
    CreateLookingForOfferComponent,
    AccommodationOfferComponent,
    LanguageCourseOfferComponent,
    LegalAdviceOfferComponent,
    TranslationOfferComponent,
    TransportationOfferComponent,
    NewsPageComponent
  ],
  imports: [RouterModule, BrowserModule, HttpClientModule, AppRoutingModule, GoogleMapsModule, FormsModule, NgxTwitterTimelineModule],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
