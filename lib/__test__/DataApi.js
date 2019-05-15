import { from } from 'rxjs';
import DataApi from '../DataApi';
import { data } from '../testData';

const api = new DataApi(data);

describe('DataApi', () => {
  it('exposes articles as an object', () => {
        const articles =  api.getArticles();
        const articleId = data.articles[0].id;  
        const articleTitle = data.articles[0].title}});
  it('exposes authos as an object', () => {});
});
