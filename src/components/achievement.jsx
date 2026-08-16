import React, { useEffect, useState } from "react";
import "../App.css";
import "../css/achievement.css";

function Achievement() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/achievements");
        if (!res.ok) {
          throw new Error("Unable to load achievement data from the server.");
        }
        const data = await res.json();
        setItems(Array.isArray(data) ? data : []);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Unable to load achievements.";
        setError(message);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <section id="achievements" className="achievement">
      <div className="achievement__backdrop" aria-hidden="true">
        <span className="achievement__glow achievement__glow--orange" />
        <span className="achievement__glow achievement__glow--cyan" />
        <span className="achievement__grid" />
      </div>

      <div className="achievement__wrapper">
        <div className="achievement__hero">
          <p className="achievement__eyebrow">ACHIEVEMENTS</p>

          <h2>
            OUR HALL OF{" "}
            <span className="gradient-text-orange">VICTORIES</span>
          </h2>

          <p>
            Geek Room JIMS members regularly dominate national hackathons and
            open-source challenges with sharp execution and collaborative innovation.
          </p>
        </div>

        {loading && (
          <p className="achievement__status">Loading achievements...</p>
        )}

        {error && !loading && (
          <p className="achievement__status achievement__status--error">
            {error}
          </p>
        )}

        {!loading && !error && items.length === 0 && (
          <p className="achievement__status">No achievements found.</p>
        )}

        {!loading && !error && items.length > 0 && (
          <div className="achievement__cards-grid">
            {items.map((a, index) => (
              <article
                key={a._id || `${a.winnerName}-${a.title}-${index}`}
                className={`achievement-card ${
                  index % 2 === 0 ? "orange" : "cyan"
                }`}
              >
                <span className="achievement-card__pill">
                  {a.tagname || "ACHIEVEMENT"}
                </span>

                <div className="achievement-card__content">
                  <p className="achievement-card__winner">
                    {a.winnerName}
                  </p>
                  <h3>{a.title}</h3>
                  <p className="achievement-card__description">
                    {a.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Achievement;
