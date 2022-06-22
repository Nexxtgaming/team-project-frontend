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
  articlesUkrinform!: Article[];

  private visitUkraine = "https://visitukraine.today/uk/blog"; //1 Img + title + url_article
  private warUkraine = "https://war.ukraine.ua/ru/news/"; //2 Title + text
  private ukrinform = "https://www.ukrinform.ua/"; //3 sImg + title + url_article

  constructor(private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.clearArticle();
    this.addArticle();
  }

  addArticle() {
    this.articleService.createArticleByUrl(1).subscribe({
      next: articles => {
        this.articleService.getArticleByUrl(1)
          .subscribe({
            next: articles => {
              this.articlesVisitUkraine = articles;
              this.articlesVisitUkraine.splice(4);
            }
          })
      }
    });
    this.articleService.createArticleByUrl(2).subscribe({
      next: articles => {
        this.articleService.getArticleByUrl(2)
          .subscribe({
            next: articles => {
              this.articlesWarUkrain = articles;
              this.articlesWarUkrain.splice(11);
              this.articlesWarUkrain = this.articlesWarUkrain.reverse();
            }
          })
      }
    });
    this.articleService.createArticleByUrl(3).subscribe({
      next: articles => {
        this.articleService.getArticleByUrl(3)
          .subscribe({
            next: articles => {
              this.articlesUkrinform = articles;
              this.articlesUkrinform.splice(4);
            }
          })
      }
    });
  }

  clearArticle() {
    this.articleService.deleteAllArticle();
  }
}
