import "./Styles/GuestPage.css";

export default function GuestPage() {
  const reviews = [
    {
      name: "Anna Mathew",
      date: "one day ago",
      text: "Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming back! We booked private dining for our next visit.",
      stars: 5,
      image: "https://i.pravatar.cc/50?img=5",
    },
    {
      name: "Gerrin Tom",
      date: "one day ago",
      text: "We booked private dining for our anniversary, and everything was perfect. The steak was melt-in-your-mouth delicious, and the staff was amazing!",
      stars: 5,
      image: "https://i.pravatar.cc/50?img=2",
    },
    {
      name: "Mery Elza",
      date: "one day ago",
      text: "Best steak I’ve ever had! The quality of the meat was outstanding, and the truffle fries were to die for. Highly recommend!",
      stars: 5,
      image: "https://i.pravatar.cc/50?img=10",
    },
  ];

  return (
    <div className="guest-section full">
      <div className="center">
        <p className="gold">REVIEWS</p>
      </div>
      <div className="center">
        <h3>Hear Our Guests</h3>
      </div>

      <div className="reviews-container">
        {reviews.map((r, i) => (
          <div className="review-card" key={i}>
            <div className="review-header">
              <img src={r.image} alt={r.name} className="avatar" />
              <div>
                <p className="name">{r.name}</p>
                <p className="date">{r.date}</p>
              </div>
            </div>
            <div className="stars">
              {"★".repeat(r.stars)}
            </div>
            <p className="review-text">{r.text}</p>
          </div>
        ))}
      </div>

      
    </div>
  );
}
