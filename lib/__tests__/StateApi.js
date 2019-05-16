import StateApi from "../state-api/lib";
import { data } from "../testData";

const api = new StateApi(data);

describe("StateApi", () => {
  it("exposes articles as an object", () => {
    const articles = api.getArticles();
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });

  it("exposes authos as an object", () => {
    const author = api.getArticles();
    const authorId = data.articles[0].id;
    const authorTitle = data.articles[0].title;

    expect(author).toHaveProperty(articleId);
    expect(author[authorId].title).toBe(authorTitle);
  });
});
