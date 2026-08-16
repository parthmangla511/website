import React from "react";
import "../App.css";
import "../css/fame.css";

const hallOfFame = [
  {
    name: "Winner Name",
    role: "ACHIEVEMENT",
    image: "/images/fame/winner-1.jpg",
    achievement: "Add the winner's achievement here.",
    description:
      "Add more details about the winner, result, contribution, or recognition here.",
  },
  {
    name: "Member Name",
    role: "COMMUNITY LEADER",
    image: "/images/fame/winner-2.jpg",
    achievement: "Add the member's recognition here.",
    description:
      "Add more details about the member and the work that earned this recognition.",
  },
  {
    name: "Team / Winner",
    role: "TECH CHAMPION",
    image: "/images/fame/winner-3.jpg",
    achievement: "Add the achievement here.",
    description:
      "Add more details about the project, competition, or contribution.",
  },
  {
    name: "Team / Winner",
    role: "HALL OF FAME",
    image: "/images/fame/winner-4.jpg",
    achievement: "Add the milestone here.",
    description:
      "Add more details about the milestone or accomplishment.",
  },
];

function Fame() {
  return (
    <>
      <style>{`
        .fame {
          width: min(1240px, calc(100% - 2rem));
          margin: 0 auto;
          padding: 92px 0;
          color: var(--text-main);
          text-align: center;
          position: relative;
        }

        .fame__hero {
          margin-bottom: 42px;
        }

        .fame__eyebrow {
          display: inline-flex;
          margin-bottom: 12px;
          padding: 7px 14px;
          border: 1px solid rgba(0, 240, 255, 0.3);
          border-radius: 999px;
          background: rgba(0, 240, 255, 0.07);
          color: #00f0ff;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .fame__hero h2 {
          margin: 0;
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          line-height: 1;
          text-transform: uppercase;
          color: var(--text-main);
        }

        .fame__gradient {
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #ff6b00 55%,
            #ff3d00 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .fame__hero > p:last-child {
          max-width: 760px;
          margin: 18px auto 0;
          color: var(--text-muted);
          line-height: 1.75;
        }

        .fame-container {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-top: 42px;
        }

        .fame-box {
          position: relative;
          padding: 28px;
          overflow: visible;
          text-align: left;
          background: var(--bg-card);
          border: 1px solid var(--border-card);
          border-top-color: var(--blue-border);
          border-radius: 18px;
          box-shadow: var(--shadow-deep);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          transition:
            transform 0.3s var(--ease-out),
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .fame-box:hover {
          transform: translateY(-5px);
          border-color: var(--blue-cyan);
          box-shadow: var(--shadow-deep), var(--shadow-glow-cyan);
          z-index: 20;
        }

        .fame-box__image-wrap {
          width: 100%;
          height: 230px;
          overflow: hidden;
          border-radius: 14px;
          margin-bottom: 18px;
          background: #0d111c;
          position: relative;
        }

        .fame-box__image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.35s ease;
        }

        .fame-box:hover .fame-box__image {
          transform: scale(1.06);
        }

        .fame-box__image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 45%,
            rgba(7, 8, 13, 0.78) 100%
          );
          pointer-events: none;
        }

        .fame-box__role {
          display: inline-flex;
          margin-bottom: 10px;
          padding: 5px 10px;
          border-radius: 999px;
          color: #00f0ff;
          background: rgba(0, 240, 255, 0.07);
          border: 1px solid rgba(0, 240, 255, 0.28);
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .fame-box:nth-child(odd) .fame-box__role {
          color: #ff6b00;
          background: rgba(255, 107, 0, 0.08);
          border-color: rgba(255, 107, 0, 0.28);
        }

        .fame-box h2 {
          margin: 0 0 8px;
          font-family: var(--font-display);
          font-size: 1.25rem;
          color: var(--text-main);
        }

        .fame-box p {
          margin-top: 10px;
          color: var(--text-muted);
          line-height: 1.65;
        }

        .fame-box__hint {
          display: inline-block;
          margin-top: 12px;
          color: var(--text-dim);
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.05em;
          transition: opacity 0.2s ease;
        }

        .fame-box:hover .fame-box__hint {
          opacity: 0;
        }

        /* Details appear outside the card when hovered */
        .fame-box__details {
          position: absolute;
          left: 10px;
          right: 10px;
          top: calc(100% - 18px);
          z-index: 30;
          padding: 18px 20px;
          background: rgba(13, 17, 28, 0.97);
          border: 1px solid rgba(0, 240, 255, 0.25);
          border-top: none;
          border-radius: 0 0 16px 16px;
          box-shadow: 0 22px 40px rgba(0, 0, 0, 0.42);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          opacity: 0;
          transform: translateY(-10px) scale(0.98);
          pointer-events: none;
          transition:
            opacity 0.28s ease,
            transform 0.28s ease;
        }

        .fame-box:hover .fame-box__details {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .fame-box__details-label {
          display: block;
          margin-bottom: 6px;
          color: #00f0ff;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        .fame-box:nth-child(odd) .fame-box__details {
          border-left: 2px solid #ff6b00;
        }

        .fame-box:nth-child(odd) .fame-box__details-label {
          color: #ff6b00;
        }

        .fame-box__details h3 {
          margin: 0 0 6px;
          color: var(--text-main);
          font-family: var(--font-display);
          font-size: 1rem;
        }

        .fame-box__details p {
          margin: 0;
          color: var(--text-muted);
          line-height: 1.65;
        }

        @media (max-width: 700px) {
          .fame-container {
            grid-template-columns: 1fr;
          }

          .fame-box__image-wrap {
            height: 210px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fame-box,
          .fame-box__image,
          .fame-box__details {
            transition: none;
          }
        }
      `}</style>

      <section id="fame" className="fame">
        <div className="fame__hero">
          <p className="fame__eyebrow">RECOGNITION</p>

          <h2>
            HALL OF <span className="fame__gradient">FAME</span>
          </h2>

          <p>
            Celebrating the people and teams whose work, leadership, and
            achievements continue to strengthen Geek Room JIMS.
          </p>
        </div>

        <div className="fame-container">
          {hallOfFame.map((person, index) => (
            <article className="fame-box" key={`${person.name}-${index}`}>
              <div className="fame-box__image-wrap">
                <img
                  src={person.image}
                  alt={`${person.name} Hall of Fame`}
                  className="fame-box__image"
                />

                <div className="fame-box__image-overlay" />
              </div>

              <span className="fame-box__role">
                {person.role}
              </span>

              <h2>{person.name}</h2>

              <p>{person.achievement}</p>

              <span className="fame-box__hint">
                HOVER FOR DETAILS
              </span>

              <div className="fame-box__details">
                <span className="fame-box__details-label">
                  HALL OF FAME
                </span>

                <h3>{person.achievement}</h3>

                <p>{person.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Fame;
