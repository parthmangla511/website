import "../App.css";
import "../css/achievement.css";

function Achievement() {
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
          <article className="achievement-card accent-left orange">
            <span className="achievement-card__pill">NATIONAL HACKATHON</span>
            <h3>1st Winner - SIH 2025</h3>
            <p>Team Geek Room bagged 1st prize at Smart India Hackathon Grand Finale under the Ministry of Education track with ₹1,00,000 cash reward.</p>
          </article>

          <article className="achievement-card accent-left cyan">
            <span className="achievement-card__pill">GLOBAL IMPACT</span>
            <h3>Google Solution Challenge Top 100</h3>
            <p>Selected among top global teams for building an AI-powered accessible healthcare platform for rural communities.</p>
          </article>

          <article className="achievement-card accent-right orange">
            <span className="achievement-card__pill">OPEN SOURCE</span>
            <h3>120+ Hacktoberfest PRs Merged</h3>
            <p>Our community members successfully contributed to major open-source projects including Kubernetes, Appwrite, and Vercel tools.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Achievement;
