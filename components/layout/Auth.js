import Footer from "../footer";

function AuthLayout({ children }) {
  return (
    <main className="auth-container">
      <div className="auth-container-div">
        <div className="container">
          {children}
          <div className="application-div">
            <p>Get the app.</p>
            <div className="application">
              <a
                className="mr-2"
                href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo"
              >
                <img
                  alt="app-store"
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DF4D1238F-F27E-41F0-8F46-9D2C8FBD65AB%26utm_content%3Dlo%26utm_medium%3Dbadge">
                <img
                  alt="play-store"
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default AuthLayout;
