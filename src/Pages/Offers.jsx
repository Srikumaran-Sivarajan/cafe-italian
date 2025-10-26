import "./Styles/Offers.css";
import { food,atmosphere, drinks } from "../assets/media";
import FullImageCard from "../components/FullImageCard";

export default function Offers(){

    const TEXT1="we offer";

    const DETAILS = [
        {src:food,title:"Food",desc:"Bavette was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality. Every dish is a labor of love, crafted by our "},
        {src:drinks,title:"Drinks",desc:"Bavette was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality. Every dish is a labor of love, crafted by our "},
        {src:atmosphere,title:"Atmosphere",desc:"Bavette was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality. Every dish is a labor of love, crafted by our"},
    ]
    

    return <div className="offer-section gap-pages full">

        <div className="center">
        <p className="gold">{TEXT1}</p>
        </div>
        <div className="center">
            <h3>
               Unforgettable Dining <span>Experience</span>
            </h3>
        </div>
        <div>
            {
                DETAILS.map((x,index)=><FullImageCard data={x} key={index}/>)
            }
        </div>
    </div>
}