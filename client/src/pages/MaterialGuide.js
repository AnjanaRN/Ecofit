import { useMemo, useState } from "react";
import "./MaterialGuide.css";

const materialsData = [
  {
    id: 1,
    name: "Cork Fabric",
    type: "Natural",
    score: 8,
    co2: 0.5,
    water: 100,
    icon: "🍾",
    description: "Harvested from bark without killing trees; carbon-negative cork oak landscapes.",
    better: [],
  },
  {
    id: 2,
    name: "Hemp",
    type: "Natural",
    score: 12,
    co2: 0.9,
    water: 300,
    icon: "🌿",
    description: "Fast-growing, low inputs; excellent for denim, tees, and blends.",
    better: [],
  },
  {
    id: 3,
    name: "Jute",
    type: "Material",
    score: 15,
    co2: 1.1,
    water: 350,
    icon: "🧶",
    description: "Coarse bast fibre; bags and linings; very low impact crop.",
    better: ["Hemp", "Linen"],
  },
  {
    id: 4,
    name: "Recycled Wool",
    type: "Recycled",
    score: 18,
    co2: 1.8,
    water: 80,
    icon: "♻️",
    description: "Reclaimed from pre- or post-consumer knitwear; excellent low-impact option.",
    better: [],
  },
  {
    id: 5,
    name: "Linen (Flax)",
    type: "Natural",
    score: 20,
    co2: 1.7,
    water: 500,
    icon: "🌿",
    description: "Flax needs little irrigation and few pesticides; strong and biodegradable.",
    better: [],
  },
  {
    id: 6,
    name: "Recycled Rubber",
    type: "Material",
    score: 20,
    co2: 1.0,
    water: 100,
    icon: "🧶",
    description: "Tyre and post-industrial scrap for soles and mats.",
    better: [],
  },
  {
    id: 7,
    name: "Ramie",
    type: "Material",
    score: 22,
    co2: 2.2,
    water: 400,
    icon: "🧶",
    description: "Bast fibre like linen; lustrous; processing can be chemical-heavy.",
    better: ["Linen", "Hemp"],
  },
  {
    id: 8,
    name: "TENCEL™ / Lyocell",
    type: "Semi-Synthetic",
    score: 22,
    co2: 2.0,
    water: 700,
    icon: "🪴",
    description: "Wood pulp in closed-loop solvent recovery; soft drape, biodegradable.",
    better: ["Linen", "Hemp"],
  },
  {
    id: 9,
    name: "Recycled Cotton",
    type: "Material",
    score: 24,
    co2: 2.1,
    water: 800,
    icon: "🧶",
    description: "Mechanically or chemically recycled from textile waste; saves water and avoids virgin farming.",
    better: ["Hemp", "Linen"],
  },
  {
    id: 10,
    name: "Recycled Nylon",
    type: "Recycled",
    score: 25,
    co2: 2.8,
    water: 180,
    icon: "♻️",
    description: "Often from fishing nets or industrial scrap; strong performance with lower impact.",
    better: ["TENCEL™"],
  },
  {
    id: 11,
    name: "Recycled Polyester (rPET)",
    type: "Recycled",
    score: 28,
    co2: 3.2,
    water: 100,
    icon: "♻️",
    description: "Made from post-consumer bottles or textile waste; much lower footprint than virgin polyester.",
    better: ["TENCEL™", "Hemp"],
  },
  {
    id: 12,
    name: "Piñatex® (Pineapple Leaf)",
    type: "Material",
    score: 28,
    co2: 2.4,
    water: 400,
    icon: "🧶",
    description: "Uses agricultural waste from pineapples; bio-based coating options exist.",
    better: ["Cork", "Vegan"],
  },
  {
    id: 13,
    name: "Bamboo (Generic)",
    type: "Semi-Synthetic",
    score: 30,
    co2: 2.5,
    water: 1200,
    icon: "🎍",
    description: "Fast-growing grass; impact depends heavily on processing (viscose vs mechanical).",
    better: ["Hemp", "Linen", "TENCEL™"],
  },
  {
    id: 14,
    name: "Modal",
    type: "Material",
    score: 32,
    co2: 2.8,
    water: 900,
    icon: "🧶",
    description: "Regenerated cellulose like viscose; often from beech; check responsible forestry.",
    better: ["TENCEL™", "Linen"],
  },
  {
    id: 15,
    name: "Organic Cotton",
    type: "Natural",
    score: 35,
    co2: 3.8,
    water: 7000,
    icon: "🌱",
    description: "No synthetic pesticides; lower water and energy than conventional cotton; look for GOTS.",
    better: ["Hemp", "Linen", "TENCEL™"],
  },
  {
    id: 16,
    name: "Natural Rubber",
    type: "Material",
    score: 35,
    co2: 2.0,
    water: 400,
    icon: "🧶",
    description: "Soles and elastic; from latex trees; deforestation risk if not responsibly sourced.",
    better: ["Recycled"],
  },
  {
    id: 17,
    name: "Organic Wool",
    type: "Material",
    score: 38,
    co2: 4.2,
    water: 160,
    icon: "🧶",
    description: "Pasture and animal welfare standards; fewer synthetic inputs than conventional wool.",
    better: ["Recycled", "Linen"],
  },
  {
    id: 18,
    name: "Bamboo Viscose",
    type: "Material",
    score: 40,
    co2: 3.5,
    water: 1400,
    icon: "🧶",
    description: "Often marketed as eco; chemically identical to rayon unless lyocell process.",
    better: ["TENCEL™", "Hemp", "Linen"],
  },
  {
    id: 19,
    name: "Recycled Cashmere",
    type: "Material",
    score: 42,
    co2: 8.0,
    water: 1200,
    icon: "🧶",
    description: "Blends of reclaimed cashmere fibres; far better than virgin cashmere.",
    better: ["Recycled", "TENCEL™"],
  },
  {
    id: 20,
    name: "Cupro / Bemberg™",
    type: "Material",
    score: 48,
    co2: 4.0,
    water: 2200,
    icon: "🧶",
    description: "Regenerated from cotton linter; silk-like hand; chemical recovery matters.",
    better: ["TENCEL™", "Silk"],
  },
  {
    id: 21,
    name: "Wool (Virgin)",
    type: "Material",
    score: 50,
    co2: 9.0,
    water: 170,
    icon: "🐑",
    description: "Durable and warm, but methane emissions and land use raise impact.",
    better: ["Recycled Wool", "Organic Wool"],
  },
  {
    id: 22,
    name: "Acetate",
    type: "Material",
    score: 50,
    co2: 4.6,
    water: 1800,
    icon: "🧶",
    description: "Cellulose-based but chemically processed; often used in linings and blends.",
    better: ["TENCEL™", "Cupro"],
  },
  {
    id: 23,
    name: "Angora (Rabbit)",
    type: "Material",
    score: 52,
    co2: 9.2,
    water: 220,
    icon: "🐇",
    description: "Soft luxury fibre with significant animal welfare concerns and moderate footprint.",
    better: ["Recycled Cashmere", "Merino"],
  },
  {
    id: 24,
    name: "Merino Wool",
    type: "Material",
    score: 55,
    co2: 10.5,
    water: 190,
    icon: "🧶",
    description: "Fine performance wool; breathable but still carries sheep-related emissions.",
    better: ["Recycled Wool", "Organic Wool"],
  },
  {
    id: 25,
    name: "Viscose / Rayon",
    type: "Material",
    score: 55,
    co2: 5.0,
    water: 2500,
    icon: "🌲",
    description: "Regenerated cellulose fibre; impact depends heavily on sourcing and chemistry.",
    better: ["TENCEL™", "Modal"],
  },
  {
    id: 26,
    name: "Alpaca Fibre",
    type: "Material",
    score: 58,
    co2: 11.0,
    water: 230,
    icon: "🧶",
    description: "Soft and warm luxury animal fibre with grazing and land-use impacts.",
    better: ["Recycled Wool", "Merino"],
  },
  {
    id: 27,
    name: "Polyurethane (PU) Coating",
    type: "Material",
    score: 58,
    co2: 6.2,
    water: 500,
    icon: "🧶",
    description: "Common coating for weather resistance and faux leather finishes; fossil-based.",
    better: ["Recycled", "Cork"],
  },
  {
    id: 28,
    name: "Mohair",
    type: "Material",
    score: 60,
    co2: 11.5,
    water: 250,
    icon: "🧶",
    description: "Goat fibre with luxury feel; animal impact and sourcing ethics matter.",
    better: ["Recycled Wool", "Organic Wool"],
  },
  {
    id: 29,
    name: "Conventional Cotton",
    type: "Material",
    score: 62,
    co2: 5.5,
    water: 10000,
    icon: "🌾",
    description: "Widely used but water intensive; fertilizer and pesticide use can be high.",
    better: ["Organic Cotton", "Hemp", "Linen"],
  },
  {
    id: 30,
    name: "Vegan Leather (PU / PVC)",
    type: "Material",
    score: 65,
    co2: 6.8,
    water: 600,
    icon: "🎭",
    description: "Animal-free, but often plastic-heavy and not very durable depending on quality.",
    better: ["Cork", "Piñatex®"],
  },
  {
    id: 31,
    name: "Down & Feather",
    type: "Material",
    score: 68,
    co2: 12.8,
    water: 300,
    icon: "🧶",
    description: "Warm insulation, but animal welfare and traceability are major considerations.",
    better: ["Recycled Fill", "Wool"],
  },
  {
    id: 32,
    name: "Silk",
    type: "Material",
    score: 70,
    co2: 11.2,
    water: 4800,
    icon: "🐛",
    description: "Luxury fibre with delicate feel; energy, mulberry cultivation, and ethics matter.",
    better: ["Cupro", "TENCEL™"],
  },
  {
    id: 33,
    name: "Nylon (Polyamide)",
    type: "Material",
    score: 72,
    co2: 8.9,
    water: 250,
    icon: "🧵",
    description: "Strong synthetic often used in activewear and hosiery; petrochemical-intensive.",
    better: ["Recycled Nylon", "TENCEL™"],
  },
  {
    id: 34,
    name: "Acrylic",
    type: "Material",
    score: 75,
    co2: 9.2,
    water: 300,
    icon: "🧶",
    description: "Wool-like synthetic with microfibre shedding and fossil-fuel dependence.",
    better: ["Recycled Wool", "Organic Wool"],
  },
  {
    id: 35,
    name: "Polar Fleece (Polyester)",
    type: "Material",
    score: 76,
    co2: 9.8,
    water: 350,
    icon: "🧶",
    description: "Warm and lightweight, but microplastic shedding can be significant.",
    better: ["Recycled Polyester", "Merino"],
  },
  {
    id: 36,
    name: "Polyester",
    type: "Material",
    score: 78,
    co2: 9.5,
    water: 250,
    icon: "🧴",
    description: "Cheap, durable, and everywhere — but fossil-based and a microplastic source.",
    better: ["Recycled Polyester", "TENCEL™"],
  },
  {
    id: 37,
    name: "Vegetable-Tanned Leather",
    type: "Material",
    score: 78,
    co2: 14.0,
    water: 17000,
    icon: "🧶",
    description: "Avoids chrome tanning, but livestock footprint still keeps impact high.",
    better: ["Cork", "Piñatex®"],
  },
  {
    id: 38,
    name: "Neoprene",
    type: "Material",
    score: 80,
    co2: 10.8,
    water: 500,
    icon: "🧶",
    description: "Synthetic rubber used in wetsuits and accessories; high fossil input.",
    better: ["Natural Rubber", "Recycled Rubber"],
  },
  {
    id: 39,
    name: "Elastane / Spandex / Lycra®",
    type: "Material",
    score: 82,
    co2: 11.0,
    water: 200,
    icon: "🧶",
    description: "Stretch fibre often blended in tiny amounts, but difficult to recycle.",
    better: ["Natural Rubber", "Recycled Blends"],
  },
  {
    id: 40,
    name: "PVC / Vinyl",
    type: "Material",
    score: 85,
    co2: 12.5,
    water: 450,
    icon: "🧶",
    description: "Plastic-heavy material with concerns around chlorine chemistry and additives.",
    better: ["Cork", "Natural Rubber"],
  },
  {
    id: 41,
    name: "Leather (Chrome Tan)",
    type: "Material",
    score: 88,
    co2: 16.0,
    water: 17500,
    icon: "🐄",
    description: "High livestock impact plus chromium tanning chemistry make this one of the heaviest options.",
    better: ["Cork", "Piñatex®"],
  },
  {
    id: 42,
    name: "Sequins / Metallic Films",
    type: "Material",
    score: 88,
    co2: 13.0,
    water: 600,
    icon: "🧶",
    description: "Usually decorative plastics with poor recyclability and short useful life.",
    better: ["Minimal trims", "Embroidery"],
  },
  {
    id: 43,
    name: "Cashmere",
    type: "Material",
    score: 95,
    co2: 18.0,
    water: 2300,
    icon: "🐐",
    description: "Luxury fibre with very high land-use and grazing pressure; one of the highest-impact materials here.",
    better: ["Recycled Cashmere", "Merino", "TENCEL™"],
  },
  {
  id: 44,
  name: "Khadi",
  type: "Natural",
  score: 18,
  co2: 1.4,
  water: 600,
  icon: "🧵",
  description: "Handspun and handwoven fabric with low industrial processing and strong local sustainability value.",
  better: []
},
{
  id: 45,
  name: "Banana Fibre",
  type: "Natural",
  score: 24,
  co2: 2.0,
  water: 500,
  icon: "🍌",
  description: "Made from agricultural waste from banana plants; biodegradable and innovative.",
  better: ["Khadi", "Hemp"]
},
{
  id: 46,
  name: "Bamboo",
  type: "Natural",
  score: 30,
  co2: 2.6,
  water: 1200,
  icon: "🎍",
  description: "Fast-growing material, but sustainability depends on how it is processed.",
  better: ["Khadi", "Hemp", "Linen"]
},
{
  id: 47,
  name: "Modal",
  type: "Semi-Synthetic",
  score: 32,
  co2: 2.8,
  water: 900,
  icon: "🧶",
  description: "Soft regenerated cellulose fibre, usually more sustainable than conventional viscose.",
  better: ["TENCEL™", "Khadi"]
},
{
  id: 48,
  name: "Viscose / Rayon",
  type: "Semi-Synthetic",
  score: 55,
  co2: 5.0,
  water: 2500,
  icon: "🌲",
  description: "Plant-based but chemically processed; impact depends on sourcing and manufacturing.",
  better: ["Modal", "TENCEL™"]
},
{
  id: 49,
  name: "Organic Silk",
  type: "Natural",
  score: 48,
  co2: 7.0,
  water: 3000,
  icon: "🪷",
  description: "A more responsible variation of silk with improved farming and processing practices.",
  better: ["Khadi", "TENCEL™"]
},
{
  id: 50,
  name: "Recycled Denim",
  type: "Recycled",
  score: 26,
  co2: 2.3,
  water: 700,
  icon: "👖",
  description: "Reused cotton denim that reduces water use and textile waste compared to virgin denim.",
  better: ["Khadi", "Hemp"]
}
];

