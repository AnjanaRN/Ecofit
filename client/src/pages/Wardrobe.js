import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Wardrobe.css";

const Wardrobe = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  const fetchWardrobe = async () => {
    try {
      const res = await axios.get("http://localhost:5000/wardrobe");
      setItems(res.data);
    } catch (error) {
      console.error("Fetch wardrobe error:", error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/wardrobe/${id}`);
      fetchWardrobe();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  useEffect(() => {
    fetchWardrobe();
  }, []);

  const getImpactCategory = (score) => {
    if (score >= 70) return "low";
    if (score >= 50) return "medium";
    return "high";
  };

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return items;
    return items.filter((item) => getImpactCategory(item.score) === activeFilter);
  }, [items, activeFilter]);

  const totalItems = items.length;

  const avgScore = totalItems
    ? Math.round(items.reduce((sum, item) => sum + item.score, 0) / totalItems)
    : "-";

  const bestItemScore = totalItems
    ? Math.max(...items.map((item) => item.score))
    : "-";

  const needsImprovement = items.filter((item) => item.score < 50).length;

  const lowCount = items.filter((item) => getImpactCategory(item.score) === "low").length;
  const mediumCount = items.filter((item) => getImpactCategory(item.score) === "medium").length;
  const highCount = items.filter((item) => getImpactCategory(item.score) === "high").length;

  return (
    <div className="wardrobe-page">
      <div className="wardrobe-hero">
        <span className="badge">🧪 MY WARDROBE</span>

        <h1>
          Your personal <span>eco wardrobe</span>
        </h1>

        <p>
          Track all your items and see your overall environmental footprint at a glance.
        </p>
      </div>

      <div className="wardrobe-stats">
        <div className="stat-card">
          <div className="stat-icon">👗</div>
          <h2>{totalItems}</h2>
          <p>TOTAL ITEMS</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <h2>{avgScore}</h2>
          <p>AVG IMPACT SCORE</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <h2>{bestItemScore}</h2>
          <p>BEST ITEM SCORE</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⚡</div>
          <h2>{needsImprovement}</h2>
          <p>NEEDS IMPROVEMENT</p>
        </div>
      </div>

      <div className="filters">
        <button
          className={activeFilter === "all" ? "active" : ""}
          onClick={() => setActiveFilter("all")}
        >
          All Items
        </button>

        <button
          className={activeFilter === "low" ? "active" : ""}
          onClick={() => setActiveFilter("low")}
        >
          🌿 Low Impact
        </button>

        <button
          className={activeFilter === "medium" ? "active" : ""}
          onClick={() => setActiveFilter("medium")}
        >
          ⚡ Medium Impact
        </button>

        <button
          className={activeFilter === "high" ? "active" : ""}
          onClick={() => setActiveFilter("high")}
        >
          🔥 High Impact
        </button>
      </div>

      <div className="wardrobe-content">
        <div className="wardrobe-main">
          {filteredItems.length === 0 ? (
            <div className="empty-state">
              <div className="leaf">🌿</div>
              <h2>Your wardrobe is empty</h2>
              <p>
                Start adding clothes using the Impact Calculator to build your eco profile.
              </p>
              <button
                className="primary-btn"
                onClick={() => navigate("/calculator")}
              >
                + Add Your First Item
              </button>
            </div>
          ) : (
            <div className="items-grid">
              {filteredItems.map((item) => {
                const category = getImpactCategory(item.score);

                return (
                  <div className="saved-item-card" key={item.id}>
                    <div className="saved-item-top">
                      <div>
                        <h3>{item.garment_name}</h3>
                        <p>{item.garment_type}</p>
                      </div>

                      <div className={`saved-score ${category}`}>
                        {item.score}
                      </div>
                    </div>

                    <div className="saved-item-details">
                      <div className="saved-detail-box">
                        <small>Material</small>
                        <strong>{item.primary_material}</strong>
                      </div>

                      <div className="saved-detail-box">
                        <small>Water</small>
                        <strong>{item.water} L</strong>
                      </div>

                      <div className="saved-detail-box">
                        <small>Carbon</small>
                        <strong>{item.carbon} kg CO₂</strong>
                      </div>

                      <div className="saved-detail-box">
                        <small>Toxicity</small>
                        <strong>{item.toxicity}</strong>
                      </div>

                      <div className="saved-detail-box full-width">
                        <small>Rating</small>
                        <strong>{item.rating}</strong>
                      </div>
                    </div>

                    <button
                      className="danger-btn"
                      onClick={() => deleteItem(item.id)}
                    >
                      🗑 Delete
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="sidebar">
          <div className="card">
            <h3>📈 Impact Distribution</h3>

            <div className="bar">
              <span>🌿 Low</span>
              <div className="progress">
                <div
                  className="progress-fill low-bar"
                  style={{ width: `${totalItems ? (lowCount / totalItems) * 100 : 0}%` }}
                ></div>
              </div>
              <span>{lowCount}</span>
            </div>

            <div className="bar">
              <span>⚡ Mid</span>
              <div className="progress">
                <div
                  className="progress-fill medium-bar"
                  style={{ width: `${totalItems ? (mediumCount / totalItems) * 100 : 0}%` }}
                ></div>
              </div>
              <span>{mediumCount}</span>
            </div>

            <div className="bar">
              <span>🔥 High</span>
              <div className="progress">
                <div
                  className="progress-fill high-bar"
                  style={{ width: `${totalItems ? (highCount / totalItems) * 100 : 0}%` }}
                ></div>
              </div>
              <span>{highCount}</span>
            </div>
          </div>

          <div className="card">
            <h3>💡 Quick Tips</h3>
            <p>
              Add more low-impact items like recycled or organic fabrics to improve your wardrobe score.
            </p>
          </div>

          <div className="card actions">
            <h3>⚙️ Actions</h3>
            <button className="primary-btn" onClick={fetchWardrobe}>
              ↻ Refresh Wardrobe
            </button>
            <button
              className="secondary-btn"
              onClick={() => navigate("/calculator")}
            >
              + Add New Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wardrobe;