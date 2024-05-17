import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (


  <React.Fragment>


  <section id="about">
  <div className="row">
    {/* <div id="profilepic" class="nostretch" className="three columns no stretch"> */}
    <div className="three columns no stretch">


      <img className="profile-pic" src="images/profilepic.jpg" alt="" />
    </div>
    <div className="nine columns main-col">
      <h2>About Me</h2>
      <p> I am graduated from the electrical engineering program at UVic with consistent employment from 2020-2023. 
          I am seeking employment for to complete my fourth year as a professional developer.</p>
      <p>  I have experience particularly with Python, C and C++, Javascript, Java, React, HTML, and CSS. I enjoy
           developing engineering solutions, and improving usability and interfaces, employing usability 
           heuristics while sustaining coding practice excellence and sustaining transparent, effective
           team communications and integration.
    </p>
      <p> I'm searching for a team to grow with, and to develop my skillset and portfolio.
      I have four years of experience in challenging leadership positions prior to working in tech, 3 
      years of experience as a junior software developer, and I hope for another demanding and impactful role </p>
      <div className="row">
        <div className="columns contact-details">
          <h2>Contact Details</h2>
          <p className="address">
            <span>Jordan Carlson</span><br />
            <span>410 1400 Lynburne Pl.<br />
            Victoria, BC V9B 0A4
            </span><br />
            <span>(250) 818-8963</span><br />
            <span>jordanrcarlson@gmail.com</span>
          </p>
        </div>
        <div className="columns download">
          <p>
            <a href="images/resume.pdf" className="button"><i className="fa fa-download" />Download Resume</a>
            <a href="images/coverletter.pdf" className="button"><i className="fa fa-download" />Download Cover Letter</a>
          </p>
        </div>
      </div> {/* end row */}
    </div> {/* end .main-col */}
  </div>
</section>


      </React.Fragment>







    );
  }
}
