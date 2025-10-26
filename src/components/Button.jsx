import "./styles/Button.css";
import { ArrowRight } from "lucide-react"; 
export default function Button({ text = "BOOK TABLE", onClick }) {
  return (
    <button className="primary-button" onClick={onClick}>
      <span>{text}</span>
      <ArrowRight className="arrow-icon" />
    </button>
  );
}
