import axios from './axios';
import { categoryItem } from './categoryItem';

const MAX_ITEM_PER_PAGE = 10;

class News {
  constructor(category) {
    this._category = category;
    this._term = '';
    this._totalPages = 1;
    this._pageSize = MAX_ITEM_PER_PAGE;
    this._currentPage = 1;
  }
  _getUrl() {
    let url = '/?';

    if (this._category) url += `category=${this._category}`;

    // if we claer search term,then automatic call category
    this._term
      ? (url += `&q=${this._term}`)
      : (url += `&category=${categoryItem.general}`);
    // if(this._term)  url+= `&q=${this._term}`
    if (this._pageSize) url += `&pageSize=${this._pageSize}`;
    if (this._currentPage) url += `&page=${this._currentPage}`;
    // console.log(url);
    return url;
  }
  async getNews() {
    try {
      const { data } = await axios.get(this._getUrl());
      this._totalPages = Math.ceil(data.totalResults / this._pageSize);
      // console.log(data);
      console.log('news class  === called ');
      return {
        articles: data.articles,
        totalResults: data.totalResults,
        totalPages: this._totalPages,
        currentPage: this._currentPage,
        pageSize: this._pageSize,
        term: this._term,
        category: this._category,
        isNext: this.isNext(),
        isPrev: this.isPrev(),
        next: this.next(),
        prev: this.prev(),
      };
    } catch (e) {
      throw new Error(e);
    }
  }

  isNext() {
    return this._totalPages > this._currentPage;
  }
  isPrev() {
    return this._currentPage > 1;
  }
  next() {
    if (this.isNext()) {
      this._currentPage++;
      return this.getNews();
    }
    return false;
  }
  prev() {
    if (this.isPrev()) {
      this._currentPage--;
      return this.getNews();
    }
    return false;
  }
  setCurrentPage(pageNumb) {
    if (pageNumb < 1 || pageNumb > this._totalPages) {
      throw new Error('Invalid Page Number');
    }
    this._currentPage = pageNumb;
    return this.getNews();
  }
  changeCategory(category) {
    this._category = category;
    this._currentPage = 1;
    this._term = '';
    console.log('news func category === ' + category);
    return this.getNews();
  }
  search(term) {
    this._term = term;
    this._category = '';
    this._currentPage = 1;
    return this.getNews();
  }
}

export default News;
