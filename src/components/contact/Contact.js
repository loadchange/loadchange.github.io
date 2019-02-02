import React from 'react';

class Contact extends React.Component {

  render() {
    return (
      <div className="about-desc">
        <div className="contact content">
          <div className="about-data">
            <h2>Get In Touch</h2>
            <div className="contact-form">
              <div className="left_form">
                <div>
                  <span><label>Name</label></span>
                  <span><input name="userName" type="text" className="textbox" /></span>
                </div>
                <div>
                  <span><label>E-mail</label></span>
                  <span><input name="userEmail" type="text" className="textbox" /></span>
                </div>
              </div>
              <div className="right_form">
                <div>
                  <span><label>Subject</label></span>
                  <span><textarea name="userMsg" defaultValue="" /></span>
                </div>
                <div>
                  <span><input type="submit" value="Submit" className="myButton" /></span>
                </div>
              </div>
              <div className="clear" />
            </div>
            <div className="content_bottom">
              <div className="company_address">
                <h2>Location</h2>
                <p>500 Lorem Ipsum Dolor Sit,</p>
                <p>22-56-2-9 Sit Amet, Lorem,</p>
                <p>USA</p>
                <p>Phone:(00) 000 000 000</p>
                <p>Fax: (000) 000 00 00 0</p>
                <p>Email: <span><a href="mailto:soocto@gmail.com">soocto@gmail.com</a></span></p>
                <p>Follow on: <span><a href="#">Facebook</a></span>, <span><a href="#">Twitter</a></span></p>
              </div>
              <div className="contact_info">
                <h2>Find Us Here</h2>
                <div className="map">

                </div>
              </div>
              <div className="clear" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
