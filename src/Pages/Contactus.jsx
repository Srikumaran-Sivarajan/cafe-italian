import "./Styles/Contactus.css";
import { pattern } from "../assets/media";

export default function Contactus(){
    const TEXT1 ="contact with us";

    const DETAILS =[
        {head:"Booking Request", desc:"0156 094 5463"},
        {head:"Location", desc:"2 Bury Old Road,Manchester, M8 9JN"},
        {head:"Opening Hours", desc:"Monday to Saturday 11:00am - 11:30pm Sunday 12:00pm - 11:00pm"},
     ];

    return <div 
    style={{
        backgroundImage: `url(${pattern})`,     
        backgroundRepeat: "repeat", 
      }}
    className="full contactus-section">
        <div className="center">
        <p className="gold">{TEXT1}</p>
        </div>
        <div className="center">
            <h3>
               Contact us
            </h3>
        </div>
        <div className="scroll-wrapper">
            {
                DETAILS.map((x,index) => {
                    return <div key={index} className="contact-card">
                            <p>{x.head}</p>
                            <p>{x.desc}</p>
                        </div>
                })
            }
        </div>

    </div>
}