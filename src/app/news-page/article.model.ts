export class Article {
  id?: number;
  urlWebSiteInit: string
  text: string
  imgUrl: string
  title: string
  articleUrl: string


  constructor(urlWebSiteInit: string, text: string, imgUrl: string, title: string, articleUrl: string) {
    this.urlWebSiteInit = urlWebSiteInit;
    this.text = text;
    this.imgUrl = imgUrl;
    this.title = title;
    this.articleUrl = articleUrl;
  }
}
