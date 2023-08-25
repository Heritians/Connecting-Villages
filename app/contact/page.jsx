"use client";

import { GlobalLinks } from "@/assets";
import { FacebookIcon, Github, Linkedin, Mail, Share2 } from "lucide-react";
import * as emailjs from "emailjs-com";

const ContactPage = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const contact_page_submit_button = document.getElementById(
      "contact_page_submit_button"
    );
    const contact_page_message_alert = document.getElementById(
      "contact_page_message_alert"
    );
    contact_page_submit_button.innerHTML = "Sending...";
    contact_page_submit_button.disabled = true;

    let templateParams = {
      from_name: e.target.name.value,
      from_email: e.target.email.value,
      replyto: "uba@vitbhopal.ac.in",
      subject: e.target.subject.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then((response) => {
        contact_page_message_alert.innerHTML = "Your message has been sent.";
        contact_page_message_alert.classList.remove("hidden");
        contact_page_message_alert.classList.add("bg-green-500");
        contact_page_submit_button.innerHTML = "Send Message";
        contact_page_submit_button.disabled = false;

        setTimeout(function () {
          contact_page_message_alert.classList.add("hidden");
          contact_page_message_alert.classList.remove("bg-green-500");
        }, 4000);
      })
      .catch((error) => {
        contact_page_message_alert.innerHTML =
          "Appologies! There was a problem delivering your message.";
        contact_page_message_alert.classList.remove("hidden");
        contact_page_message_alert.classList.add("bg-red-500");
        contact_page_submit_button.innerHTML = "Send Message";
        contact_page_submit_button.disabled = false;

        setTimeout(function () {
          contact_page_message_alert.classList.add("hidden");
          contact_page_message_alert.classList.remove("bg-red-500");
        }, 4000);
      });
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center my-2">
        <h1 className="section_title">Contact Us</h1>
        <div className="w-4/5 flex flex-col sm:flex-row items-center justify-between">
          <div className="w-full flex flex-row m-2 justify-center">
            <div className="flex flex-col justify-start">
              <Mail className="w-7 h-7 m-1" />
            </div>
            <div className="flex flex-col justify-start ml-2">
              <h1 className="text-xl sm:text-3xl font-semibold">Email us</h1>
              <p className="text-lg mt-1">uba@vitbhopal.ac.in</p>
            </div>
          </div>
          <div className="w-full flex flex-row m-2 justify-center">
            <div className="flex flex-col justify-start">
              <Share2 className="w-7 h-7 m-1" />
            </div>
            <div className="flex flex-col justify-start ml-2">
              <h1 className="text-xl sm:text-3xl font-semibold">Our Socials</h1>
              <div className="mt-1 flex flex-row items-center justify-start">
                <a
                  className="mr-2 hover:text-primary-orange"
                  href={GlobalLinks.GitHub}
                >
                  <Github className="w-7 h-7 m-1" />
                </a>
                <a
                  className="mr-2 hover:text-primary-orange"
                  href={GlobalLinks.Facebook}
                >
                  <FacebookIcon className="w-7 h-7 m-1" />
                </a>
                <a
                  className="hover:text-primary-orange"
                  href={GlobalLinks.Linkedin}
                >
                  <Linkedin className="w-7 h-7 m-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleFormSubmit}
          className="w-4/5 flex flex-col my-4 items-center justify-between"
        >
          <div className="w-full flex flex-col sm:flex-row items-center justify-between">
            <input
              placeholder="Name"
              type="text"
              className="contact_page_input"
              name="name"
              id="name"
              required
            />
            <input
              placeholder="Subject"
              type="text"
              className="contact_page_input"
              name="subject"
              id="subject"
              required
            />
          </div>
          <div className="w-full flex flex-col sm:flex-row items-center justify-between">
            <input
              placeholder="Email"
              type="email"
              className="contact_page_input"
              name="email"
              id="email"
              required
            />
            <input
              placeholder="Phone Number"
              type="tel"
              className="contact_page_input"
              name="phone"
              id="phone"
            />
          </div>
          <div className="w-full flex flex-col sm:flex-row items-center justify-between">
            <textarea
              placeholder="Message"
              className="contact_page_input"
              rows="4"
              name="message"
              id="message"
              required
            />
          </div>
          <div
            id="contact_page_message_alert"
            className="w-full p-2 rounded-lg text-center mb-3 hidden"
          ></div>
          <button
            id="contact_page_submit_button"
            type="submit"
            className="orange_btn w-max mb-4"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
