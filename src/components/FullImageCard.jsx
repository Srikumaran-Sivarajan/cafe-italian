import Button from "./Button";
import "./styles/FullImageCard.css";

export default function FullImageCard({data}){
    const {src, title, desc, stitle, buttonData} = data;

    return <div className="img-wrapper">
        
        <img src={src}/>

        <div className="img-cover">
            {
            stitle?
            <p>{stitle}</p>:null
            }
            <h3>{title}</h3>
            <p className="p gold">{desc}</p>
            {
            buttonData?
            <Button text={buttonData.text}/>:null
            }
        </div>
        

    </div>
}