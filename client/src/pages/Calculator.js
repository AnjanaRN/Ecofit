import { useState } from "react";
import axios from "axios";
import "./Calculator.css";

function Calculator() {
  const [formData, setFormData] = useState({
    garmentName: "",
    garmentType: "Top / T-Shirt",
    primaryMaterial: "",
    secondaryMaterial: "None (Single material)",
    country: "Bangladesh",
    certification: "No Certification",
    washingFrequency: "Every 2–3 wears (moderate)",
    washTemperature: "40°C — Warm wash",
    lifespan: "1–3 years (average)"
  });

  const [result, setResult] = useState(null);

  const materialOptions = [
    "Conventional Cotton",
    "Organic Cotton",
    "Recycled Cotton",
    "Linen",
    "Hemp",
    "Khadi",
    "Bamboo",
    "Banana Fibre",
    "Jute",
    "Ramie",
    "Silk",
    "Organic Silk",
    "Polyester",
    "Recycled Polyester",
    "Nylon",
    "Recycled Nylon",
    "Elastane",
    "Acrylic",
    "Wool",
    "Organic Wool",
    "Recycled Wool",
    "Merino",
    "Cashmere",
    "Recycled Cashmere",
    "Alpaca",
    "Mohair",
    "Angora",
    "Modal",
    "Viscose",
    "Rayon",
    "TENCEL™ / Lyocell",
    "Recycled Denim"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleMaterialClick = (material) => {
    setFormData({
      ...formData,
      primaryMaterial: material
    });
  };

  const calculateImpact = () => {
    if (!formData.garmentName || !formData.primaryMaterial) {
      alert("Please enter garment name and select a primary material.");
      return;
    }

    const material = formData.primaryMaterial.toLowerCase();

    let score = 55;
    let water = 5000;
    let carbon = 6.0;
    let toxicity = "Moderate";
    let rating = "Medium Impact";

    if (
      material.includes("khadi") ||
      material.includes("hemp") ||
      material.includes("linen") ||
      material.includes("banana") ||
      material.includes("jute") ||
      material.includes("ramie")
    ) {
      score = 82;
      water = 600;
      carbon = 2.0;
      toxicity = "Low";
      rating = "Very Sustainable";
    } else if (
      material.includes("organic cotton") ||
      material.includes("bamboo") ||
      material.includes("modal") ||
      material.includes("tencel") ||
      material.includes("lyocell") ||
      material.includes("recycled denim") ||
      material.includes("recycled cotton") ||
      material.includes("recycled wool") ||
      material.includes("recycled polyester") ||
      material.includes("recycled nylon") ||
      material.includes("organic silk") ||
      material.includes("organic wool") ||
      material.includes("recycled cashmere")
    ) {
      score = 72;
      water = 1400;
      carbon = 3.2;
      toxicity = "Low";
      rating = "Better Choice";
    } else if (
      material.includes("cotton") ||
      material.includes("wool") ||
      material.includes("merino") ||
      material.includes("silk") ||
      material.includes("viscose") ||
      material.includes("rayon") ||
      material.includes("alpaca") ||
      material.includes("mohair") ||
      material.includes("angora") ||
      material.includes("cashmere")
    ) {
      score = 55;
      water = 4200;
      carbon = 5.8;
      toxicity = "Moderate";
      rating = "Medium Impact";
    } else if (
      material.includes("polyester") ||
      material.includes("acrylic") ||
      material.includes("nylon") ||
      material.includes("elastane")
    ) {
      score = 40;
      water = 3000;
      carbon = 9.0;
      toxicity = "High";
      rating = "High Impact";
    }

    setResult({
      score,
      water,
      carbon,
      toxicity,
      rating,
      garmentName: formData.garmentName,
      garmentType: formData.garmentType,
      primaryMaterial: formData.primaryMaterial
    });
  };

  const saveToWardrobe = async () => {
    if (!result) {
      alert("Please calculate impact first.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/wardrobe", {
        garmentName: formData.garmentName,
        garmentType: formData.garmentType,
        primaryMaterial: formData.primaryMaterial,
        score: result.score,
        water: result.water,
        carbon: result.carbon,
        toxicity: result.toxicity,
        rating: result.rating
      });

      console.log("Saved:", response.data);
      alert("Saved to wardrobe successfully!");
    } catch (error) {
      console.error("Save error full:", error);
      console.error("Save error response:", error.response?.data);
      alert(
        error.response?.data?.message ||
          error.message ||
          "Failed to save item."
      );
    }
  };

  return (
    <div className="calculator-page">
      <section className="calculator-hero">
        <div className="calculator-badge">🔎 IMPACT CALCULATOR</div>

        <h1 className="calculator-title">
          Assess any garment&apos;s <span>environmental footprint</span>
        </h1>

        <p className="calculator-subtext">
          Fill in the details below to get a comprehensive impact score for
          your clothing item.
        </p>
      </section>

      <section className="calculator-layout">
        <div className="calc-card form-card">
          <h2>🧵 Garment Details</h2>
          <p className="card-subtext">
            Choose your item&apos;s fabric, origin, and other factors.
          </p>

          <div className="form-group">
            <label>Garment Name</label>
            <input
              type="text"
              name="garmentName"
              value={formData.garmentName}
              onChange={handleChange}
              placeholder="e.g. Summer Dress, Wool Coat..."
            />
          </div>

          <div className="form-group">
            <label>Garment Type</label>
            <select
              name="garmentType"
              value={formData.garmentType}
              onChange={handleChange}
            >
              <option>Top / T-Shirt</option>
              <option>Shirt</option>
              <option>Jeans</option>
              <option>Dress</option>
              <option>Jacket</option>
              <option>Sweater</option>
              <option>Skirt</option>
              <option>Kurta</option>
              <option>Saree</option>
              <option>Dupatta</option>
            </select>
          </div>

          <div className="form-group">
            <label>Primary Material *</label>
            <div className="material-grid">
              {materialOptions.map((material) => (
                <button
                  key={material}
                  type="button"
                  className={
                    formData.primaryMaterial === material
                      ? "material-chip active-chip"
                      : "material-chip"
                  }
                  onClick={() => handleMaterialClick(material)}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Secondary Material (if blended)</label>
            <select
              name="secondaryMaterial"
              value={formData.secondaryMaterial}
              onChange={handleChange}
            >
              <option>None (Single material)</option>
              <option>Cotton</option>
              <option>Polyester</option>
              <option>Elastane</option>
              <option>Wool</option>
              <option>Nylon</option>
              <option>Viscose</option>
              <option>Rayon</option>
            </select>
          </div>

          <div className="form-group">
            <label>Country of Manufacture</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option>Bangladesh</option>
              <option>India</option>
              <option>China</option>
              <option>Vietnam</option>
              <option>Turkey</option>
              <option>Portugal</option>
            </select>
          </div>

          <div className="form-group">
            <label>Brand Certification</label>
            <select
              name="certification"
              value={formData.certification}
              onChange={handleChange}
            >
              <option>No Certification</option>
              <option>GOTS</option>
              <option>OEKO-TEX</option>
              <option>Fair Trade</option>
              <option>Bluesign</option>
            </select>
          </div>

          <div className="form-group">
            <label>Washing Frequency</label>
            <select
              name="washingFrequency"
              value={formData.washingFrequency}
              onChange={handleChange}
            >
              <option>Every 2–3 wears (moderate)</option>
              <option>After every wear</option>
              <option>Once a week</option>
              <option>Rarely washed</option>
            </select>
          </div>

          <div className="form-group">
            <label>Wash Temperature</label>
            <select
              name="washTemperature"
              value={formData.washTemperature}
              onChange={handleChange}
            >
              <option>40°C — Warm wash</option>
              <option>30°C — Cold wash</option>
              <option>60°C — Hot wash</option>
            </select>
          </div>

          <div className="form-group">
            <label>Expected Lifespan</label>
            <select
              name="lifespan"
              value={formData.lifespan}
              onChange={handleChange}
            >
              <option>1–3 years (average)</option>
              <option>Less than 1 year</option>
              <option>3–5 years</option>
              <option>5+ years</option>
            </select>
          </div>

          <button className="calculate-impact-btn" onClick={calculateImpact}>
            Calculate Impact
          </button>
        </div>

        <div className="calc-card result-card">
          <h2>📊 Impact Results</h2>
          <p className="card-subtext">
            Select a material and click calculate to see results.
          </p>

          {!result ? (
            <div className="empty-result">
              <div className="leaf-icon">🌿</div>
              <h3>Ready to assess</h3>
              <p>
                Fill in the garment details on the left and click
                {" "}“Calculate Impact”
              </p>
            </div>
          ) : (
            <div className="result-content">
              <div className="score-main-box">
                <p>Impact Score</p>
                <h3>{result.score}</h3>
                <span>{result.rating}</span>
              </div>

              <div className="result-info-grid">
                <div className="result-info-item">
                  <small>Garment</small>
                  <strong>{result.garmentName}</strong>
                </div>

                <div className="result-info-item">
                  <small>Type</small>
                  <strong>{result.garmentType}</strong>
                </div>

                <div className="result-info-item">
                  <small>Primary Material</small>
                  <strong>{result.primaryMaterial}</strong>
                </div>

                <div className="result-info-item">
                  <small>Water Usage</small>
                  <strong>{result.water} L</strong>
                </div>

                <div className="result-info-item">
                  <small>Carbon Footprint</small>
                  <strong>{result.carbon} kg CO₂</strong>
                </div>

                <div className="result-info-item">
                  <small>Toxicity</small>
                  <strong>{result.toxicity}</strong>
                </div>
              </div>

              <button className="save-wardrobe-btn" onClick={saveToWardrobe}>
                Save to Wardrobe
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Calculator;