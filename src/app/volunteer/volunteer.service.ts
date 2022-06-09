import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap} from 'rxjs';
import { VolunteersOffer } from '../offers/volunteers-offer.model';
import { OfferRequest } from './volunteers-offer/offer-request';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class VolunteerService {
  private volunteerOfferURL = 'http://localhost:8083/api/volunteersOffer';

  constructor(private http: HttpClient) {}

  getOfferList(): Observable<VolunteersOffer[]> {
    return this.http.get<VolunteersOffer[]>(this.volunteerOfferURL + "/all", httpOptions)
  }

  addOffer(offer: OfferRequest): Observable<OfferRequest> {
    return this.http.post<OfferRequest>(this.volunteerOfferURL, offer, httpOptions).pipe(
      catchError(this.handleError<OfferRequest>('addOffer')),
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

  /** Log a StudentService message with the MessageService */
  private log(message: string) {
    console.log('StudentService: ' + message);
  }
}
