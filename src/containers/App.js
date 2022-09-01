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
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { this.setState({ cats: users }) });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    //console.log(event.target.value)
  }

  setColorSelectChange = () => {
    let css = document.querySelector("h3");
    let color1 = document.querySelector(".color1");
    let color2 = document.querySelector(".color2");
    let body = document.getElementById("root");

    function setGradient() {
      body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
      css.textContent = color1.value + " 👈🏻 ColorCode 👉🏻 " + color2.value;
    }

    setGradient();
  }

  setClickChange = () => {
    let css = document.querySelector("h3");
    let color1 = document.querySelector(".color1");
    let color2 = document.querySelector(".color2");
    const button1 = document.querySelector(".button1");
    let body = document.getElementById("root");
    let letters = "0123456789ABCDEF";

    function setGradient() {
      body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
      css.textContent = color1.value + " 👈🏻 ColorCode 👉🏻 " + color2.value;
    }

    function randomColor() {
      let color3 = "#";
      let color4 = "#";
      for (let i = 0; i < 6; i++) {
        color3 += letters[Math.floor(Math.random() * 16)];
        color4 += letters[Math.floor(Math.random() * 16)];
      }
      body.style.background = "linear-gradient(to right, " + color3 + ", " + color4 + ")";
      color1.style.background = color4;
      color2.style.background = color3;
      button1.style.background = color4;
      color1.setAttribute("value", color3);
      color2.setAttribute("value", color4);
      css.textContent = color3 + " 👈🏻 ColorCode 👉🏻 " + color4;
    }
    setGradient();
    randomColor();
  }

  render() {
    const { cats, searchfield } = this.state;
    const filteredCats = cats.filter(cat =>
      cat.name.toLowerCase().includes(searchfield.toLowerCase())
    )
    // const newColor = cats.
    return !cats.length ?
      <p>..</p> :
      (
        <div className='tc'>
          <h2>{new Date().toLocaleTimeString()} </h2>
          <h1 className='f1'>MY CATS</h1>
          <Background
            clickChange={this.setClickChange}
            colorSelectChange={this.setColorSelectChange}
          />
          <SearchBox searchChange={this.onSearchChange} />
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