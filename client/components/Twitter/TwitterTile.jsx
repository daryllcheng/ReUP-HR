import React from 'react';
import Tweet from './Tweet.jsx';
import fetchTweets from '../../lib/twitter.js';

class TwitterTile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    }
  }

  componentDidMount() {
    fetchTweets(this, 'playoverwatch');
  }

  render() {
    return (
      <div className="Tile row">
        <h3>Overwatch Twitter Posts:</h3>
        <div className="pre-scrollable"> 
        {this.state.tweets.map((tweet) => 
          <Tweet key={ tweet.id_str } tweet={ tweet }/>
        )}
        </div>
      </div>
    )
  }
}

export default TwitterTile;