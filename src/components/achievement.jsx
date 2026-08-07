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
          <p className="achievement__eyebrow">OUR ACHIEVEMENTS</p>
          <h2>Celebrating milestones, innovation, and the incredible journey of the Geek Room Community.</h2>
          <p>
            From student-led hackathons to hands-on workshops, we bring ideas to life with a blend of creativity,
            collaboration, and code. Explore our progress, passion, and the bright future of our community.
          </p>
          <div className="achievement__actions">
            <a href="#achievements" className="button primary">Explore Achievements</a>
            <a href="#join" className="button secondary">Join Community</a>
          </div>
        </div>

        <div className="achievement__stats-grid">
          <article className="achievement__stat-card">
            <span className="achievement__stat-label">Hackathons</span>
            <strong>18+</strong>
            <p>Collaborative coding sprints that pushed our ideas from concept to launch.</p>
          </article>
          <article className="achievement__stat-card">
            <span className="achievement__stat-label">Projects</span>
            <strong>40+</strong>
            <p>Innovative builds, community tools, and creative tech experiments showcased by our members.</p>
          </article>
          <article className="achievement__stat-card">
            <span className="achievement__stat-label">Members</span>
            <strong>250+</strong>
            <p>A growing network of learners, makers, and mentors driving the Geek Room experience.</p>
          </article>
          <article className="achievement__stat-card">
            <span className="achievement__stat-label">Workshops</span>
            <strong>40+</strong>
            <p>Engaging sessions that foster learning and skill development within the Geek Room community.</p>
          </article>
        </div>

        <div className="achievement__visual">
          <div className="achievement__code-shell">
            <div className="achievement__code-header">
              <span />
              <span />
              <span />
            </div>
            <pre>
              <code>
const community = "Geek Room";
const journey = [
  "milestones",
  "innovation",
  "collaboration",
];

function celebrate() {'{'}
  return "Together we build the future.";
{'}'}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievement;