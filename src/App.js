import React, { Component } from 'react';
import './App.css';
import Place from './Place.js';
import About from './About.js';
import Map from './Map.js';
import pittsburgh from './images/pittsburgh.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };
  }


  navToListPage() {
    this.setState({page: 0})
  }

  navToMapPage() {
    this.setState({page: 1})
  }

  navToAboutPage() {
    this.setState({page: 2})
  }

  navToHomePage() {
    this.setState({page: 3})
  }
  renderPageView() {
    if(this.state.page === 0)
      return <Place/>
    if(this.state.page === 1)
      return <Map/>
    if(this.state.page === 2)
      return <About/>
  }


  render() {
    return (
      <div className="App">
        <img src={pittsburgh} className="App-largeView" alt="city view" />
        <div className = "App-navMenu">
            <div className = {"App-navMenu-button" + (this.state.page === 0 ? " active" : "")} onClick={this.navToListPage.bind(this)}>See List</div>
            <div className = {"App-navMenu-button" + (this.state.page === 1 ? " active" : "")} onClick={this.navToMapPage.bind(this)}>See Map</div>
            <div className = {"App-navMenu-button" + (this.state.page === 2 ? " active" : "")} onClick={this.navToAboutPage.bind(this)}>About Me</div>
          </div>
        <div className = "App-content">
        <h1 className="App-title">BEST OF</h1>
        <div id="pitt">Pittsburgh</div>
          {this.renderPageView()}
        </div>
      </div>
    );
  }
}

export default App;
