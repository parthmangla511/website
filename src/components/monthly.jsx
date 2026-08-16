import React from "react";
import "../css/monthly.css";

const monthlyHighlights = [
  {
    month: "MONTH 01",
    label: "COMMUNITY SPOTLIGHT",
    title: "Add your monthly highlight",
    description:
      "Replace this with the main achievement, event, milestone, or community moment for the month.",
  },
  {
    month: "MONTH 02",
    label: "EVENT HIGHLIGHT",
    title: "Add your event highlight",
    description:
      "Replace this with a hackathon, workshop, tech event, or community activity.",
  },
  {
    month: "MONTH 03",
    label: "MEMBER MILESTONE",
    title: "Add your member milestone",
    description:
      "Replace this with a member achievement, team result, open-source contribution, or award.",
  },
];

function Monthly() {
  return (
    <section
      className="monthly-highlights"
      aria-labelledby="monthly-highlights-title"
    >
      <div className="monthly-highlights__header">
        <div>
          <p className="monthly-highlights__eyebrow">MONTHLY UPDATE</p>
          <h3 id="monthly-highlights-title">
            MONTHLY <span className="gradient-text-cyan">HIGHLIGHTS</span>
          </h3>
        </div>

        <p className="monthly-highlights__intro">
          A quick look at the moments, milestones, and community wins that
          made each month special.
        </p>
      </div>

      <div className="monthly-highlights__grid">
        {monthlyHighlights.map((highlight, index) => (
          <article
            key={`${highlight.month}-${index}`}
            className={`monthly-highlight-card ${
              index % 2 === 0 ? "orange" : "cyan"
            }`}
          >
            <div className="monthly-highlight-card__top">
              <span className="monthly-highlight-card__month">
                {highlight.month}
              </span>
              <span className="monthly-highlight-card__dot" />
            </div>

            <span className="monthly-highlight-card__label">
              {highlight.label}
            </span>

            <h4>{highlight.title}</h4>
            <p>{highlight.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Monthly;
