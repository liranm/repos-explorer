import React, { Component } from 'react';
import './App.css';
import { UserForm } from './components/UserForm';
import { loadRepos } from './lib/reposService';

class App extends Component {
  state = {
    repos: [],
    currentUser: ''
  }

  handleEmptySubmit = (event) => {
    event.preventDefault();

    this.setState({
      errorMessage: 'Please supply a username'
    });
  }

  handleInputChange = (event) => {
    this.setState({
      currentUser : event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      loadingMessage: 'Loading...',
      errorMessage : ''
    });

    loadRepos(this.state.currentUser)
      .then(repos => this.setState({
        repos,
        currentUser : '',
        errorMessage : '',
        loadingMessage : ''
      }))
      .catch(error => this.setState({
        errorMessage : 'An Error occurred. Please try again.',
        loadingMessage : ''
      }));
  }

  render() {
    const handleSubmit = this.state.currentUser ? this.handleSubmit : this.handleEmptySubmit;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Repos Explorer</h1>
        </header>
        <UserForm 
          handleSubmit={handleSubmit}
          handleInputChange={this.handleInputChange}
          currentUser={this.state.currentUser}
          errorMessage={this.state.errorMessage}
          loadingMessage={this.state.loadingMessage}
        />
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
      </div>
    );
  }
}

export default App;
