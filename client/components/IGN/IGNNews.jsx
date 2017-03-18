import React from 'react';

const IGNNews = ({ content }) => {
  return (
    <div class='carousel-item'>
      <img src={ content.urlToImage } />
      <div class='carousel-caption d-none d-md-block'>
        <h3>{ content.title }</h3>
        <h5>{ content.author }</h5>
        <p>{ content.description }</p>
        <a href={ content.url }>Read more... </a>
      </div>
    </div>
  );
}

export default IGNNews;