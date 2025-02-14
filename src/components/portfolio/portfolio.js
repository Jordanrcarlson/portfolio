import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>My Software and Hardware Portfolio</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt="" src="images/portfolio/actuator.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Linear Actuator</h5>
                        <p>Front-End Design</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="" src="images/portfolio/server.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Home Cloud Server</h5>
                        <p>Front-End Design</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt="" src="images/portfolio/automation.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Work Search Automation</h5>
                        <p>Front-End Design</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt="" src="images/portfolio/reacts.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Online Portfolio</h5>
                        <p>Front-End Design</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <img alt="" src="images/portfolio/caution.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Residential Renovations</h5>
                        <p>AutoCAD/Construction</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title>
                    <img alt="" src="images/portfolio/RFP.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>RFP Response</h5>
                        <p>Project Management</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-07" title>
                    <img alt="" src="images/portfolio/codehack.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Code Hack</h5>
                        <p>Project Management/UX Design</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-08" title>
                    <img alt="" src="images/portfolio/rocketrys.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>UVic Rocketry Controls and Instrumentation</h5>
                        <p>Project Management/<br />Labview/Altium/Firmware</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-09" title>
                    <img alt="" src="images/portfolio/battlesnake.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Battlesnake Entry</h5>
                        <p>Javascript/Express 4</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-10" title>
                    <img alt="" src="images/portfolio/codingchallenges.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Coding Challenges</h5>
                        <p>Python/Java/Matlab</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>  {/* item end */}
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
 	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/motor.jpg" alt="" style={{ width: '1000px', height: 'auto' }} />
            <div className="description-box">
              <h4>IoT Actuator/Button Pusher</h4>
              <p>Solidworks/3D-Printing/C++/Python</p>
              <span className="categories"><i className="fa fa-tag" />Solidworks/3D-Printing/C++/Python</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/Jordanrcarlson/linearActuator">Link</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/cloud.png" alt="" style={{ width: '2000px', height: 'auto' }} />
            <div className="description-box">
              <h4>Personal Cloud System</h4>
              <p>No-Code/React/SQL/C++/C/Python/Apache/Embedded Linux</p>
              <span className="categories"><i className="fa fa-tag" />No-Code/React/SQL/C++/C/Python/Apache/Embedded Linux</span>
            </div>
            <div className="link-box">
              <a href="https://jordan-cloud.netlify.app/">Link</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/magentic.png" alt="" />
            <div className="description-box">
              <h4>Work Search Automation</h4>
              <p>Python/Selenium/Magentic One</p>
              <span className="categories"><i className="fa fa-tag" />Python/Selenium/Magentic One</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/Jordanrcarlson/worksearchAutomation">Link</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/reactm.jpg" alt="" />
            <div className="description-box">
              <h4>Online Portfolio</h4>
              <p>Made with React, JSX, javascript, Bootstrap, CSS, and HTML with routing through GitHub Pages</p>
              <span className="categories"><i className="fa fa-tag" />React, JSX, javascript, Bootstrap, CSS, HTML, Github</span>
            </div>
            <div className="link-box">
              <a href="https://jordanrcarlson.github.io/portfolio/">Link</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}
          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/construction.webp" alt="" />
            <div className="description-box">
              <h4>Residential Renovations</h4>
              <p>Project Management/AutoCAD/Permit Applications</p>
              <span className="categories"><i className="fa fa-tag" />AutoCAD, Project Management, Building Codes</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/Jordanrcarlson/ResidentialRenovations">Link</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-05 End */}
          <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/RFPm.jpg" alt="" />
            <div className="description-box">
              <h4>RFP Response</h4>
              <p>Project management, co-leading with Dr. Gurprit Randhawa, leading a team of UX experts bidding on public-sector RFP proposals.</p>
              <span className="categories"><i className="fa fa-tag" />Project Management</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/Jordanrcarlson/RFPResponses">Link to Project</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-06 End */}
          <div id="modal-07" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/codehackfrontpage.png" alt="" />
            <div className="description-box">
              <h4>Island Health's Code Hack 2020</h4>
              <p>Researched, conducted interviews, and developed an app utilizing Island Health’s current web infrastructure to personalize health records.</p>
              <span className="categories"><i className="fa fa-tag" />Project Management, UX Design</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/Jordanrcarlson/CodeHack-2020">Link to Project</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-07 End */}
          <div id="modal-08" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/rocketrym.jpg" alt="" />
            <div className="description-box">
              <h4>UVic Rocketry's prototype hybrid engine controls and instrumentation</h4>
              <p>Designing software and project management for controls and instrumentation, prototypes, and aside from the hybrid engine, facilitating “Guidance, Navigation, and Control” of the current rocket.</p>
              <span className="categories"><i className="fa fa-tag" />Project Management, Labview, Firmware</span>
            </div>
            <div className="link-box">
              <a href="https://web.uvic.ca/~rocketry/wiki/index.php?title=File:2019-09-17_InstrumentationNumbered.png">Link to Project</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-08 End */}
          <div id="modal-09" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/battlesnakem.jpg" alt="" />
            <div className="description-box">
              <h4>Battlesnake Coding Competition Entry Snake</h4>
              <p>Designing a decision tree utilizing Express 4 API.</p>
              <span className="categories"><i className="fa fa-tag" />Javascript, Express 4</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/Jordanrcarlson/jordansnake">Link to Project</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-09 End */}
          <div id="modal-10" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/codingchallengesm.jpg" alt="" />
            <div className="description-box">
              <h4>UVic Python, Java, and Matlab Machine Learning Challenges</h4>
              <p>Completed many complex tasks in object-oriented programming languages to demonstrate language and algorithm proficiency. All full project codes are posted to github. These projects were completed for credit in CSC 110 and 115, and ECE 485 at UVic.</p>
              <span className="categories"><i className="fa fa-tag" />Python, Java, Matlab, Pytorch</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/Jordanrcarlson/codingChallenges">Link to Project</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-10 End */}
        </div> {/* row End */}
      </section>
    );
  }
}
