import React, { Component } from 'react';
import './App.css';


class PlaceItem extends Component{

  render() {
    return (
      <div className="pWrapper" onClick = {this.props.onClick}>
        <div className="List-container"><img className="pImage" src={this.props.image} alt={this.props.altText} />
        <div className="pLabel">{this.props.description}</div></div>
      </div>
    );
  }
}


export default PlaceItem;
