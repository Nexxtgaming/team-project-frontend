import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SuggestionsComponent} from "./suggestions/suggestions.component";
import {MapOffersComponent} from "./map-offers/map-offers.component";

const routes: Routes = [{path: '', component: HomeComponent},
  {path: 'suggestions', component: SuggestionsComponent},
  {path: 'offers', component: MapOffersComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
