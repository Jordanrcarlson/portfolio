import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (


  <React.Fragment>


  <section id="about">
  <div className="row">
    <div className="three columns">
      <img className="profile-pic" src="images/profilepic.jpg" alt="" />
    </div>
    <div className="nine columns main-col">
      <h2>About Me</h2>
      <p> Entering 3rd year of the electrical engineering program at UVic, I am seeking employment for my
      3rd co-op work term as a software developer.</p>
      <p>  I have experience particularly with java, javascript, React, python, HTML, and CSS. I enjoy
           improving usability and interfaces, employing usability heuristics, and engineering software
           solutions while sustaining coding practice excellence.
    </p>
      <p> I'm searching for a team to grow with, and to develop my skillset and portfolio.
      I have four years of experience in challenging leadership positions and hope for another
      demanding and impactful role </p>
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
