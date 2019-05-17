import React from "react";
import PropTypes from "prop-types";
import { StoreConsumer } from "./App";

const style = {
  title: {
    fontSize: "20px",
    fontWeight: "bold"
  },
  date: {
    fontSize: "14px",
    color: "gray"
  }
};

const dateDisplay = date => new Date(date).toDateString();

const Article = ({ article }) => {
  return (
    <StoreConsumer>
      {({ store }) => {
        const author = store.getAuthor(article.authorId);
        return (
          <div>
            <div style={style.title}>{article.title}</div>
            <div style={style.date}>{dateDisplay(article.date)}</div>
            <div>
              <a href={author.website}>{`${author.firstName} ${
                author.lastName
              }`}</a>
            </div>
            <p>{article.body}</p>
            <hr />
          </div>
        );
      }}
    </StoreConsumer>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
};

export default Article;
