import React from 'react';

const IGNNews = ({ content }) => {
  return (
    <div>
      <img src={ content.urlToImage } />
      <div>
        <h3>{ content.title }</h3>
        <h5>{ content.author }</h5>
        <p>{ content.description }</p>
        <a href={ content.url }>Read more... </a>
      </div>
    </div>
  );
}

export default IGNNews;