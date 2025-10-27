import { MENU } from "../assets/constants";
import Button from "./Button";
import "./styles/Navbar.css";

export default function Navbar(){

    return <nav className="pad-1 sm-hid">
        <ul className="menu ">
            {
                MENU.map((x,index)=><li key={index}>
                    <p>{x.text}</p>
                </li>)
            }
        </ul>
        <div>
            <Button  text={"Book Table"}/>
        </div>
    </nav>
}