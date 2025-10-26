import "./Styles/Hero.css";
import { hero } from "../assets/media";

export default function Hero() {
  return (
    <div className="hero-section">
      <video
        className="hero-video"
       autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="cover-hero">
        {/* Add content here if needed */}
      </div>
    </div>
  );
}
