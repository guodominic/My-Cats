import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import Background from '../components/Background';
import ErrorBoundary from '../components/ErrorBoundry';


class App extends Component {
  constructor() {
    super()
    this.state = {
      cats: [],
      searchfield: '',
      colorOne: '#f6f948',
      colorTwo: '#be47f5',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(users => { this.setState({ cats: users }) });
  }

  makeBackgroundChange = () => {
    const css = document.querySelector("h3");
    const body = document.querySelector("body");
    body.style.background = "linear-gradient(to right top, " + this.state.colorOne + ", " + this.state.colorTwo + ")";
    css.textContent = this.state.colorOne + " 👈🏻 ColorCode 👉🏻 " + this.state.colorTwo;
  }

  onColorOneChange = (event) => {
    this.setState({ colorOne: event.target.value })
    document.querySelector(".color2").style.background = this.state.colorOne;
    this.makeBackgroundChange();
  }

  onColorTwoChange = (event) => {
    this.setState({ colorTwo: event.target.value })
    document.querySelector(".color1").style.background = this.state.colorTwo;
    this.makeBackgroundChange();
  }

  onClickChange = () => {
    const letters = "0123456789ABCDEF";
    let color3 = "#";
    let color4 = "#";
    for (let i = 0; i < 6; i++) {
      color3 += letters[Math.floor(Math.random() * 16)];
      color4 += letters[Math.floor(Math.random() * 16)];
    }

    this.setState({ colorOne: color3 });
    this.setState({ colorTwo: color4 });
    document.querySelector(".color1").style.background = color4;
    document.querySelector(".color2").style.background = color3;
    this.makeBackgroundChange();
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { cats, searchfield } = this.state;
    const filteredCats = cats.filter(cat =>
      cat.name.toLowerCase().includes(searchfield.toLowerCase())
    )

    document.querySelector("body").style.background = "linear-gradient(to right, " + this.state.colorOne + ", " + this.state.colorTwo + ")";

    return !cats.length ?
      <p>...</p> :
      (
        <div className='tc pa1'>
          <h2 className='white f4'>{new Date().toLocaleTimeString()} </h2>
          <h1 className='f1 white'>MY CATS</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <div className="br3 shadow-5 pt3" style={{ display: 'inline-block', justifyContent: 'center' }} >
            <Background
              clickChange={this.onClickChange}
              colorOneChange={this.onColorOneChange}
              colorTwoChange={this.onColorTwoChange}
              colorOne={this.state.colorOne}
              colorTwo={this.state.colorTwo}
            />
          </div>
          <Scroll>
            <ErrorBoundary>
              <CardList cats={filteredCats} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

export default App;