import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-left">
          <div className="hero-badge">🌍 ENVIRONMENTAL FASHION TRACKER</div>

          <h1 className="hero-title">
            Fashion that <span>respects</span> the planet.
          </h1>

          <p className="hero-text">
            Discover the environmental cost of your clothing choices.
            Assess water usage, carbon emissions, and toxicity — then make
            better decisions for a greener wardrobe.
          </p>

          <div className="hero-buttons">
            <button
              className="hero-btn primary-btn"
              onClick={() => navigate("/calculator")}
            >
              🔎 Assess My Clothes
            </button>

            <button
              className="hero-btn secondary-btn"
              onClick={() => navigate("/materials")}
            >
              📘 Explore Materials
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="score-card">
            <p className="mini-title">⚡ IMPACT SCORE</p>
            <h2>42</h2>
            <p>Medium Impact</p>
            <div className="score-bar">
              <div className="score-fill"></div>
            </div>
          </div>

          <div className="wardrobe-card">
            <p className="mini-title">📊 WARDROBE ANALYSIS</p>

            <div className="wardrobe-item">
              <span>Organic Cotton Tee</span>
              <span className="good">35</span>
            </div>
            <div className="line">
              <div className="line-fill green"></div>
            </div>

            <div className="wardrobe-item">
              <span>Polyester Jeans</span>
              <span className="bad">78</span>
            </div>
            <div className="line">
              <div className="line-fill red red2"></div>
            </div>

            <div className="wardrobe-item">
              <span>Recycled Wool Jacket</span>
              <span className="good">18</span>
            </div>
            <div className="line">
              <div className="line-fill green green2"></div>
            </div>

            <div className="wardrobe-item">
              <span>Leather Sneakers</span>
              <span className="bad">88</span>
            </div>
            <div className="line">
              <div className="line-fill red red3"></div>
            </div>

            <div className="avg-score">
              Avg Score <span>55</span>
            </div>
          </div>

          <div className="best-picks-card">
            <p className="mini-title">🌱 BEST PICKS</p>
            <div className="pick-item">Hemp</div>
            <div className="pick-item">Cork</div>
          </div>
        </div>
      </section>

      <section className="top-stats">
        <div>
          <h2>93B</h2>
          <p>TONNES CO₂/YEAR BY FASHION</p>
        </div>
        <div>
          <h2>10K</h2>
          <p>LITRES PER COTTON SHIRT</p>
        </div>
        <div>
          <h2>85%</h2>
          <p>OF CLOTHES END UP IN LANDFILL</p>
        </div>
      </section>

      <section className="summary-cards">
        <div className="summary-card">
          <h2>18</h2>
          <p>MATERIALS TRACKED</p>
        </div>
        <div className="summary-card">
          <h2>3</h2>
          <p>IMPACT DIMENSIONS</p>
        </div>
        <div className="summary-card">
          <h2>50+</h2>
          <p>ECO ALTERNATIVES</p>
        </div>
        <div className="summary-card">
          <h2>100%</h2>
          <p>FREE TO USE</p>
        </div>
      </section>

      <section className="features-section">
        <div className="section-badge">✨ FEATURES</div>
        <h2 className="section-title">
          Everything you need to <span>dress sustainably</span>
        </h2>
        <p className="section-text">
          A complete toolkit to understand, track, and reduce the environmental
          footprint of your wardrobe.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="icon-box purple">🔎</div>
            <h3>Impact Calculator</h3>
            <p>
              Score any garment by material, origin, certification and care
              habits.
            </p>
            <button
              className="feature-link-btn"
              onClick={() => navigate("/calculator")}
            >
              Try Calculator →
            </button>
          </div>

          <div className="feature-card">
            <div className="icon-box yellow">👗</div>
            <h3>Wardrobe Tracker</h3>
            <p>
              Build your digital wardrobe and see your total footprint at a
              glance.
            </p>
            <button
              className="feature-link-btn"
              onClick={() => navigate("/wardrobe")}
            >
              My Wardrobe →
            </button>
          </div>

          <div className="feature-card">
            <div className="icon-box blue">📋</div>
            <h3>Materials Library</h3>
            <p>
              Explore fabrics and materials ranked by CO₂, water use, and more.
            </p>
            <button
              className="feature-link-btn"
              onClick={() => navigate("/materials")}
            >
              Explore Library →
            </button>
          </div>

          <div className="feature-card">
            <div className="icon-box pink">💡</div>
            <h3>Eco Tips Engine</h3>
            <p>
              Get practical advice on washing habits and better clothing
              choices.
            </p>
            <button
              className="feature-link-btn"
              onClick={() => navigate("/eco-tips")}
            >
              Get Tips →
            </button>
          </div>

          <div className="feature-card">
            <div className="icon-box mint">📊</div>
            <h3>Comparison Tool</h3>
            <p>
              Compare two items side by side and see which is greener.
            </p>
            <button
              className="feature-link-btn"
              onClick={() => navigate("/calculator")}
            >
              Compare Items →
            </button>
          </div>

          <div className="feature-card">
            <div className="icon-box peach">🏆</div>
            <h3>Certifications Guide</h3>
            <p>
              Understand what GOTS, OEKO-TEX, and Fair Trade really mean.
            </p>
            <button
              className="feature-link-btn"
              onClick={() => navigate("/eco-tips")}
            >
              Learn More →
            </button>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="section-badge">🪄 PROCESS</div>
        <h2 className="section-title">
          How <span>EcoFit</span> works
        </h2>

        <div className="process-line">
          <div className="step">
            <span>01</span>
            <p>Select Material</p>
          </div>
          <div className="step">
            <span>02</span>
            <p>Add Details</p>
          </div>
          <div className="step">
            <span>03</span>
            <p>Get Score</p>
          </div>
          <div className="step">
            <span>04</span>
            <p>Take Action</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;