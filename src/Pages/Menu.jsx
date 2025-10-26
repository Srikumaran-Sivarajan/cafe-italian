import CardImage from "../components/CardImage";
import "./Styles/Menu.css";

import { menu_1,menu_2,menu_3 } from "../assets/media";
import Button from "../components/Button";


export default function Menu(){
    const TEXT1="Explore Menu";
    const TEXT2 = "Our Menu";

    return <div className="menu-section gap-pages full">

    <div className="center">
        <p className="gold">{TEXT1}</p>
    </div>
    <div className="center">
        <h3>
            {TEXT2}
        </h3>
    </div>
    <div className="center wrapper">
        <CardImage src={menu_1} title={"Italian dishes"}/>
        <CardImage src={menu_2} title={"Pastry"}/>
        <CardImage src={menu_3} title={"Coffee"}/>
    </div>
    <div className="center ">
        <Button text="View Menu"/>
    </div>
    </div>
}