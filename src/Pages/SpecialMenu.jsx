import "./Styles/SpecialMenu.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import {
  specila_1,
  sepcial_2,
  sepcial_3,
} from "../assets/media";

export default function SpecialMenu() {
  const menuItems = [
    {
      id: 1,
      name: "Smoked BBQ Steak",
      price: "€25",
      image: specila_1,
    },
    {
      id: 2,
      name: "Classic Ribeye Steak",
      price: "€30",
      image: sepcial_2,
    },
    {
      id: 3,
      name: "Grilled Sirloin Steak",
      price: "€28",
      image: sepcial_3,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % menuItems.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? menuItems.length - 1 : prev - 1
    );
  };

  return (
    <section className="special-section gap-pages full">
      <div className="center">
        <p className="gold">Our Menu</p>
      </div>

      <div className="center">
        <h3>
          Our <span>Specials</span>
        </h3>
      </div>

      <div className="design-wrapper">
        {menuItems.map((item, index) => {
          // Compute classes dynamically
          let className = "design-card dimmed";
          if (index === activeIndex) className = "design-card active";

          return (
            <div className={className} key={item.id}>
              <div className="dish-image">
                <img src={item.image} alt={item.name} />
              </div>

              {index === activeIndex && (
                <>
                  <div className="price-tag">{item.price}</div>
                  <p className="dish-name">{item.name}</p>
                  <div className="nav-buttons">
                    <div className="arrow-btn" onClick={handlePrev}>
                      <ArrowLeft size={18} />
                    </div>
                    <div className="arrow-btn" onClick={handleNext}>
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