const getImpactLevel = (score) => {
  if (score <= 34) return "Low Impact";
  if (score <= 65) return "Medium Impact";
  return "High Impact";
};

const getImpactClass = (score) => {
  if (score <= 34) return "low";
  if (score <= 65) return "medium";
  return "high";
};

function MaterialGuide() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("impact");

  const filteredMaterials = useMemo(() => {
    const filtered = materialsData.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    const sorted = [...filtered];

    if (sortBy === "impact") {
      sorted.sort((a, b) => a.score - b.score);
    } else if (sortBy === "co2") {
      sorted.sort((a, b) => a.co2 - b.co2);
    } else if (sortBy === "water") {
      sorted.sort((a, b) => a.water - b.water);
    } else if (sortBy === "az") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    return sorted;
  }, [search, sortBy]);

  const rankingList = [...materialsData].sort((a, b) => a.score - b.score);

  return (
    <div className="materials-page">
      <section className="materials-hero">
        <div className="materials-badge">📋 MATERIALS LIBRARY</div>
        <h1 className="materials-title">
          Know your <span>fabrics</span> <br />
          inside and out
        </h1>
        <p className="materials-subtext">
          Compare 18+ materials across carbon footprint, water usage, and
          toxicity. Find better alternatives instantly.
        </p>
      </section>

      <section className="materials-controls">
        <div className="search-box">
          <span>🔎</span>
          <input
            type="text"
            placeholder="Search materials..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="sort-buttons">
          <button
            className={sortBy === "impact" ? "sort-btn active-sort" : "sort-btn"}
            onClick={() => setSortBy("impact")}
          >
            Sort: Impact ↑
          </button>
          <button
            className={sortBy === "co2" ? "sort-btn active-sort" : "sort-btn"}
            onClick={() => setSortBy("co2")}
          >
            CO₂
          </button>
          <button
            className={sortBy === "water" ? "sort-btn active-sort" : "sort-btn"}
            onClick={() => setSortBy("water")}
          >
            Water
          </button>
          <button
            className={sortBy === "az" ? "sort-btn active-sort" : "sort-btn"}
            onClick={() => setSortBy("az")}
          >
            A–Z
          </button>
        </div>
      </section>

      <section className="materials-layout">
        <aside className="rankings-card">
          <h3>🏆 Impact Rankings</h3>

          <div className="rankings-list">
            {rankingList.map((item, index) => (
              <div key={item.id} className="ranking-row">
                <span className="ranking-index">{index + 1}</span>
                <span className="ranking-name">
                  {item.icon} {item.name}
                </span>
                <span className={`ranking-score ${getImpactClass(item.score)}`}>
                  {item.score}
                </span>
              </div>
            ))}
          </div>
        </aside>

        <div className="materials-grid">
          {filteredMaterials.map((item) => (
            <div key={item.id} className="material-card">
              <div className="material-card-top">
                <div className="material-icon-box">{item.icon}</div>

                <div className="material-heading">
                  <h3>{item.name}</h3>
                  <p>
                    {item.type.toUpperCase()} ·{" "}
                    <span className={`impact-text ${getImpactClass(item.score)}`}>
                      {getImpactLevel(item.score).toUpperCase()}
                    </span>
                  </p>
                </div>

                <div className={`material-score ${getImpactClass(item.score)}`}>
                  {item.score}
                </div>
              </div>

              <p className="material-description">{item.description}</p>

              <div className="material-metrics">
                <div className="metric-box">
                  <small>◌ CO₂ (KG/KG)</small>
                  <strong>{item.co2}</strong>
                </div>
                <div className="metric-box">
                  <small>💧 WATER (L/KG)</small>
                  <strong>{item.water.toLocaleString()}</strong>
                </div>
              </div>

              <div className="impact-bar">
                <div
                  className={`impact-bar-fill ${getImpactClass(item.score)}`}
                  style={{ width: `${Math.min(item.score, 100)}%` }}
                ></div>
              </div>

              <div className="material-footer">
                {item.better.length > 0 ? (
                  <>
                    <span className="better-label">Better:</span>
                    <div className="better-tags">
                      {item.better.map((tag) => (
                        <span key={tag} className="better-tag">
                          → {tag}
                        </span>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="best-choice">🏆 One of the best choices!</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MaterialGuide;