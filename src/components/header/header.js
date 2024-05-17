import React, { Component } from 'react';
export default class Header extends Component {
  render() {

  let portfolioData = this.props.portfolioData;

    return (


  <React.Fragment>


  <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
        <ul id="nav" className="nav">
          <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
          <li><a className="smoothscroll" href="#about">About</a></li>
          <li><a className="smoothscroll" href="#resume">Experience</a></li>
          <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
          <li><a className="smoothscroll" href="#testimonials">References   </a></li>
          <li><a className="smoothscroll" href="#contact">Contact</a></li>
        </ul> {/* end #nav */}
      </nav> {/* end #nav-wrap */}


      <div className="row banner">
        <div className="banner-text">
          <h2>Jordan Carlson </h2>
          <h3>An intermediate software and electrical engineering developer based in Victoria, BC. </h3>
        <h3>  <span> Searching for full-time employment to start immediately. </span> </h3>
             <h3>I hope you scroll on to view my <a className="smoothscroll" href="#resume"> experience </a> and
             <a className="smoothscroll" href="#portfolio"> portfolio.</a> </h3>
          <hr />
          <ul className="social">
            <li><a href="https://github.com/Jordanrcarlson"><i className="fa fa-github" /></a></li>
            <li><a href="https://ca.linkedin.com/in/jordan-carlson-9917ba128"><i className="fa fa-linkedin" /></a></li>

          </ul>
        </div>
      </div>
      <p className="scrolldown">
        <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
      </p>
    </header>


      </React.Fragment>







    );
  }
}
