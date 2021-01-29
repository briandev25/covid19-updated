import React,  { Component } from 'react';
import './App.css';
import { CardList } from './Component/CardList/CardList';
import SearchAppBar from './Component/SearchField/SearchField'

class App extends Component {
  state={
    countries:[],
    searchField:""
  }
  componentDidMount(){
  fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort').then(response =>response.json()
  ).then(country =>this.setState({
    countries:country
  }))
  }
  searchHandler = (e) =>{
    this.setState({
      searchField: e.target.value
    })
  }
 render(){
   const { countries, searchField } = this.state;
   const filteredCountries = countries.filter(element =>element.country.toLowerCase().includes(searchField.toLowerCase()))
  return (
    <div className="App">
        <SearchAppBar change ={this.searchHandler} />
        <h1>Hello,I am a react developer</h1>
        <CardList countries = {filteredCountries}/>
    </div>
  );
 }
}

export default App;
