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
        const message = err instanceof Error ? err.message : "Unable to load achievements.";
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
        <span className="achievement__particle" style={{ "--x": "8%", "--y": "16%", "--size": "10px", "--duration": "14s" }} />
        <span className="achievement__particle" style={{ "--x": "22%", "--y": "72%", "--size": "14px", "--duration": "18s" }} />
        <span className="achievement__particle" style={{ "--x": "43%", "--y": "24%", "--size": "8px", "--duration": "11s" }} />
        <span className="achievement__particle" style={{ "--x": "68%", "--y": "42%", "--size": "12px", "--duration": "16s" }} />
        <span className="achievement__particle" style={{ "--x": "84%", "--y": "12%", "--size": "9px", "--duration": "13s" }} />
        <span className="achievement__particle" style={{ "--x": "72%", "--y": "78%", "--size": "11px", "--duration": "20s" }} />
        <span className="achievement__particle" style={{ "--x": "48%", "--y": "86%", "--size": "7px", "--duration": "15s" }} />
        <span className="achievement__particle" style={{ "--x": "16%", "--y": "48%", "--size": "13px", "--duration": "17s" }} />
      </div>

      <div className="achievement__wrapper page-content">
        <div className="achievement__hero">
          <p className="achievement__eyebrow">ACHIEVEMENTS</p>
          <h2>
            OUR HALL OF <span className="gradient-text-orange">VICTORIES</span>
          </h2>
          <p>
            Geek Room JIMS members regularly dominate national hackathons and open-source
            challenges with sharp execution and collaborative innovation.
          </p>
        </div>

        <div className="achievement__cards-grid">
          {loading && <p>Loading achievements...</p>}
          {error && <p className="error">Failed to load: {error}</p>}
          {!loading && !error && items.length === 0 && (
            <p>No achievements found.</p>
          )}
          {!loading && !error && items.map((a) => (
            <article key={a._id} className="achievement-card accent-left orange">
              <span className="achievement-card__pill">{a.tagname || 'ACHIEVEMENT'}</span>
              <h3>{a.winnerName}</h3>
              <h3>{a.title}</h3>
              <p>{a.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievement;
