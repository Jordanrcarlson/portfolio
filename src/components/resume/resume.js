import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (


  <React.Fragment>


 <section id="resume">
    {/* Education
  ----------------------------------------------- */}
    <div className="row education">
      <div className="three columns header-col">
        <h1><span>Education</span></h1>
      </div>
      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">
            <h3>University of Victoria</h3>
            <p className="info">Student <span>•</span> <em className="date">2018-present</em></p>
            <p>
              Entering third year B.ENG student at UVic with a 3.5 (6.0) GPA
            </p>
          </div>
        </div> {/* item end */}
        <div className="row item">
          <div className="twelve columns">
            <h3>University of Victoria</h3>
            <p className="info">Co-op Work Term Challenges <span>•</span> <em className="date">Engineering Challenges from 2015-2019</em></p>
            <p>
            Completed two work term challenges for credit by formally reporting on engineering challenges faced at Precision Well Servicing.
            </p>
          </div>
        </div> {/* item end */}
      </div> {/* main-col end */}
    </div> {/* End Education */}
    {/* Work
  ----------------------------------------------- */}
    <div className="row work">
      <div className="three columns header-col">
        <h1><span>Work</span></h1>
      </div>
      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">
            <h3>Precision Well Servicing</h3>
            <p className="info">Derrickhand (5-Man Crew Lead Hand)<span>•</span> <em className="date">2015-2019</em></p>
            <p>
            led crews of oil rig workers completing demanding, technical oil and gas engineering
            operations working long hours and very consistently throughout the 4 years of work.
            </p>
          </div>
        </div> {/* item end */}
        <div className="row item">
          <div className="twelve columns">
            <h3>First Impressions Business Promotions and BBB of Vancouver Island</h3>
            <p className="info"><span>VP of Sales and Administration</span> <em className="date">2010-2015</em></p>
            <p>
            Sales and Administration; managed projects, upheld client relationships,
            generated new business, conducted ethics reviews, and facilitated graphic design projects.
            </p>
          </div>
        </div> {/* item end */}
      </div> {/* main-col end */}
    </div> {/* End Work */}
    {/* Skills
  ----------------------------------------------- */}
    <div className="row skill">
      <div className="three columns header-col">
        <h1><span>Projects</span></h1>
      </div>
      <div className="nine columns main-col">
        <p>
            The images below have link buttons to each project
        </p>
        <div className="row item">
          <div className="twelve columns">
          <br /><br />
            <h3>This Online Portfolio</h3>
            <p className="info">React/JSX/javascript/CSS/Bootstrap/HTML <span>•</span> <em className="date">2020</em></p>
            <p>
            Deployed with routing to github pages.
            </p>
          </div>
        </div> {/* item end */}

        <div className="row item">
          <div className="twelve columns">
            <h3>BCCNP Request for Proposal Response</h3>
            <p className="info">Project Management<span>•</span> <em className="date">2020</em></p>
            <p>
            Project management, co-leading with Dr. Gurprit Randhawa,
            leading a team of UX experts bidding on public-sector RFP proposals.
            </p>
          </div>
        </div> {/* item end */}
        <div className="row item">
          <div className="twelve columns">
            <h3>Island Health’s Code Hack 2020</h3>
            <p className="info">Project Management/UX Design<span>•</span> <em className="date">2020</em></p>
            <p>
            Researched, conducted interviews, and developed an app utilizing Island Health’s current web
            infrastructure to personalize health records.
            </p>
          </div>
        </div> {/* item end */}
        <div className="row item">
          <div className="twelve columns">
            <h3>UVic Rocketry's prototype hybrid engine controls and instrumentation</h3>
            <p className="info">Project Management/LabView/Arduino IDE<span>•</span> <em className="date">2018-present</em></p>
            <p>
            Designing software and project management for controls and instrumentation, prototypes,
            and aside from the hybrid engine, facilitating “Guidance, Navigation, and Control” of the current rocket.
            </p>
          </div>
        </div>
        <div className="row item">
          <div className="twelve columns">
            <h3>Battlesnake Coding Competition Entry Snake</h3>
            <p className="info">Javascript/Express 4 <span>•</span> <em className="date">2019-present</em></p>
            <p>
            Designing a decision tree utilizing Express 4 API.
            </p>
          </div>
        </div>
        <div className="row item">
          <div className="twelve columns">
            <h3>UVic Python, Java, and Matlab Machine Learning challenges</h3>
            <p className="info">Python/Java/Matlab <span>•</span> <em className="date">2018-present</em></p>
            <p>
            Completed many complex tasks in object-oriented programming languages to
            demonstrate language and algorithm proficiency. All full project codes are
            posted to github. These projects were completed for credit in CSC 110 and 115,
            and ECE 485 at UVic.
            </p>
          </div>
        </div>
      </div> {/* main-col end */}
    </div> {/* End skills */}
  </section>


      </React.Fragment>







    );
  }
}
