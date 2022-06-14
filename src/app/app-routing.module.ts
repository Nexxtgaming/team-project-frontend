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
import {
  CreateLookingForOfferComponent
} from "./looking-for/create-looking-for-offer/create-looking-for-offer.component";

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'suggestions', component: SuggestionsComponent },
  {path: 'offers', component: MapOffersComponent},
  {path: 'volunteer', component: VolunteerComponent},
  {path: "volunteer/add-offer", component: AddVolunteersOfferComponent},
  {path: "looking-for", component: LookingForComponent},
  {path: "looking-for/add-offer", component: CreateLookingForOfferComponent},
  {path: "signup", component: RegisterComponent},
  {path: "signin", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [httpInterceptorProviders],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
