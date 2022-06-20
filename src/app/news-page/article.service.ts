import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable, of, tap} from "rxjs";
import {Article} from "./article.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})

export class ArticleService {
  private articleUrl = "http://localhost:8083/api/article"; //Not sure about that. 8083 ???

  constructor(private http: HttpClient) {}

  getArticleByUrl(url:number): Observable<Article[]> {
    const urlFinal = `${this.articleUrl}/getbyurl/${url}`;
    return this.http.get<Article[]>(urlFinal, httpOptions).pipe()
  }

  createArticleByUrl(url:number):Observable<Article[]>{
    const urlFinal = `${this.articleUrl}/createbyurl/${url}`
    return this.http.post<Article[]>(urlFinal, httpOptions).pipe(
      catchError(this.handleError<Article[]>('article created'))
    )
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

  clearArticle(): void{
    this.http.delete(this.articleUrl+"/deleteall", httpOptions).pipe()
  }
}
