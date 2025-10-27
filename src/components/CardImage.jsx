import "./styles/CardImage.css";
import { useEffect } from "react";
import Aos from "aos";

export default function CardImage({ src, title }) {
  useEffect(() => {
      Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
      });
  }, []);
  return (
    <div className="image-wrapper" data-aos="flip-left">
      <img src={src} alt={title} />
      <div className="overlay">
        <ul>
          <li className="title"><h4>
            {title}
            </h4></li>
          <li className="subtitle">VIEW MENU</li>
        </ul>
      </div>
    </div>
  );
}
