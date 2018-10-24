import React, { Component } from 'react';
import './App.css';

import homeImage from './images/home.jpg';
import viewImage from './images/view.jpg';
import dinnerImage from './images/dinner.jpg';
import birthdayImage from './images/birthday.jpg';
import catImage from './images/cat.jpg';


var hasOwn = {}.hasOwnProperty;

function classNames () {
  var classes = '';

  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    if (!arg) continue;

    var argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes += ' ' + arg;
    } else if (Array.isArray(arg)) {
      classes += ' ' + classNames.apply(null, arg);
    } else if (argType === 'object') {
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes += ' ' + key;
        }
      }
    }
  }

  return classes.substr(1);
}

class SlideShow extends React.Component {
  constructor() {
    super()
    this.state = { activeIndex: 0 };
  }
  jumpToSlide(index) {
    this.setState({ activeIndex: index });
  }
  render() {
    return (
      <div className="slideshow">
        <ul className="slideshow-slides">
          {
            this.props.slides.map((slide, index) => (
              <li className={ classNames({ active: index === this.state.activeIndex }) }>
                <figure>
                  <img src={ slide.imageSrc } />
                  { slide.caption ? <figcaption>{ slide.caption }</figcaption> : null }
                </figure>
              </li>
            ))
          }
        </ul>
        <ul className="slideshow-dots">
          {
            this.props.slides.map((slide, index) => (
              <li className={ (index == this.state.activeIndex) ? 'active': '' }>
                <a onClick={ (event)=> this.jumpToSlide(index) }>{ index + 1 }</a>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

let _slides = [{
  imageSrc: homeImage,
  caption: "The best corner in my apartment."
},{
  imageSrc: viewImage,
  caption: "Pittsburgh is incredibly beautiful sometimes."
},{
  imageSrc: dinnerImage,
  caption: "Dinner at Altius when there is no due."
},{
  imageSrc: catImage,
  caption: "At downtown coffee shop with cats."
},{
  imageSrc: birthdayImage,
  caption: "21st birthday party in Shadyside Inn."
}
];

class About extends Component{

  render() {
    return (
      <div id="about">
        <p className="App-aboutUs">
          <div id="more">More about me and Pitt!</div>I am a junior student at Carnegie Mellon University. I came to Pittsburgh two years ago. Pittsburgh is a vibrant, mid-sized city that has the feel of a small town. Riverfronts are thoughtfully developed, utilized for recreation now more than ever. Businesses look to the environment as an asset, not a challenge. And, best of all, people here are energetic, hard-working and passionate about life.  The five sub-locations I’ve chosen in Pittsburgh are Carnegie Mellon University, Shadyside Inn All Suites Hotel, AMC Waterfront 22, Ross Park Mall and the Altius Restaurant.
        </p>
        <SlideShow slides={ _slides } />
      </div>
    );
  }
}
export default About;
