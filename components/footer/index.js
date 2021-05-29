import FooterLink from "./FooterLink";

function Footer() {
  return (
    <footer className="footer-container">
      <div>
        <div>
          <div className="footer-div">
            <FooterLink title="about" link="https://about.instagram.com/" />
            <FooterLink title="Blog" link="https://about.instagram.com/blog/" />
            <FooterLink
              title="Jobs"
              link="https://about.instagram.com/about-us/careers"
            />
            <FooterLink title="Help" link="https://help.instagram.com/" />
            <FooterLink
              title="API"
              link="https://www.instagram.com/developer/"
            />
            <FooterLink
              title="Privacy"
              link="https://help.instagram.com/519522125107875"
            />
            <FooterLink
              title="Terms"
              link="https://help.instagram.com/581066165581870"
            />
            <FooterLink
              title="Top Accounts"
              link="https://www.instagram.com/directory/profiles/"
            />
            <FooterLink
              title="Hashtags"
              link="https://www.instagram.com/directory/hashtags/"
            />
            <FooterLink
              title="Locations"
              link="https://www.instagram.com/explore/locations/"
            />
          </div>
        </div>
        <div className="footer-div mt-md-3 mb-md-3">
          <div>
            <span>English</span>
          </div>
          <div className="ml-3">
            <div>
              © {new Date().getFullYear()} InstagramClone from Codevally
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
