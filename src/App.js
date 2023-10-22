import axios from 'axios';
import './App.css';
import { Component } from 'react';
import Beer from './Beer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      beers: [],
    }
  }

  async componentDidMount() {
    const response = await axios.get('https://api.punkapi.com/v2/beers');
    console.log('beer data', response.data)

    this.setState({
      beers: response.data,
      // liked: false,
    })
  }

likedBeer = (id) => {

  this.setState({
    beers: this.state.beers.map((beer) => {
      if (beer.id === id) {
        return {
          ...beer,
          liked: !beer.liked
        }
      }
      return beer;
    })
  })
}

  render() {
    return (
      <ul>
        {this.state.beers.map((beer) => (
          <Beer beer={{...beer}} handleLikedBeer={this.likedBeer} />
        ))}
      </ul>
    )
  }
}

export default App;
