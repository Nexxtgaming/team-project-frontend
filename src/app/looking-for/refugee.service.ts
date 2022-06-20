import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {LookingForOffer} from "../offers/looking-for-offer";
import {LookingForRequest} from "../offers/request/looking-for-request";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root'
})
export class RefugeeService {
  private lookingForURL = 'http://localhost:8083/api/lookingForOffers';

  constructor(private http: HttpClient) { }

  getOfferList(): Observable<LookingForOffer[]> {
    return this.http.get<LookingForOffer[]>(this.lookingForURL + "/all", httpOptions)
  }

  addOffer(offer: LookingForRequest): Observable<LookingForRequest> {
    return this.http.post<LookingForRequest>(this.lookingForURL, offer, httpOptions).pipe(
      catchError(this.handleError<LookingForRequest>('addOffer')),
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
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
    console.log('VolunteerService: ' + message);
  }
}
