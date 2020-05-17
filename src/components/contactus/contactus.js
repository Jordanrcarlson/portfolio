import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (


  <React.Fragment>


  <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1><span>Get In Touch.</span></h1>
        </div>
        <div className="ten columns">
          <p className="lead">If you have any questions, comments, requests,
          ideas for employment or a project, wish to collaborate, or want to
          otherwise begin a discussion, you can feel free to email me using
          this form. Thank you deeply for your time and consideration!
          </p>
        </div>
      </div>
      <div className="row">
        <div className="eight columns">
          {/* form */}
          <form action = "https://formspree.io/xbjzjjjy" id="contactForm" method = "POST" >

            <fieldset>
              <div>
                <label htmlFor="contactName">Name <span className="required">*</span></label>
                <input type="text" defaultValue size={35} id="contactName" name="contactName" defaultValue={""} />
              </div>
              <div>
                <label htmlFor="contactEmail">Email</label>
                <input type="text" defaultValue size={35} id="contactEmail" name="contactEmail" defaultValue={""} />
              </div>
              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input type="text" defaultValue size={35} id="contactSubject" name="contactSubject" defaultValue={""} />
              </div>
              <div>
                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
              </div>
              <div>
                <button className="submit">Submit</button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form> {/* Form End */}
          {/* contact-warning */}
          <div id="message-warning"> Error boy</div>
          {/* contact-success */}
          <div id="message-success">
            <i className="fa fa-check" />Your message was sent, thank you!<br />
          </div>
        </div>
        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              Jordan Carlson<br />
              410 1400 Lynburne Pl.<br />
              Victoria, BC V9B 0A4<br />
              <span>(250) 818-8963</span>
            </p>
          </div>
        </aside>
      </div>
    </section>


    </React.Fragment>

    );
  }


  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
