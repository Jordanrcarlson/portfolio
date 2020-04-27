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
          <li><a className="smoothscroll" href="#resume">Resume</a></li>
          <li><a className="smoothscroll" href="#portfolio">Works</a></li>
          <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
          <li><a className="smoothscroll" href="#contact">Contact</a></li>
        </ul> {/* end #nav */}
      </nav> {/* end #nav-wrap */}


      <div className="row banner">
        <div className="banner-text">
          <h2>Jordan Carlson </h2>
          <h3>A software and electrical engineering student based in Victoria, BC.
          <span> I am searching for a co-op opportunity for Fall, 2020. </span>
             I hope you scroll on to see my <a className="smoothscroll" href="#resume"> experience </a> and
             <a className="smoothscroll" href="#portfolio"> portfolio.</a> </h3>
          <hr />
          <ul className="social">
            <li><a href="#"><i className="fa fa-github" /></a></li>
            <li><a href="#"><i className="fa fa-twitter" /></a></li>
            <li><a href="#"><i className="fa fa-linkedin" /></a></li>

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
