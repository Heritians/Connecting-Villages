import { Component } from "react";
import { SectionTitle, SectionTitleArea } from "../GlobalStyles";
import {
  ContactForm,
  FormButton,
  FormInput,
  FormTextArea,
  InfoBox,
  InfoBoxIcon,
  InfoBoxPara,
  InfoBoxTitle,
  MessageSentAlert,
  SocialLinks,
  SocialLinksArea,
} from "./ContactStyles";
import GlobalLinks from "../../assets/js/GlobalLinks";
import * as emailjs from "emailjs-com";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    var status = document.getElementById("alert");
    const { name, email, subject, phone, message } = this.state;
    let templateParams = {
      from_name: name,
      from_email: email,
      replyto: "uba@vitbhopal.ac.in",
      subject: subject,
      phone: phone,
      message: message,
    };
    emailjs
      .send(
        "service_q9sultt",
        "template_3twb7fl",
        templateParams,
        "user_O22jXCYZtqtXuqqRkmkhB"
      )
      .then((response) => {
        status.innerHTML = "Your message has been sent.";
        document.querySelector(".alert_style").style.display = "block";

        setTimeout(function () {
          document.querySelector(".alert_style").style.display = "none";
        }, 4000);
        this.resetForm();
      })
      .catch((error) => {
        status.innerHTML =
          "Appologies! There was a problem delivering your message.";
        document.querySelector(".alert_style").style.display = "block";

        setTimeout(function () {
          document.querySelector(".alert_style").style.display = "none";
        }, 4000);
      });
  }

  resetForm() {
    this.setState({ name: "", email: "", subject: "", phone: "", message: "" });
  }

  render() {
    return (
      <>
        <div className="container">
          <SectionTitleArea>
            <SectionTitle>Contact Us</SectionTitle>
          </SectionTitleArea>

          <div className="row">
            <div className="col-md-5 d-flex align-items-stretch">
              <InfoBox>
                <InfoBoxIcon className="bx bx-envelope"></InfoBoxIcon>
                <InfoBoxTitle>Email Us</InfoBoxTitle>
                <InfoBoxPara>uba@vitbhopal.ac.in</InfoBoxPara>
              </InfoBox>
            </div>

            <div className="col-md-5 d-flex align-items-stretch">
              <InfoBox>
                <InfoBoxIcon className="bx bx-share-alt"></InfoBoxIcon>
                <InfoBoxTitle>Our Socials</InfoBoxTitle>
                <SocialLinksArea>
                  <SocialLinks
                    href={GlobalLinks.Facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bxl-facebook"></i>
                  </SocialLinks>

                  <SocialLinks
                    href={GlobalLinks.GitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bxl-github"></i>
                  </SocialLinks>

                  <SocialLinks
                    href={GlobalLinks.Linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </SocialLinks>
                </SocialLinksArea>
              </InfoBox>
            </div>

            <ContactForm method="post" onSubmit={this.handleSubmit.bind(this)}>
              <MessageSentAlert
                id="alert"
                className="alert_style"
              ></MessageSentAlert>
              <div className="row">
                <div className="col-md-6 form-group mt-3">
                  <FormInput
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    value={this.state.name}
                    onChange={this.onNameChange.bind(this)}
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3">
                  <FormInput
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    value={this.state.subject}
                    onChange={this.onSubjectChange.bind(this)}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group mt-3">
                  <FormInput
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    value={this.state.email}
                    onChange={this.onEmailChange.bind(this)}
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3">
                  <FormInput
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    value={this.state.phone}
                    onChange={this.onPhoneChange.bind(this)}
                  />
                </div>
              </div>

              <div className="form-group mt-3">
                <FormTextArea
                  name="message"
                  rows="5"
                  placeholder="Message"
                  value={this.state.message}
                  onChange={this.onMessageChange.bind(this)}
                  required
                />
              </div>

              <div className="text-center">
                <FormButton id="contact-form-submit" type="submit">
                  Send Message
                </FormButton>
              </div>
            </ContactForm>
          </div>
        </div>
      </>
    );
  }
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onSubjectChange(event) {
    this.setState({ subject: event.target.value });
  }

  onPhoneChange(event) {
    this.setState({ phone: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}
