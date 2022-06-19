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

  getArticleByUrl(url:string): Observable<Article[]> {
    const urlFinal = `${this.articleUrl}/getbyurl/${url}`;
    return this.http.get<Article[]>(urlFinal, httpOptions)
  }

  createArticleByUrl(url:string):void{
    const urlFinal = `${this.articleUrl}/createbyurl/${url}`
    this.http.post<Article[]>(urlFinal, httpOptions)
  }

  clearArticle(): void{
    this.http.delete(this.articleUrl+"/deleteall", httpOptions)
  }
}
