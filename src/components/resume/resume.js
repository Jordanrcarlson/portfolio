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
            {/* <h3>University of Victoria</h3> */}
            <p className="info">Co-op Work Term Challenges <span>•</span> <em className="date">Engineering Challenges from 2015-2019</em></p>
            <p>
            Completed two work term challenges for credit by formally reporting on engineering challenges faced at Precision Well Servicing.
            </p>
          </div>
        </div> {/* item end */}
        <div className="row item">
          <div className="twelve columns">
            <h3> Engineers and Geoscientists British Columbia (EGBC)</h3>
            <p className="info">Engineer In Training (EIT) Certification <span>•</span> <em className="date">2025</em></p>
            <p>
            Pending Final Approval (Reviewing photo identification and transcripts).
            </p>
          </div>
        </div> {/* item end */}
        <div className="row item">
          <div className="twelve columns">
            <h3>Project Management Institute (PMI)</h3>
            <p className="info">Project Management Professional (PMP) Certification <span>•</span> <em className="date">2025</em></p>
            <p>
            Qualified Approval (4 year bachelor's degree, 36 months of leading projects (18 Months at Precision Well Servicing
            and 18+ Months at Salyx Medical). The 35 hours of accredited education/training will be completed upon request).
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
            <h3>Salyx Medical</h3>
            <p className="info">Lead Embedded Software Developer<span>•</span> <em className="date">2021-2025</em></p>
            <p>
            <span>•</span> Led a long-term compact vital signs monitoring system development team to achieve proof-of-concept for 
            medical-grade accuracies through state-of-the-art hardware application and novel medical research implementation. <br />
            <span>•</span> Managed projects with Agile methodology using Git with GitLab, Jira and Confluence. <br />
            <span>•</span> Directed utilizing data processing and visualization to validate and improve the grade of measurement certainties for 
            accurate advertising and to prepare for clinical test trials. <br />
            <span>•</span> Prioritized debugging for C, C++, and open-source EDA embedded systems for the optimization of 
            memory, processing speed, power, sensitive sensor integration, and feature extraction for machine learning.
            </p>
          </div>
        </div> {/* item end */}
        <div className="row item">
          <div className="twelve columns">
            <h3>Carmanah Technologies</h3>
            <p className="info">Software Systems and Test Engineer<span>•</span> <em className="date">2022-2023</em></p>
            <p>
            <span>•</span> Managed testing for embedded software systems for a safety-critical crosswalk system MVP. This revision of 
            Carmanah's primary product generated $1.6 million in revenue for 2023 and continues to be distributed 
            with all systems operative.<br />
            <span>•</span> Created and implemented efficient troubleshooting tactics with three embedded software developers, 
            two product design managers, two hardware specialists and a cloud maintainer.<br />
            <span>•</span> Collaborated to refine product requirement specifications and develop test strategies for the integrated 
            software infrastructures.<br />
            <span>•</span> Created and updated documentation in Confluence with Jira and managed and updated software and firmware 
            repositories.<br />
            <span>•</span> Led the creation, testing, and optimization of Python applications to automatically set permanent ROM 
            values during MVP manufacturing.<br />
            <span>•</span> Designed and developed a solar crosswalk system simulation with a measurement and automation device system 
            (with LabJack and Python) to examine long-term, continual system behaviours. <br />
            <span>•</span> Headed testing system stability and reliability assurance by producing complex unit-testing algorithms for 
            large firmware datasets. <br />
            <span>•</span> Structured debugging for app-controlled Bluetooth, OpenThread and Losant MQTT IoT embedded networks, including 
            for firmware updates. <br />
            Instantiated full-system quality assurance utilizing Python scripting to continuously program an RS-232 power 
            source with Tera Term serial communication for automated, documented tests.
            </p>
          </div>
        </div> {/* item end */}
        <div className="row item">
          <div className="twelve columns">
            <h3>Ergonomyx Technologies Inc.</h3>
            <p className="info">Embedded Software Developer<span>•</span> <em className="date">2022-2023</em></p>
            <p>
            <span>•</span> Managed feature development for IoT devices from MVP completion to several production waves, verifying product 
            stability reliability and generating $1 million in revenue.<br />
            <span>•</span> Wrote approved grant applications from applied development processes.<br />
            <span>•</span> Granted a patent for the Ergonomyx smart workplace fitness ecosystem.<br />
            <span>•</span> Developed tests for UL safety inspection and certification.<br />
            <span>•</span> Integrated Bluetooth, Wi-Fi, MQTT, AWS IoT Core cloud connectivity, and the proprietary Ergonomyx API’s 
            over-the-air firmware updates feature with RTOS.
            </p>
          </div>
        </div> {/* item end */}
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
