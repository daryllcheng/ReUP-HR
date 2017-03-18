import React, { Component } from 'react';
import IGNNews from './IGNNews.jsx';
import fetchIGNNews from '../../lib/IGN.js';
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'nuka-carousel';

class IGNExplore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contents: [],
    }
  }

  componentDidMount() {
    fetchIGNNews(this);
  }

  render() {
    return (
      <div style={{width: '50%', height: '100%',  margin: 'auto'}}>
        <Carousel>
          {this.state.contents.map((content) => 
            <IGNNews key={content.title} content={ content } />
          )}
        </Carousel>
      </div>
    );
  }
}

export default IGNExplore;
