import { useParams } from "react-router-dom";
import FooterContact from "../components/FooterContact";
import { productSections } from "../data/productSections";
import { productDetails } from "../data/productDetails";
import { useState, useRef, useEffect } from "react";

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

    // Collapsible state
    const [openSpec, setOpenSpec] = useState(true);
    const [openDesc, setOpenDesc] = useState(false);
    const [openBenefits, setOpenBenefits] = useState(false);
    const [openChipsBlocks, setOpenChipsBlocks] = useState(false);

    const thumbnailsRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);

    // Helper to scroll thumbnails
    const scrollThumbnails = (dir) => {
        const el = thumbnailsRef.current;
        if (!el) return;
        const scrollAmount = 80; // px per click
        if (dir === "left") {
            el.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
            el.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    // Check if arrows should be shown (thumbnails overflow)
    const updateArrows = () => {
        const el = thumbnailsRef.current;
        if (!el) return;
        setShowLeftArrow(el.scrollLeft > 0);
        setShowRightArrow(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
    };

    // Attach scroll/resize listeners
    useEffect(() => {
        updateArrows();
        const el = thumbnailsRef.current;
        if (!el) return;
        el.addEventListener("scroll", updateArrows);
        window.addEventListener("resize", updateArrows);
        return () => {
            el.removeEventListener("scroll", updateArrows);
            window.removeEventListener("resize", updateArrows);
        };
    }, [product?.images?.length]);

    if (!section || !product) {
        return <div style={{ padding: 40 }}>Product not found.</div>;
    }

    // Use details from JSON if available, else fallback
    const specification = detailsData?.specification || [];
    const description = detailsData?.description || ``;
    const benefits = detailsData?.benefits || [];
    const chipsBlocks = detailsData?.chips_blocks || null;
    const brochure = detailsData?.brochure || "#";
    const video = detailsData?.video || "#";

    // Example values, you can fetch from detailsData if available
    const price = detailsData?.price || "₹ 26/kg";
    const minOrder = detailsData?.minOrder || "5000 Kg";
    const whatsappNumber = "9445676371";
    const whatsappMsg = `Hi, I'm interested in ${product.name} (${section.title})`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

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
                    className="product-details-gallery sticky-gallery"
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
                    {/* Thumbnails with arrows and scroll */}
                    <div style={{ position: "relative", width: "100%" }}>
                        {/* Left Arrow */}
                        {showLeftArrow && (
                            <button
                                type="button"
                                aria-label="Scroll thumbnails left"
                                onClick={() => scrollThumbnails("left")}
                                style={{
                                    position: "absolute",
                                    left: -18,
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    zIndex: 2,
                                    background: "#fff",
                                    border: "1px solid #ccc",
                                    borderRadius: "50%",
                                    width: 32,
                                    height: 32,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                                    cursor: "pointer",
                                    opacity: 0.85,
                                }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24">
                                    <polyline points="15 18 9 12 15 6" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        )}
                        <div
                            className="product-thumbnails"
                            ref={thumbnailsRef}
                            style={{
                                display: "flex",
                                gap: 12,
                                marginBottom: 12,
                                overflowX: "auto",
                                scrollBehavior: "smooth",
                                padding: "2px 0",
                                scrollbarWidth: "none"
                            }}
                            tabIndex={0}
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
                        {/* Right Arrow */}
                        {showRightArrow && (
                            <button
                                type="button"
                                aria-label="Scroll thumbnails right"
                                onClick={() => scrollThumbnails("right")}
                                style={{
                                    position: "absolute",
                                    right: -18,
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    zIndex: 2,
                                    background: "#fff",
                                    border: "1px solid #ccc",
                                    borderRadius: "50%",
                                    width: 32,
                                    height: 32,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                                    cursor: "pointer",
                                    opacity: 0.85,
                                }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24">
                                    <polyline points="9 6 15 12 9 18" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        )}
                    </div>
                </div>
                {/* Right: Info */}
                <div style={{ flex: 1 }} className="product-details-info">
                    {/* Basic Info */}
                    <h2 style={{ fontWeight: 700, fontSize: "1.5rem", marginBottom: 8 }}>
                        {product.name} {section.title ? `- ${section.title}` : ""}
                    </h2>
                    {/* Price, Get Latest Price, MOQ */}
                    <div style={{ fontSize: "1.18rem", marginBottom: 4, display: "flex", alignItems: "center", gap: 12 }}>
                        {/* <span style={{ fontWeight: 500 }}>{price}</span> */}
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: "#009688",
                                fontWeight: 600,
                                fontSize: "1.05rem",
                                textDecoration: "underline",
                                cursor: "pointer"
                            }}
                        >
                            Get Latest Price
                        </a>
                    </div>
                    <div style={{ fontSize: "1.05rem", color: "#222", marginBottom: 8 }}>
                        <span style={{ fontWeight: 600 }}>Minimum Order Quantity:</span>{" "}
                        <span style={{ fontWeight: 700 }}>{minOrder}</span>
                    </div>
                    <div style={{ display: "flex", gap: 16, marginBottom: 12 }}>
                        <a href={brochure} target="_blank" rel="noopener noreferrer" style={{ border: "none", background: "none", color: "#1976d2", fontWeight: 500, cursor: "pointer" }}>Product Brochure</a>
                        <a href={video} target="_blank" rel="noopener noreferrer" style={{ border: "none", background: "none", color: "#1976d2", fontWeight: 500, cursor: "pointer" }}>Watch Video</a>
                    </div>
                    {/* Collapsible Specification */}
                    {specification.length > 0 && (
                        <div className="collapsible-section">
                            <button
                                onClick={() => setOpenSpec((v) => !v)}
                                className="collapsible-header"
                                aria-expanded={openSpec}
                            >
                                <span>Specification</span>
                                <span
                                    className="chevron"
                                    style={{
                                        transform: openSpec ? "rotate(180deg)" : "rotate(0deg)"
                                    }}
                                >
                                    <svg width="28" height="28" viewBox="0 0 24 24" style={{ display: "block" }}>
                                        <polyline points="6 9 12 15 18 9" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>
                            </button>
                            {openSpec && (
                                <div className="collapsible-content">
                                    <table style={{ width: "100%", borderCollapse: "collapse", margin: "0 0 16px 0" }}>
                                        <tbody>
                                            {specification.map((row) => (
                                                <tr key={row.label}>
                                                    <td style={{ border: "1px solid #eee", padding: "6px 12px", fontWeight: 500, background: "#fafbfc", width: 180 }}>{row.label}</td>
                                                    <td style={{ border: "1px solid #eee", padding: "6px 12px" }}>{row.value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}
                    {/* Collapsible Description */}
                    {description && description.trim() && (
                        <div className="collapsible-section">
                            <button
                                onClick={() => setOpenDesc((v) => !v)}
                                className="collapsible-header"
                                aria-expanded={openDesc}
                            >
                                <span>Description</span>
                                <span
                                    className="chevron"
                                    style={{
                                        transform: openDesc ? "rotate(180deg)" : "rotate(0deg)"
                                    }}
                                >
                                    <svg width="28" height="28" viewBox="0 0 24 24" style={{ display: "block" }}>
                                        <polyline points="6 9 12 15 18 9" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>
                            </button>
                            {openDesc && (
                                <div className="collapsible-content">
                                    <div dangerouslySetInnerHTML={{ __html: description }} />
                                </div>
                            )}
                        </div>
                    )}
                    {/* Collapsible Chips Blocks */}
                    {chipsBlocks && (chipsBlocks.text || (chipsBlocks.table && chipsBlocks.table.length > 0)) && (
                        <div className="collapsible-section">
                            <button
                                onClick={() => setOpenChipsBlocks((v) => !v)}
                                className="collapsible-header"
                                aria-expanded={openChipsBlocks}
                            >
                                <span>Coco Husk Chips Blocks</span>
                                <span
                                    className="chevron"
                                    style={{
                                        transform: openChipsBlocks ? "rotate(180deg)" : "rotate(0deg)"
                                    }}
                                >
                                    <svg width="28" height="28" viewBox="0 0 24 24" style={{ display: "block" }}>
                                        <polyline points="6 9 12 15 18 9" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>
                            </button>
                            {openChipsBlocks && (
                                <div className="collapsible-content">
                                    {chipsBlocks.text && (
                                        <div style={{ marginBottom: 18 }} dangerouslySetInnerHTML={{ __html: chipsBlocks.text }} />
                                    )}
                                    {chipsBlocks.table && chipsBlocks.table.length > 0 && (
                                        <div style={{ overflowX: "auto" }}>
                                            <table>
                                                <thead>
                                                    <tr style={{ background: "rgb(8, 108, 92)" }}>
                                                        <th style={{ color: "#fff", padding: "10px 8px", border: "1px solid #388e3c" }}>Product Code</th>
                                                        <th style={{ color: "#fff", padding: "10px 8px", border: "1px solid #388e3c" }}>Product Name</th>
                                                        <th style={{ color: "#fff", padding: "10px 8px", border: "1px solid #388e3c" }}>Block Size(cm) (±5%)</th>
                                                        <th style={{ color: "#fff", padding: "10px 8px", border: "1px solid #388e3c" }}>Particle Size(mm) (±5%)</th>
                                                        <th style={{ color: "#fff", padding: "10px 8px", border: "1px solid #388e3c" }}>Mixture</th>
                                                        <th style={{ color: "#fff", padding: "10px 8px", border: "1px solid #388e3c" }}>Approx Expansion Volume</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {chipsBlocks.table.map((row, idx) => (
                                                        <tr key={idx}>
                                                            <td style={{ border: "1px solid #e0e0e0", padding: "10px 8px"}}>{row.product_code}</td>
                                                            <td style={{ border: "1px solid #e0e0e0", padding: "10px 8px", color: "#888", fontWeight: 600 }}>{row.product_name}</td>
                                                            <td style={{ border: "1px solid #e0e0e0", padding: "10px 8px"}}>{row.size}</td>
                                                            <td style={{ border: "1px solid #e0e0e0", padding: "10px 8px"}}>{row.particle_size}</td>
                                                            <td style={{ border: "1px solid #e0e0e0", padding: "10px 8px"}}>{row.mixture}</td>
                                                            <td style={{ border: "1px solid #e0e0e0", padding: "10px 8px"}}>{row.expansion_volume}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                    {/* Collapsible Benefits */}
                    {benefits && Array.isArray(benefits) && benefits.length > 0 && (
                        <div className="collapsible-section">
                            <button
                                onClick={() => setOpenBenefits((v) => !v)}
                                className="collapsible-header"
                                aria-expanded={openBenefits}
                            >
                                <span>Benefits</span>
                                <span
                                    className="chevron"
                                    style={{
                                        transform: openBenefits ? "rotate(180deg)" : "rotate(0deg)"
                                    }}
                                >
                                    <svg width="28" height="28" viewBox="0 0 24 24" style={{ display: "block" }}>
                                        <polyline points="6 9 12 15 18 9" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>
                            </button>
                            {openBenefits && (
                                <div className="collapsible-content">
                                    <ul style={{ margin: 0, paddingLeft: 22 }}>
                                        {benefits.map((b, i) => (
                                            <li key={i} style={{ marginBottom: 6 }}>{b}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                    <div style={{ marginTop: 18, fontSize: "1.08rem" }}>
                        Interested in this product?{" "}
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: "#009688",
                                fontWeight: 600,
                                textDecoration: "underline",
                                marginLeft: 2,
                                cursor: "pointer",
                            }}
                        >
                            Get Best Quote
                        </a>
                    </div>
                    {/* Yes, I am interested button */}
                    <div style={{ marginTop: 28, display: "flex", justifyContent: "flex-end" }}>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                background: "#009688",
                                color: "#fff",
                                fontWeight: 700,
                                fontSize: "1.13rem",
                                border: "none",
                                borderRadius: 7,
                                padding: "0.85rem 2.2rem",
                                boxShadow: "0 2px 8px rgba(0,150,136,0.08)",
                                cursor: "pointer",
                                textDecoration: "none",
                                transition: "background 0.18s"
                            }}
                            className="yes-interested-btn"
                        >
                            Yes, I am interested!
                        </a>
                    </div>
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
                        position: static !important;
                        top: unset !important;
                        z-index: unset !important;
                    }
                    .sticky-gallery {
                        position: static !important;
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
                .collapsible-section {
                    border-top: 1.5px solid #e0e0e0;
                    margin-top: 18px;
                    margin-bottom: 0;
                }
                .collapsible-header {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: none;
                    border: none;
                    font-size: 1.2rem;
                    font-weight: 600;
                    color: #181818;
                    padding: 18px 0 12px 0;
                    margin: 0;
                    cursor: pointer;
                    transition: background 0.15s;
                }
                .collapsible-header:hover {
                    background: RGB(248, 248, 250);
                    background: radial-gradient(circle, rgba(248, 248, 250, 0.59) 0%, rgba(199, 199, 199, 0.63) 58%, rgba(199, 199, 199, 1) 85%);  
                    transform: translateY(-4px) scale(1.025);  
                }
                .collapsible-header:focus {
                    background: RGB(8,108,92);
                    background: linear-gradient(328deg, rgba(8, 108, 92, 0.8) 0%, rgba(248, 248, 250, 1) 30%, rgba(248, 248, 250, 1) 70%, rgba(8, 108, 92, 0.63) 100%);
                    transform: translateY(-4px) scale(1.025);
                }
                .chevron {
                    transition: transform 0.2s;
                    margin-left: 8px;
                    display: flex;
                    align-items: center;
                }
                .collapsible-content {
                    padding-left: 2px;
                    padding-bottom: 12px;
                }
                /* Sticky gallery for desktop */
                @media (min-width: 701px) {
                    .sticky-gallery {
                        position: sticky;
                        top: 32px;
                        z-index: 2;
                        align-self: flex-start;
                    }
                }
                .yes-interested-btn:hover, .yes-interested-btn:focus {
                    background: #00796b !important;
                    color: #fff !important;
                }
                .product-thumbnails::-webkit-scrollbar {
                    display: none;
                }
                `}
            </style>
        </>
    );
};

export default ProductDetails;
