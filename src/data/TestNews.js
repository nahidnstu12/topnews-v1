import axios from './axios';
import { categoryItem } from './categoryItem';

const MAX_ITEM_PER_PAGE = 10;

class TestNews {
    constructor(category){
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
        console.log(url);
        return url;
    }
    
    async getNews() {
        try {
        //   const { data } = await axios.get(this._getUrl());
        //   this._totalPages = Math.ceil(data.totalResults / this._pageSize);
        //   console.log(data);
          return {
            // articles: data.articles,
            // totalResults: data.totalResults,
            // totalPages: this._totalPages,
            // currentPage: this._currentPage,
            // pageSize: this._pageSize,
            // term: this._term,
            category: this._category,
            
          };
        } catch (e) {
          throw new Error(e);
        }
    }                                   

    changeCategory(category){
        this.category = category;
        this.currentPage = 1;
        this.msg = "cahnge category";
        return this.getNews()
    }

 

    getNewsTest(){

    }
}

export default TestNews