import { useParams } from "react-router-dom";
import FooterContact from "../components/FooterContact";
import { productSections } from "../data/productSections";
import { productDetails } from "../data/productDetails";
import { useState } from "react";

const ProductDetails = () => {
    const { section: sectionParam, product: productParam } = useParams();

    // Find section and product (for images)
    const section = productSections.find(
        (s) => s.title.toLowerCase() === decodeURIComponent(sectionParam).toLowerCase()
    );
    const product = section
        ? section.products.find(
              (p) => p.name.toLowerCase() === decodeURIComponent(productParam).toLowerCase()
          )
        : null;

    // Find product details from JSON
    const detailsData = productDetails.find(
        (d) =>
            d.section.toLowerCase() === decodeURIComponent(sectionParam).toLowerCase() &&
            d.name.toLowerCase() === decodeURIComponent(productParam).toLowerCase()
    );

    const [mainImg, setMainImg] = useState(product?.images[0]);
    const [zoom, setZoom] = useState(false);
    const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });

    if (!section || !product) {
        return <div style={{ padding: 40 }}>Product not found.</div>;
    }

    // Use details from JSON if available, else fallback
    const details = detailsData?.details || [
        { label: "Type", value: "High EC dummy" },
        { label: "Packaging Size", value: "5 kg" },
        { label: "Shape", value: "Square" },
        { label: "Product Type", value: "Coir Pith" },
        { label: "Moisture Content", value: "16%" },
        { label: "Colour", value: "Brown" },
        { label: "Country of Origin", value: "Made in India" },
    ];
    const description = detailsData?.description || `
        <strong>${product.name}</strong><br />
        <b>Compressed & Expandable</b> – Expands significantly when hydrated.<br />
        <b>Excellent Water Retention</b> – Absorbs and retains moisture.<br />
        <b>Aeration & Drainage</b> – Maintains proper air circulation.<br />
        <b>Eco-Friendly & Sustainable</b> – 100% natural and biodegradable.
    `;
    const price = detailsData?.price || "₹ 26/kg";
    const minOrder = detailsData?.minOrder || "5000 Kg";
    const brochure = detailsData?.brochure || "#";
    const video = detailsData?.video || "#";

    return (
        <>
            <div
                style={{
                    maxWidth: 1100,
                    margin: "2rem auto",
                    background: "#fff",
                    borderRadius: 8,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                    padding: 24,
                    display: "flex",
                    gap: 32,
                    flexDirection: "row"
                }}
                className="product-details-main"
            >
                {/* Left: Image gallery */}
                <div
                    style={{
                        minWidth: 320,
                        maxWidth: 400,
                        flex: "0 0 380px"
                    }}
                    className="product-details-gallery"
                >
                    <div
                        style={{
                            position: "relative",
                            width: "100%",
                            height: 320,
                            overflow: "hidden",
                            borderRadius: 8,
                            marginBottom: 16,
                            background: "#f7f7f7",
                            cursor: zoom ? "zoom-in" : "pointer"
                        }}
                        onMouseEnter={() => setZoom(true)}
                        onMouseLeave={() => setZoom(false)}
                        onMouseMove={e => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            setZoomPos({
                                x: ((e.clientX - rect.left) / rect.width) * 100,
                                y: ((e.clientY - rect.top) / rect.height) * 100,
                            });
                        }}
                        // Mobile: disable zoom, allow swipe to change image
                        onTouchStart={() => setZoom(false)}
                    >
                        <img
                            src={mainImg}
                            alt={product.name}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                                borderRadius: 8,
                                transition: "transform 0.2s",
                                ...(zoom && window.innerWidth > 700
                                    ? {
                                        transform: `scale(2)`,
                                        transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`
                                    }
                                    : {})
                            }}
                        />
                    </div>
                    {/* Thumbnails */}
                    <div
                        className="product-thumbnails"
                        style={{
                            display: "flex",
                            gap: 12,
                            marginBottom: 12,
                            overflowX: "auto"
                        }}
                    >
                        {product.images.map((img, idx) => (
                            <img
                                key={img}
                                src={img}
                                alt=""
                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 4,
                                    objectFit: "cover",
                                    border: mainImg === img ? "2px solid #009688" : "1px solid #eee",
                                    cursor: "pointer",
                                    background: "#fafafa",
                                    flex: "0 0 auto"
                                }}
                                onClick={() => setMainImg(img)}
                            />
                        ))}
                    </div>
                    <button style={{ marginTop: 8, border: "1.5px solid #009688", color: "#009688", background: "#fff", borderRadius: 20, padding: "0.5rem 1.2rem", fontWeight: 600, cursor: "pointer" }}>
                        Get More Photos
                    </button>
                </div>
                {/* Right: Info */}
                <div style={{ flex: 1 }} className="product-details-info">
                    <h2 style={{ fontWeight: 700, fontSize: "1.5rem", marginBottom: 8 }}>
                        {product.name} {section.title ? `- ${section.title}` : ""}
                    </h2>
                    <div style={{ fontSize: "1.2rem", color: "#222", marginBottom: 8 }}>
                        {price}
                        <a href="#" style={{ color: "#1976d2", fontWeight: 500, marginLeft: 8 }}>Get Latest Price</a>
                    </div>
                    <div style={{ fontWeight: 600, marginBottom: 8 }}>
                        Minimum Order Quantity: <span style={{ fontWeight: 700 }}>{minOrder}</span>
                    </div>
                    <div style={{ display: "flex", gap: 16, marginBottom: 12 }}>
                        <a href={brochure} style={{ border: "none", background: "none", color: "#1976d2", fontWeight: 500, cursor: "pointer" }}>Product Brochure</a>
                        <a href={video} style={{ border: "none", background: "none", color: "#1976d2", fontWeight: 500, cursor: "pointer" }}>Watch Video</a>
                    </div>
                    {/* Details Table */}
                    <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 16 }}>
                        <tbody>
                            {details.map((row) => (
                                <tr key={row.label}>
                                    <td style={{ border: "1px solid #eee", padding: "6px 12px", fontWeight: 500, background: "#fafbfc", width: 180 }}>{row.label}</td>
                                    <td style={{ border: "1px solid #eee", padding: "6px 12px" }}>{row.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Description */}
                    <div style={{ marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: description }} />
                    {/* CTA */}
                    <div style={{ marginBottom: 16 }}>
                        <span style={{ fontWeight: 500 }}>Interested in this product?</span>
                        <a href="#" style={{ marginLeft: 8, color: "#009688", fontWeight: 600, textDecoration: "underline" }}>Get Best Quote</a>
                    </div>
                    <button style={{ background: "#009688", color: "#fff", border: "none", borderRadius: 6, padding: "0.9rem 2.2rem", fontWeight: 600, fontSize: "1.1rem", cursor: "pointer" }}>
                        Yes, I am interested!
                    </button>
                </div>
            </div>
            <FooterContact />
            <style>
                {`
                @media (max-width: 700px) {
                    .product-details-main {
                        flex-direction: column !important;
                        padding: 10px !important;
                        gap: 18px !important;
                        max-width: 98vw !important;
                    }
                    .product-details-gallery {
                        min-width: 0 !important;
                        max-width: 100% !important;
                        flex: none !important;
                        margin-bottom: 1.5rem !important;
                    }
                    .product-details-gallery > div:first-child {
                        height: 220px !important;
                    }
                    .product-details-gallery img {
                        width: 100% !important;
                        max-width: 100% !important;
                        height: auto !important;
                    }
                    .product-thumbnails {
                        gap: 8px !important;
                        margin-bottom: 10px !important;
                        overflow-x: auto !important;
                        padding-bottom: 4px;
                    }
                    .product-thumbnails img {
                        width: 48px !important;
                        height: 48px !important;
                    }
                    .product-details-info {
                        padding: 0 !important;
                    }
                    .product-details-info h2 {
                        font-size: 1.15rem !important;
                    }
                    .product-details-info table {
                        font-size: 0.98rem !important;
                    }
                    .product-details-info button,
                    .product-details-gallery button {
                        width: 100% !important;
                        font-size: 1rem !important;
                        margin-top: 10px !important;
                        padding: 0.7rem 0 !important;
                    }
                }
                `}
            </style>
        </>
    );
};

export default ProductDetails;
