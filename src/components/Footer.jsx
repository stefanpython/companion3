import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-left">
        <a
          href="https://www.linkedin.com/in/the-confidential-companion-anna-s-82222629a"
          target="_blank"
        >
          <img className="footer-img" src="./linkedin.png" alt="linkedin" />
        </a>
        <a
          href="https://www.instagram.com/theconfidentialcompanion/"
          target="_blank"
        >
          <img className="footer-img" src="./instagram.png" alt="instagram" />
        </a>
        <a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=theconfidentialcompanion@gmail.com&tf=1">
          <img className="footer-img gmail" src="./gmail.png" alt="gmail" />
        </a>
      </div>

      <div className="footer-right">
        <p>
          The Confidential Companion &#169; {year} - All rights reserved &#169;{" "}
          <a
            className="creator"
            href="https://www.linkedin.com/in/stefan-andrei-29648486/"
          >
            SA
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
