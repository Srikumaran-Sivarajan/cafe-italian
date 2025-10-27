import "./Styles/Gallery.css";
import { g_1,g_2,g_3,g_4,g_5,g_6,g_7,g_8 } from "../assets/media";
import { Instagram } from "lucide-react";

export default function Gallery(){
    const LOOP =[g_1,g_2,g_3,g_4,g_5,g_6,g_7,g_8];

    return <div className="gallery-section full ">
        <div className="top-part">
           <div>
            <p className="gold">Gallery</p>
            <h3>follow us</h3>
           </div>
           <div className="gold">
            <Instagram />
            <p >Check out our instagram</p>

           </div>
        </div>
        <div className="img-container">
            {
                LOOP.map((x,index) => <img src={x} key={index}/>)
            }
        </div>

    </div>
}