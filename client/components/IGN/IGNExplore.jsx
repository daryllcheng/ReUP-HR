import React, { Component } from 'react';
import IGNNews from './IGNNews.jsx';
import fetchIGNNews from '../../lib/IGN.js';

class IGNExplore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contents: []
    }
  }

  componentDidMount() {
    fetchIGNNews(this);
  }

  render() {
    return (
      <div id='igncarousel' className='Tile' data-ride='carousel'>
        <ol class='carousel-indicators'>
          <li data-target='#igncarousel' data-slide-to='0' class='active'></li>
          <li data-target='#igncarousel' data-slide-to='1'></li>
          <li data-target='#igncarousel' data-slide-to='2'></li>
          <li data-target='#igncarousel' data-slide-to='3'></li>
        </ol>
        <div class='carousel-inner' role='listbox'>
          {this.state.contents.map((content) => 
            <IGNNews content={ content } />
          )}
        </div>
         <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
           <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>  
      </div>
    );
  }
}

export default IGNExplore;