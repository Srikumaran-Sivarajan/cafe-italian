import "./styles/FullImageCard.css";

export default function FullImageCard({data}){
    const {src, title, desc} = data;

    return <div className="img-wrapper">
        <img src={src}/>

        <div className="img-cover">
            <p className="title">{title}</p>
            <p className="p">{desc}</p>
        </div>

    </div>
}