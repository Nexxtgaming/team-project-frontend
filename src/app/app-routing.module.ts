import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SuggestionsComponent} from "./suggestions/suggestions.component";
import {MapOffersComponent} from "./map-offers/map-offers.component";
import {VolunteerComponent} from "./volunteer/volunteer.component";
import {AddVolunteersOfferComponent} from "./volunteer/add-volunteers-offer/add-volunteers-offer.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {httpInterceptorProviders} from "./auth/auth-interceptor";
import {LookingForComponent} from "./looking-for/looking-for.component";
import {CreateLookingForOfferComponent} from './looking-for/create-looking-for-offer/create-looking-for-offer.component';
import {AccommodationOfferComponent} from './map-offers/accommodation-offer/accommodation-offer.component';
import {LanguageCourseOfferComponent} from './map-offers/language-course-offer/language-course-offer.component';
import {LegalAdviceOfferComponent} from './map-offers/legal-advice-offer/legal-advice-offer.component';
import {TranslationOfferComponent} from './map-offers/translation-offer/translation-offer.component';
import {TransportationOfferComponent} from './map-offers/transportation-offer/transportation-offer.component';
import {NewsPageComponent} from "./news-page/news-page.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'suggestions', component: SuggestionsComponent},
  {path: 'offers', component: MapOffersComponent},
  {path: 'volunteer', component: VolunteerComponent},
  {path: "volunteer/add-offer", component: AddVolunteersOfferComponent},
  {path: "looking-for", component: LookingForComponent},
  {path: "looking-for/add-offer", component: CreateLookingForOfferComponent},
  {path: "signup", component: RegisterComponent},
  {path: "signin", component: LoginComponent},
  {path: "offers/accommodation", component: AccommodationOfferComponent},
  {path: "offers/language-course", component: LanguageCourseOfferComponent},
  {path: "offers/legal-advice", component: LegalAdviceOfferComponent},
  {path: "offers/translation", component: TranslationOfferComponent},
  {path: "offers/transportation", component: TransportationOfferComponent},
  {path: "news", component: NewsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [httpInterceptorProviders],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
