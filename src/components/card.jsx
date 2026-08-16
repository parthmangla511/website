import "../App.css";
import "../css/card.css";
import logo from "../images/logo.jpeg";

const events = [
  {
    title: "Smart India Hackathon",
    image: logo,
    name: "Winner-1",
    description:
      "Showcase the winning team, problem statement, result, and other achievement details here.",
  },
  {
    title: "Prastuti Ideathon",
    name : "Winner-2",
    description:
      "Showcase the ideathon result, team members, idea summary, and recognition here.",
  },
  {
    title: "Hack Vortex 2.0",
    name: "Winner-3",
    description:
      "Showcase the hackathon result, project details, team, and achievement here.",
  },
  {
    title: "Silent Query",
    name: "Winner-4",
    description:
      "Showcase the event result, winning idea, team details, and recognition here.",
  },
];

function Card() {
  return (
    <section className="card">
      <div className="card__header">
        <p className="card__eyebrow">EVENT HIGHLIGHTS</p>
        <h2>Our Winners</h2>
      </div>

      <div className="winners-container">
        {events.map((event, index) => (
          <article
            className={`winners ${index % 2 === 0 ? "winners--orange" : "winners--cyan"}`}
            key={event.title}
          >
            <div className="winners__main">
              <span className="winners__tag">
                {index % 2 === 0 ? "EVENT" : "HIGHLIGHT"}
              </span>

              <h3>{event.title}</h3>
              <span className="winners__hover-hint">Hover for details</span>
            </div>
            <div className="winners__image-wrapper">
  <img
    src={event.image}
    alt={`${event.title} winners`}
    className="winners__image"
  />
</div>

            <div className="winners__details">
              <span className="winners__details-label">EVENT DETAILS</span>
              <h2>{event.name}</h2>
              <p>{event.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Card;
