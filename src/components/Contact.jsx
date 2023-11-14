import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <br />
      <br />

      <h2>Contact</h2>

      <hr />

      <p>You can get in touch with our team at:</p>
      <br />

      <span className="instagram-link link">
        <div className="link-container">
          Instagram:{"  "}
          <a href="https://www.instagram.com/theconfidentialcompanion/">
            @theconfidentialcompanion
          </a>
        </div>
      </span>

      <br />

      <span className="linkedin-link link">
        <div className="link-container">
          Linkedin:{"  "}
          <a href="https://www.linkedin.com/in/the-confidential-companion-anna-s-82222629a">
            theconfidentialcompanion (Anna S)
          </a>
        </div>
      </span>

      <br />

      <span className="gmail-link link">
        <div className="link-container">
          Gmail:
          <a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=theconfidentialcompanion@gmail.com&tf=1">
            theconfidentialcompanion@gmail.com
          </a>
        </div>
      </span>

      <br />

      <span className="skype-container link">
        Skype:
        <div className="skype-links">
          <a href="skype:live:.cid.5ecbeae2306b9041?chat">
            Message - The Confidential Companion{" "}
          </a>
          <a href="skype:live:.cid.5ecbeae2306b9041?call">
            Call - The Confidential Companion{" "}
          </a>
        </div>
      </span>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <p className="important-p">
        <span className="important">Important:</span> Before making a call or
        chat on skype, make sure you have Skype installed on your device.
      </p>

      <div className="download-links">
        <p>You can get if from the following links:</p>
        <a href="https://skype.com/en/get-skype/">&#x27A5; Desktop</a>
        <a href="https://apps.apple.com/us/app/skype/id304878510">
          &#x27A5; iPhone
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.skype.raider&referrer=utm_source%3Dscomphonedownload">
          &#x27A5; Android
        </a>
      </div>
    </div>
  );
}

export default Contact;
