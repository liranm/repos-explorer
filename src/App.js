import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Repos Explorer</h1>
        </header>
        <label className="search-user">
          <span className="search-user__label">Show repos for user</span>
          <input type="text" className="search-user__input"/>
          <button className="search-user__button">Go</button>
        </label>
        <label className="sort-results">
          <span className="sort-results__label">Sort repositories by</span>
          <select className="sort-results__select">
            <option value="">stargazers</option>
            <option value="">name</option>
          </select>
        </label>
        <ul className="repos-list">
          <li className="repos-list-item">
            <a href="http://react.com" target="_blank" rel="noopener noreferrer" className="repos-list-item__link">React</a>
            <p className="repos-list-item__stars">123</p>
          </li>
          <li className="repos-list-item">
            <a href="http://redux.com" target="_blank" rel="noopener noreferrer" className="repos-list-item__link">Redux</a>
            <p className="repos-list-item__stars">55</p>
          </li>
          <li className="repos-list-item">
            <a href="http://vue.com" target="_blank" rel="noopener noreferrer" className="repos-list-item__link">Vue</a>
            <p className="repos-list-item__stars">14</p>
          </li>
        </ul>
        <p className="repos-loader">Loading...</p>
      </div>
    );
  }
}

export default App;
