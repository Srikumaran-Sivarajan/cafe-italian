import "./styles/CardImage.css";

export default function CardImage({ src, title }) {
  return (
    <div className="image-wrapper">
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
