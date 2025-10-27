import "./styles/Footer.css";
import {logo} from "../assets/media";
import { MENU } from "../assets/constants";
import { Instagram, Facebook, MessageCircle,  Mail } from "lucide-react";

export default function Footer(){

    return <footer>
        <img src={logo} />
        <ul>
            {
                MENU.map((x,index)=><li key={index}>
                    {x.text}
                </li>)
            }
        </ul>
        <div className="icons">
            <Instagram />
            <Facebook />
            <MessageCircle />
            <Mail />
        </div>
        <hr />
        <p >
            © 2024 Istanbul Restaurant Manchester. All Rights Reserved | <span>Powered By ME</span>
        </p>
    </footer>
}