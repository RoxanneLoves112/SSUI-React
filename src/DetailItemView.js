import React, { Component } from 'react';
import './App.css';


class DetailItemView extends Component{
  render() {
    return (
      <div className="detailPane">
        <div className="Xout" onClick={this.props.onClose}>X</div>
        <div className="detailPane-inner">
          <div className="detailLabel">{this.props.description}</div>
          <img className="detailImg" src={this.props.image} alt={this.props.altText} />
          <div className="detailDetail">{this.props.detail}</div>
          <div className="detailLocation">{this.props.location}</div>
        </div>
      </div>
    );
  }
}


export default DetailItemView;
