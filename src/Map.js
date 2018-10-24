import React, { Component } from 'react';
import './App.css';

import map from './images/map.jpg';

class Map extends Component{
  constructor(props) {
    super(props);
    this.state = {
      detail: null,
    }
  }


  renderDetailView() {
    if(this.state.detail !== null)
    {
      return this.state.detail
    }
  }


  renderInventory() {
    return (
      <div>
        {this.renderDetailView()}
      </div>
    )
  }


  render() {
    return (
        <div>
          {this.renderInventory()}
          <div className="Map-container">
          <img src={map} className="Map-largeView" alt="map view" useMap="#image-map"/>
            <map name="image-map">
              <area target="" alt="" title="" href="https://www.simon.com/mall/ross-park-mall" coords="427,11,618,198" shape="rect"></area>
              <area target="" alt="" title="" href="http://altiuspgh.com/" coords="460,469,599,647" shape="0"></area>
              <area target="" alt="" title="" href="https://www.cmu.edu/" coords="728,404,891,589" shape="0"></area>
              <area target="" alt="" title="" href="https://www.amctheatres.com/movie-theatres/pittsburgh/amc-waterfront-22" coords="912,621,1086,782" shape="0"></area>
              <area target="" alt="" title="" href="http://www.shadysideinn.com/" coords="1061,381,1222,571" shape="0"></area>
            </map>
            <div className="Map-label">
              <h1>Click on the pin and check their websites!</h1>
            </div>
          </div>
        </div>

    );
  }
}


export default Map;
