import "./Styles/Hero.css";
import { hero, logo } from "../assets/media";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

export default function Hero() {
  return (
    <div className="hero-section">
      <video
        className="hero-video push-back"
       autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="push-back logo-container">
        <img src={logo} />
      </div>
      <div className="cover-hero">
        <Navbar />
        <div className="cover-div">
            <h1>
              Welcome to Cafe Italian
            </h1>
        </div>
        <div className="cover-div">
            <Button text={"Viwe Menu"}/>
        </div>
      </div>

    </div>
  );
}
