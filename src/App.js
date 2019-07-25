import React, { Component } from 'react';
import Header from './components/Header'
import CharactersList from './components/CharactersList'
import MovieList from './components/MovieList'
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characterName: '',
      characterURL: '',
      moviesArray: [],
      moviesData: [],
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault()
    this.setState(
      {
        characterName: event.target.getAttribute('name'),
        characterURL: event.target.getAttribute('url'),
        moviesData: [],
        moviesArray: []
      },
      this.getMovieArray
    );
  };

  getMovieArray() {
    const url = this.state.characterURL;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState(
          {
            moviesArray: data.films,
          },
          this.getAllMovies
        )
      })
      .catch(err => alert(err));
  }

  getAllMovies() {
    this.state.moviesArray.forEach(async (movieURL) => {
      await this.getMovieData(movieURL)
    })
  }

  getMovieData(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          moviesData: [
            ...prevState.moviesData,
            {
              title: data.title,
              releaseDate: (new Date(data.release_date)).toDateString()
            }],
        }))
      })
      .catch(err => alert(err));
  }

  render() {
    return (
      <div className="app">
        <Header />
        <CharactersList handleClick={this.handleClick} />
        <MovieList moviesData={this.state.moviesData} name={this.state.characterName} />
      </div>
    );
  }
}

export default App;
