import React from "react";
import PropTypes from "prop-types";
import storeProvider from "../containers/storeProvider";
import { dateDisplay } from "../helpers/convert";

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

const Article = ({ article, author }) => (
  <div>
    <div style={style.title}>{article.title}</div>
    <div style={style.date}>{dateDisplay(article.date)}</div>
    <div>
      <a href={author.website}>{`${author.firstName} ${author.lastName}`}</a>
    </div>
    <p>{article.body}</p>
    <hr />
  </div>
);

Article.propTypes = {
  article: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
};

const extraProps = (store, origProps) => {
  return {
    author: store.getAuthor(origProps.article.authorId)
  };
};

export default storeProvider(extraProps)(Article);
