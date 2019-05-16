import React from 'react';

const style = {
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  date: {
    fontSize: '14px',
    color: 'gray',
  },
};

const dateDisplay = date => new Date(date).toDateString();

const Article = ({ article, actions }) => {
  const author = actions.getAuthor(article.authorId);
  console.log('AUTHOR', author, article);

  return (
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
};

export default Article;
