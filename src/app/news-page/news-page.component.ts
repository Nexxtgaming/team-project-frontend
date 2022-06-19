import {Component, OnInit} from '@angular/core';
import {ArticleService} from "./article.service";
import {Article} from "./article.model";

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {
  articlesVisitUkraine!: Article[];
  articlesWarUkrain!: Article[];
  articlesUkrinform!: Article[]
  visitUkraine = "https://visitukraine.today/uk/blog"; //Img + title + url_article
  warUkraine = "https://war.ukraine.ua/ru/news/"; //Title + text
  ukrinform = "https://www.ukrinform.ua/"; //Img + title + url_article

  constructor(private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.clearArticle()
    this.addArticle()
    this.getArticle()
  }

  getArticle() {
    this.articleService.getArticleByUrl(this.visitUkraine).subscribe({next: articles => this.articlesVisitUkraine = articles})
    this.articleService.getArticleByUrl(this.warUkraine).subscribe({next: articles => this.articlesWarUkrain = articles})
    this.articleService.getArticleByUrl(this.ukrinform).subscribe({next: articles => this.articlesUkrinform = articles})
  }

  addArticle() {
    this.articleService.createArticleByUrl(this.visitUkraine)
    this.articleService.createArticleByUrl(this.warUkraine)
    this.articleService.createArticleByUrl(this.ukrinform)
  }

  clearArticle() {
    this.articleService.clearArticle()
  }
}
