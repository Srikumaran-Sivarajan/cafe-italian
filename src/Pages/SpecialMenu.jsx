import "./Styles/SpecialMenu.css";

export default function SpecialMenu(){

    const TEXT1="Our Menu";
    return <div className="special-section gap-pages full">
       <div className="center">
        <p className="gold">{TEXT1}</p>
        </div>
        <div className="center">
            <h3>
               Our <span>Special</span>
            </h3>
        </div>
        <div></div>
    </div>
}