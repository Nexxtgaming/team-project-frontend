import { Injectable } from '@angular/core';
import {catchError, Observable, of} from "rxjs";
import {AccommodationOfferRequest} from "../offers/request/accomodation-offer-request";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LanguageCourseOfferRequest} from "../offers/request/language-course-offer-request";
import {LegalAdviceOfferRequest} from "../offers/request/legal-advice-offer-request";
import {TransportationOfferRequest} from "../offers/request/transportation-offer-request";
import {TranslationOfferRequest} from "../offers/request/translation-offer-request";
import { AccommodationOffer } from '../offers/accommodation-offer';
import {LanguageCourseOffer} from "../offers/language-course-offer";
import {LegalAdviceOffer} from "../offers/legal-advice-offer";
import {TransportationOffer} from "../offers/transportation-offer";
import {TranslationOffer} from "../offers/translation-offer";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root'
})
export class MapOfferService {

  private mapOfferURL = 'http://localhost:8083/api';

  constructor(private http: HttpClient) { }

  getAccommodationOfferList() : Observable<AccommodationOffer[]> {
    const url = this.mapOfferURL + "/accommodationOffer/all";
    return this.http.get<AccommodationOffer[]>(url, httpOptions)
  }

  addAccommodationOffer(offer: AccommodationOfferRequest): Observable<AccommodationOfferRequest> {
    const url = this.mapOfferURL + "/accommodationOffer";
    return this.http.post<AccommodationOfferRequest>(url, offer, httpOptions).pipe(
      catchError(this.handleError<AccommodationOfferRequest>('addAccommodationOffer'))
    );
  }

  getLanguageCourseOfferList() : Observable<LanguageCourseOffer[]> {
    const url = this.mapOfferURL + "/languageCourses/all";
    return this.http.get<LanguageCourseOffer[]>(url, httpOptions)
  }

  addLanguageCourseOffer(offer: LanguageCourseOfferRequest): Observable<LanguageCourseOfferRequest> {
    const url = this.mapOfferURL + "/languageCourses";
    return this.http.post<LanguageCourseOfferRequest>(url, offer, httpOptions).pipe(
      catchError(this.handleError<LanguageCourseOfferRequest>('addLanguageCourseOffer'))
    );
  }

  getLegalAdviceOfferList() : Observable<LegalAdviceOffer[]> {
    const url = this.mapOfferURL + "/legalAdvices/all";
    return this.http.get<LegalAdviceOffer[]>(url, httpOptions)
  }

  addLegalAdviceOffer(offer: LegalAdviceOfferRequest): Observable<LegalAdviceOfferRequest> {
    const url = this.mapOfferURL + "/legalAdvices";
    return this.http.post<LegalAdviceOfferRequest>(url, offer, httpOptions).pipe(
      catchError(this.handleError<LegalAdviceOfferRequest>('addLegalAdviceOffer'))
    );
  }

  getTransportationOfferList() : Observable<TransportationOffer[]> {
    const url = this.mapOfferURL + "/transportationOffer/all";
    return this.http.get<TransportationOffer[]>(url, httpOptions)
  }

  addTransportationOffer(offer: TransportationOfferRequest): Observable<TransportationOfferRequest> {
    const url = this.mapOfferURL + "/transportationOffer";
    return this.http.post<TransportationOfferRequest>(url, offer, httpOptions).pipe(
      catchError(this.handleError<TransportationOfferRequest>('addTransportationOffer'))
    );
  }

  getTranslationOfferList() : Observable<TranslationOffer[]> {
    const url = this.mapOfferURL + "/translationOffer/all";
    return this.http.get<TranslationOffer[]>(url, httpOptions)
  }

  addTranslationOffer(offer: TranslationOfferRequest): Observable<TranslationOfferRequest> {
    const url = this.mapOfferURL + "/translationOffer";
    return this.http.post<TranslationOfferRequest>(url, offer, httpOptions).pipe(
      catchError(this.handleError<TranslationOfferRequest>('addTransportationOffer'))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('MapOfferService: ' + message);
  }
}
