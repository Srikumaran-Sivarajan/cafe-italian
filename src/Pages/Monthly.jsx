import "./Styles/Monthly.css";
import { highlights_1 ,highlights_2 ,highlights_3 ,highlights_4 } from "../assets/media";

export default function Monthly(){
    const TEXT1="Our top picks this month";

    const DETAILS = [
        {src:highlights_1 ,name:"Adana Kebab",price:"€ 120"},
        {src:highlights_2 ,name:"Meze Platter",price:"€ 120"},
        {src:highlights_3 ,name:"Baklava",price:"€ 120"},
        {src:highlights_4 ,name:" Kebab Platter",price:"€ 120"},
    ]

    return <div className="monthly-section gap-pages full">

        <div className="center">
        <p className="gold">{TEXT1}</p>
        </div>
        <div className="center">
            <h3>
              Monthly  <span>Highlights</span>
            </h3>
        </div>
        <div className="high-wrapper">
            {DETAILS.map((x,index)=><HelperCard data={x} key={index} />)}
        </div>
    </div>
}

function HelperCard({data}){

    return <div className="card">
        <img src={data.src}/>
        <div>
            <h1 className="name">{data.name}</h1>
            <h1 className="price">{data.price}</h1>
            
        </div>
    </div>
}