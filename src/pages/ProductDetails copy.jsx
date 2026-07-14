import { useParams } from "react-router-dom";
import { productDetails } from "../data/productDetails";
import FooterContact from "../components/FooterContact";
import { useState } from "react";

const ProductDetails = () => {
  const { section: sectionParam, product: productParam } = useParams();
  const detailsData = productDetails.find(
    (d) =>
      d.section.toLowerCase() === decodeURIComponent(sectionParam).toLowerCase() &&
      d.name.toLowerCase() === decodeURIComponent(productParam).toLowerCase()
  );

  if (!detailsData) return <div style={{ padding: 40 }}>Product not found.</div>;

  // Example: dynamic layout switch
  switch (detailsData.layoutType) {
    case "cocopeat":
      return <CocoPeatLayout {...detailsData} />;
    case "growbags":
      return <GrowBagsLayout {...detailsData} />;
    default:
      return <DefaultProductLayout {...detailsData} />;
  }
};

export default ProductDetails;

// --- Example layouts below ---

function CocoPeatLayout({ images, name, highlights, description, tabs }) {
  const [tab, setTab] = useState(0);
  return (
    <div style={{ maxWidth: 1100, margin: "2rem auto", background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.07)", padding: 24 }}>
      {/* Image gallery */}
      <div style={{ display: "flex", gap: 24 }}>
        <div>
          <img src={images[0]} alt={name} style={{ width: 350, borderRadius: 8 }} />
          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            {images.map((img, i) => (
              <img key={i} src={img} loading="lazy" alt="" style={{ width: 60, height: 60, borderRadius: 4, objectFit: "cover" }} />
            ))}
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <h1 style={{ color: "#219653" }}>{name}</h1>
          <h3>Product details</h3>
          <p>{description}</p>
          <div style={{ margin: "1rem 0" }}>
            {highlights.map((h, i) => (
              <button key={i} style={{ background: "#219653", color: "#fff", border: "none", borderRadius: 6, marginRight: 8, padding: "0.5rem 1rem" }}>{h}</button>
            ))}
          </div>
          <button style={{ background: "#6d4c1b", color: "#fff", border: "none", borderRadius: 6, padding: "0.7rem 2rem", fontWeight: 600, fontSize: "1.1rem", marginTop: 16 }}>
            Order Now <span role="img" aria-label="whatsapp">🟢</span>
          </button>
        </div>
      </div>
      {/* Tabs */}
      <div style={{ marginTop: 32 }}>
        <div style={{ display: "flex", gap: 24, borderBottom: "2px solid #eee" }}>
          {tabs.map((t, i) => (
            <div
              key={t.label}
              onClick={() => setTab(i)}
              style={{
                fontWeight: tab === i ? 700 : 400,
                color: tab === i ? "#219653" : "#888",
                borderBottom: tab === i ? "2px solid #219653" : "none",
                cursor: "pointer",
                padding: "0.5rem 1rem"
              }}
            >
              {t.label}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 48, marginTop: 24 }}>
          <div style={{ flex: 1 }}>
            <ul>
              {tabs[tab].content.left?.map((item, i) => (
                <li key={i} style={{ marginBottom: 8, color: "#219653" }}>✔ {item}</li>
              ))}
            </ul>
          </div>
          <div style={{ flex: 1 }}>
            <ul>
              {tabs[tab].content.right?.map((item, i) => (
                <li key={i} style={{ marginBottom: 8, color: "#219653" }}>✔ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <FooterContact />
    </div>
  );
}

function GrowBagsLayout({ images, name, description, table, notes, tabs }) {
  const [tab, setTab] = useState(0);
  return (
    <div style={{ maxWidth: 1100, margin: "2rem auto", background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.07)", padding: 24 }}>
      {/* Image gallery */}
      <div style={{ display: "flex", gap: 24 }}>
        <div>
          <img src={images[0]} alt={name} style={{ width: 350, borderRadius: 8 }} />
          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            {images.map((img, i) => (
              <img key={i} src={img} loading="lazy" alt="" style={{ width: 60, height: 60, borderRadius: 4, objectFit: "cover" }} />
            ))}
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <h1 style={{ color: "#219653" }}>{name}</h1>
          <h3>Product details</h3>
          <p>{description}</p>
          {/* Table */}
          <table style={{ width: "100%", margin: "1rem 0", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {table.headers.map((h, i) => (
                  <th key={i} style={{ background: "#219653", color: "#fff", padding: 8 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ border: "1px solid #eee", padding: 8 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <button style={{ background: "#6d4c1b", color: "#fff", border: "none", borderRadius: 6, padding: "0.7rem 2rem", fontWeight: 600, fontSize: "1.1rem", marginTop: 16 }}>
            Order Now <span role="img" aria-label="whatsapp">🟢</span>
          </button>
        </div>
      </div>
      {/* Tabs */}
      <div style={{ marginTop: 32 }}>
        <div style={{ display: "flex", gap: 24, borderBottom: "2px solid #eee" }}>
          {tabs.map((t, i) => (
            <div
              key={t.label}
              onClick={() => setTab(i)}
              style={{
                fontWeight: tab === i ? 700 : 400,
                color: tab === i ? "#219653" : "#888",
                borderBottom: tab === i ? "2px solid #219653" : "none",
                cursor: "pointer",
                padding: "0.5rem 1rem"
              }}
            >
              {t.label}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 24 }}>
          <ul>
            {tabs[tab].content.map((item, i) => (
              <li key={i} style={{ marginBottom: 8 }}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <FooterContact />
    </div>
  );
}

function DefaultProductLayout({ images, name, description }) {
  return (
    <div style={{ maxWidth: 900, margin: "2rem auto", background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.07)", padding: 24 }}>
      <img src={images?.[0]} alt={name} style={{ width: 350, borderRadius: 8 }} />
      <h1>{name}</h1>
      <p>{description}</p>
      <FooterContact />
    </div>
  );
}