import "./App.css";
import NavBar from "./NavBar/NavBar";
import heroDesktop from "./assets/image-hero-desktop.png";
import heroMobile from "./assets/image-hero-mobile.png";
import audioPhile from "./assets/client-audiophile.svg";
import dataBiz from "./assets/client-databiz.svg";
import maker from "./assets/client-maker.svg";
import meet from "./assets/client-meet.svg";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="MainPage">
        <main>
          <div className="SectionContainer">
            <div className="DetailContainer">
              <header>
                <h1>
                  Make <br className="HeaderBreakLine" />
                  remote work
                </h1>
              </header>

              <div>
                <span>
                  Get your team in sync, no matter your location. Streamline
                  processes, create team rituals, and watch productivity soar.
                </span>
              </div>
              <button className="LearnMoreButton" aria-label="Learn more">Learn more</button>
              <div className="LogosContainer">
                <img src={dataBiz} className="LogoImages" alt="logo" />
                <img src={audioPhile} className="LogoImages" alt="logo" />
                <img src={meet} className="LogoImages" alt="logo" />
                <img src={maker} className="LogoImages" alt="logo" />
              </div>
            </div>
            <div className="ImageContainer">
              <img
                src={heroDesktop}
                alt="heroImage"
                className="DesktopHeroImage"
              />
              <img
                src={heroMobile}
                alt="heroImage"
                className="MobileHeroImage"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
