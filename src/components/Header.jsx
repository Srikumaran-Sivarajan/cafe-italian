import "./styles/Header.css";
import { DETAILS } from "../assets/constants";

export default function Header() {
  return (
    <header>
      <ul className="head-container">
        {DETAILS.map((x, index) => (
          <List data={x} key={index} />
        ))}
      </ul>
    </header>
  );
}

function List({ data }) {
  return (
    <li className="head-list">
      <span className="icon">
        <data.Icon />
      </span>
      {data.link ? (
        <a href={`${data.link}${data.text}`} target="_blank" rel="noopener noreferrer">
          <p>{data.text}</p>
        </a>
      ) : (
        <p>{data.text}</p>
      )}
    </li>
  );
}
