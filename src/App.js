import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import './App.css';
import { dogs } from './dogs';

class App extends Component {
  constructor() {
    super()
    this.state = {
      dogs: dogs,
      searchField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const filterDogs = this.state.dogs.filter(dog => {
      return dog.tags.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className='tc'>
        <h1 className='f1'>Homeless Pet Network</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList dogs={filterDogs} />
      </div>
    );
  }
}

export default App;
