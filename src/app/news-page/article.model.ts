export class Article {
  id?: number;
  urlWebSiteInit: string
  text: string
  img_url: string
  title: string
  article_url: string


  constructor(urlWebSiteInit: string, text: string, imgUrl: string, title: string, articleUrl: string) {
    this.urlWebSiteInit = urlWebSiteInit;
    this.text = text;
    this.img_url = imgUrl;
    this.title = title;
    this.article_url = articleUrl;
  }
}
