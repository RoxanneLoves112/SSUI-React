import React, { Component } from 'react';
import './App.css';
import PlaceItem from './PlaceItem.js';
import DetailItemView from './DetailItemView.js';

import altius from './images/altius.jpg';
import inn from './images/inn.jpg';
import ross from './images/ross.jpg';
import amc from './images/amc.jpg';
import cmu from './images/cmu.jpg';

class Place extends Component{
  constructor(props) {
    super(props);
    var saltius = {image: altius, altText: "altius", description: "Altius", location:"Address: 1230 Grandview Ave, Pittsburgh, PA 15211 · Hours: Opens 5PM · Menu: altiuspgh.com · Phone: (412) 904-4442", detail:"Altius is a fine dining restaurant near Point of View Park. This modern outpost for upscale New American dishes and craft cocktails offers scenic city views."}
    var sinn = {image: inn, altText: "Inn", description: "Shadyside Inn", location:"Address: 5405 Fifth Ave, Pittsburgh, PA 15232 · Phone: (412) 441-4444",detail:"Shadyside Inn All Suites is a cozy hotel near CMU that offers gorgeous suites at affordable prices. It’s a nice place to stay in for parents who are visiting their children or anyone who wants to explore Pittsburgh."}
    var sross = {image: ross, altText: "mall", description: "Ross Park Mall", location:"Address: 1000 Ross Park Mall Dr, Pittsburgh, PA 15237 · Hours: Opens 10AM",detail:"Ross Park Mall Is the best shopping center in Pittsburgh. Anchored by Nordstrom, Macy's, and jcpenney, Ross Park Mall makes shopping fun, fulfilling and full of surprises."}
    var samc = {image: amc, altText: "amc", description: "AMC Waterfront", location:"Address: 300 W Waterfront Dr, West Homestead, PA 15120 · Phone: (412) 462-6550",detail:"AMC Waterfront 22 is a cinema in Waterfront where people can watch the latest movies and get relaxed."}
    var scmu = {image: cmu, altText: "cmu", description: "Carnegie Mellon University", location:"Address: 5000 Forbes Ave, Pittsburgh, PA 15213 · Phone: (412) 268-2000",detail:"Carnegie Mellon University is  a selective private institution most known for its programs in technology, science, and the performing. Founded by Andrew Carnegie in 1900, the university has risen to prominence as a Top 25 institution."}

    this.state = {
      inventory: [saltius, sinn, sross, samc, scmu],
      detail: null,
    }
  }

  selectItem(id) {
    console.log("selected ",id)
    var item = this.state.inventory[id]
    var detailView = <DetailItemView onClose = {(ev) => this.setState({detail: null})} image = {item.image} altText = {item.altText} description = {item.description} detail = {item.detail} location = {item.location}/>
    this.setState({detail: detailView})
  }


  renderDetailView() {
    if(this.state.detail !== null)
    {
      return this.state.detail
    }
  }


  renderLocations() {
    var elements = []
    for(var i=0; i < this.state.inventory.length; i++)
    {
      var item = this.state.inventory[i]
      elements.push(<PlaceItem onClick = {this.selectItem.bind(this, i)} image = {item.image} altText = {item.altText} description = {item.description} detail = {item.detail} location = {item.location}/>)
    }
    return (
      <div>
        {elements}
        {this.renderDetailView()}
      </div>
    )
  }


  render() {
    return (
      this.renderLocations()
    );
  }
}


export default Place;

