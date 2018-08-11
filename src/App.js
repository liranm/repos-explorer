import React, { Component } from 'react';
import './App.css';
import { UserForm } from './components/UserForm';
import { RepoList } from './components/RepoList';
import { RepoSort } from './components/RepoSort';
import { loadRepos } from './lib/reposService';

class App extends Component {
  state = {
    repos: [],
    currentUser: ''
  }

  handleSortChange = (event) => {
    const updatedRepos = [ ...this.state.repos ];
    const sortBy = event.target.value;

    updatedRepos.sort((repoA, repoB) => {
      switch(sortBy) {
        case 'name':
          return repoA.name.toLowerCase() < repoB.name.toLowerCase() ? -1 : 1;
        default:
          return repoB.stargazers_count - repoA.stargazers_count;
      }
    });

    this.setState({
      repos: updatedRepos
    });
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
        <RepoSort handleSortChange={this.handleSortChange} />
        <RepoList repos={this.state.repos}/>
      </div>
    );
  }
}

export default App;
