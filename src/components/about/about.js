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
              <p> I am graduated from the electrical engineering program at UVic. 
                  I am seeking employment to complete my fourth year as a professional developer.</p>
              <p>  I am currently particularly excited about AI tools increasing in ease and speed of development. 
                   It has been stimulating integrating them with my experience with EDAs and CAD, Python, 
                   C and C++, Javascript, Java, React, HTML, CSS, and within the many frameworks within these universes. 
                   I enjoy developing engineering solutions, improving usability and interfaces, employing usability 
                   heuristics in parallel, while sustaining coding practice excellence and sustaining transparent, 
                   effective team communications and integration.
              </p>
              <p> I'm searching for a team to build and grow with.
              I have four years of experience in challenging leadership positions prior to working in tech. Since then, I've 
              accumulated 3 years of experience as a junior software developer, and I hope for another demanding and impactful role. </p>
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
                    <a href="images/software_resume.pdf" className="button"><i className="fa fa-download" /> Download Resume (Software)   </a>
                    <a href="images/electronics_resume.pdf" className="button"><i className="fa fa-download" /> Download Resume (Electronics)   </a>
                    <a href="images/electrical_resume.pdf" className="button"><i className="fa fa-download" /> Download Resume (Electrical)   </a>
                    <a href="images/manager_resume.pdf" className="button"><i className="fa fa-download" /> Download Resume (Engineering Management)   </a>
                    <a href="images/coverletter.pdf" className="button"><i className="fa fa-download" />Download Cover Letter (Generic)</a>
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
