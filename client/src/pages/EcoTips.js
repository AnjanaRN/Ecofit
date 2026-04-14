import { useState } from "react";
import "./EcoTips.css";

const tipCategories = {
  shopping: [
    {
      id: "01",
      icon: "♻️",
      title: "Buy Second-Hand First",
      text: "Thrifting is the single most impactful change you can make. Buying a used item creates no new production demand and keeps clothes in use longer.",
      badge: "Best first step",
    },
    {
      id: "02",
      icon: "🔎",
      title: "Check Fibre Composition",
      text: "Always read the label. Aim for single-material garments like 100% cotton or 100% linen because they are easier to recycle and usually simpler to understand.",
      badge: "Read the label",
    },
    {
      id: "03",
      icon: "🌿",
      title: "Choose Certified Organic",
      text: "Look for trusted standards like GOTS when buying cotton. Better certifications often signal lower pesticide use and stronger environmental practices.",
      badge: "Look for GOTS",
    },
    {
      id: "04",
      icon: "📦",
      title: "Avoid Fast Fashion Hauls",
      text: "Instead of buying many trendy pieces at once, follow a cost-per-wear mindset and invest in fewer items you will actually keep using.",
      badge: "Reduces waste",
    },
    {
      id: "05",
      icon: "📍",
      title: "Buy Local When Possible",
      text: "Locally made clothing can reduce transport emissions and also support local designers, makers, and fairer supply chains.",
      badge: "Lower transport CO₂",
    },
    {
      id: "06",
      icon: "🧵",
      title: "Learn Basic Repairs",
      text: "A loose button or small tear should not end a garment’s life. Simple repair skills can extend use and reduce replacement buying.",
      badge: "Longer garment life",
    },
    {
      id: "07",
      icon: "🤝",
      title: "Swap & Borrow",
      text: "Swapping with friends or borrowing for special occasions helps refresh your wardrobe without buying something new.",
      badge: "Zero new resources",
    },
    {
      id: "08",
      icon: "📊",
      title: "Use EcoFit Before Buying",
      text: "Before adding a new item to your cart, compare its material and likely impact so you can choose the lower-impact option quickly.",
      badge: "Informed decisions",
    },
  ],
  washing: [
    {
      id: "01",
      icon: "🧺",
      title: "Wash Less Often",
      text: "Many clothes do not need washing after every wear. Airing them out can reduce water, energy, and fabric damage.",
      badge: "Saves water",
    },
    {
      id: "02",
      icon: "❄️",
      title: "Use Cold Wash",
      text: "Cold washes usually use much less energy than hot cycles and are gentler on most fabrics.",
      badge: "Cuts energy use",
    },
    {
      id: "03",
      icon: "🌬️",
      title: "Air Dry When You Can",
      text: "Line drying reduces electricity use and helps clothes last longer compared with frequent tumble drying.",
      badge: "Lower energy bill",
    },
    {
      id: "04",
      icon: "🧴",
      title: "Use Mild Detergent",
      text: "A smaller amount of gentle detergent is often enough. Overusing detergent wastes product and can damage fibres.",
      badge: "Gentler on fabric",
    },
  ],
  certifications: [
    {
      id: "01",
      icon: "🏷️",
      title: "Know the Meaning of GOTS",
      text: "GOTS is one of the strongest standards for organic textiles, covering both fibre production and processing.",
      badge: "Organic textile standard",
    },
    {
      id: "02",
      icon: "✅",
      title: "OEKO-TEX Focuses on Safety",
      text: "OEKO-TEX usually tells you the product has been tested for harmful substances, which is useful but different from full sustainability.",
      badge: "Chemical safety check",
    },
    {
      id: "03",
      icon: "🤝",
      title: "Fair Trade Matters Too",
      text: "A garment can be environmentally better and still raise labour concerns. Social certifications help you judge the full picture.",
      badge: "Looks beyond fabric",
    },
  ],
  brands: [
    {
      id: "01",
      icon: "🏪",
      title: "Check Transparency First",
      text: "A better brand usually shares where it manufactures, what fibres it uses, and what standards it follows.",
      badge: "Transparency matters",
    },
    {
      id: "02",
      icon: "📍",
      title: "Look for Supply Chain Info",
      text: "If a brand never explains where its clothes come from, treat big sustainability claims carefully.",
      badge: "Watch greenwashing",
    },
  ],
  pledge: [
    {
      id: "01",
      icon: "🌱",
      title: "Build a Smaller, Smarter Wardrobe",
      text: "The best sustainable wardrobe is often the one built slowly with items you actually rewear and care for.",
      badge: "Wear more, buy less",
    },
    {
      id: "02",
      icon: "🫶",
      title: "Choose Progress Over Perfection",
      text: "You do not need to replace everything at once. A few better decisions over time make a real difference.",
      badge: "Small steps count",
    },
  ],
};

function EcoTips() {
  const [activeTab, setActiveTab] = useState("shopping");

  const tabs = [
    { key: "shopping", label: "🛍️ Shopping Tips" },
    { key: "washing", label: "🧺 Washing Guide" },
    { key: "certifications", label: "🏷️ Certifications" },
    { key: "brands", label: "🏬 Brand Ratings" },
    { key: "pledge", label: "☑️ Eco Pledge" },
  ];

  const activeTips = tipCategories[activeTab];

  return (
    <div className="eco-tips-page">
      <section className="eco-tips-hero">
        <div className="eco-tips-badge">💡 ECO TIPS</div>

        <h1 className="eco-tips-title">
          Shop, wash &amp; care <br />
          <span>the green way</span>
        </h1>

        <p className="eco-tips-subtext">
          Practical, evidence-based tips to slash your fashion footprint
          without sacrificing style.
        </p>
      </section>

      <section className="eco-tips-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={activeTab === tab.key ? "tips-tab active-tab" : "tips-tab"}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </section>

      <section className="tips-grid">
        {activeTips.map((tip) => (
          <div key={tip.id} className="tip-card">
            <div className="tip-corner-shape"></div>

            <p className="tip-number">TIP {tip.id}</p>

            <div className="tip-icon">{tip.icon}</div>

            <h3>{tip.title}</h3>

            <p className="tip-text">{tip.text}</p>

            <div className="tip-badge">{tip.badge}</div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default EcoTips;