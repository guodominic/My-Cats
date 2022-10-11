import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import Background from '../components/Background';
import ErrorBoundary from '../components/ErrorBoundry';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CatPage from '../components/CatPage';

function App() {
  const [cats, setCats] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  const [colorOne, setColorOne] = useState('#f6f948');
  const [colorTwo, setColorTwo] = useState('#be47f5');
  //without hook
  /*   constructor() {
      super()
      this.state = {
        cats: [],
        searchfield: '',
        colorOne: '#f6f948',
        colorTwo: '#be47f5',
      }
    } */

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(comments => { setCats(comments) });
  }, [colorOne, colorTwo]) // Only re-run the effect if colors change
  //without hook
  /*   componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(users => { this.setState({ cats: users }) });
    } */

  const makeBackgroundChange = () => {
    const css = document.querySelector("h3");
    const body = document.querySelector("body");
    body.style.background = "linear-gradient(to right top, " + colorOne + ", " + colorTwo + ")";
    css.textContent = colorOne + " 👈🏻 ColorCode 👉🏻 " + colorTwo;
  }

  const onColorOneChange = (event) => {
    setColorOne(event.target.value);
    document.querySelector(".color2").style.background = colorOne;
    makeBackgroundChange();
  }

  const onColorTwoChange = (event) => {
    setColorTwo(event.target.value);
    document.querySelector(".color1").style.background = colorTwo;
    makeBackgroundChange();
  }

  const onClickChange = () => {
    const letters = "0123456789ABCDEF";
    let color3 = "#";
    let color4 = "#";
    for (let i = 0; i < 6; i++) {
      color3 += letters[Math.floor(Math.random() * 16)];
      color4 += letters[Math.floor(Math.random() * 16)];
    }
    setColorOne(color3);
    setColorTwo(color4);
    document.querySelector(".color1").style.background = color4;
    document.querySelector(".color2").style.background = color3;
    makeBackgroundChange();
  }

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  }

  const filteredCats = cats.filter(cat =>
    cat.name.toLowerCase().includes(searchfield.toLowerCase())
  )

  document.querySelector("body").style.background = "linear-gradient(to right, " + colorOne + ", " + colorTwo + ")";


  const dateWithouthSecond = new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });


  return !cats.length
    ?
    <p>...</p>
    :
    (
      <Router>
        <div className='tc pa1'>
          <div style={{ "display": 'flex', 'justifyContent': 'center' }}>
            <h2 className='white f4' style={{ 'position': 'absolute', 'right': '10px' }}>{dateWithouthSecond} </h2>
            <h1 className='f1 white'>MY CATS</h1>
          </div>
          <SearchBox searchChange={onSearchChange} />
          <div className="br3 shadow-5 pt3" style={{ display: 'inline-block', justifyContent: 'center' }} >
            <Background
              clickChange={onClickChange}
              colorOneChange={onColorOneChange}
              colorTwoChange={onColorTwoChange}
              colorOne={colorOne}
              colorTwo={colorTwo}
            />
          </div>
          <Scroll>
            <ErrorBoundary>
              <Routes>
                <Route path="/My-Cats" element={<CardList cats={filteredCats} />} />
                <Route path="/My-Cats/:id" element={<CatPage cats={cats} />} />
              </Routes>
            </ErrorBoundary>
          </Scroll>
        </div>
      </Router>
    );
}

export default App;