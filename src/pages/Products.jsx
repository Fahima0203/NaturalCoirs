import FooterContact from "../components/FooterContact";
import { useState } from "react";
import ProductSidebar from "../components/ProductSidebar";
import { useNavigate } from "react-router-dom";
import { productSections } from "../data/productSections";

const pageTitle = "Our Products";
const pageDescription =
    "Explore our range of premium coir products, including coco peat blocks and coir yarn, sourced and manufactured with the highest quality standards. Use the search box to quickly find products by name, description, or section.";

const Products = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    // Filter logic: match in section title, section description, or product name
    const filteredSections = productSections
        .map((section) => {
            // Check if section matches search
            const sectionMatch =
                section.title.toLowerCase().includes(search.toLowerCase()) ||
                section.description.toLowerCase().includes(search.toLowerCase());

            // Filter products in section
            const filteredProducts = section.products.filter((prod) =>
                prod.name.toLowerCase().includes(search.toLowerCase())
            );

            // If section matches, show all products; else, only filtered products
            if (sectionMatch) {
                return { ...section, products: section.products };
            } else if (filteredProducts.length > 0) {
                return { ...section, products: filteredProducts };
            } else {
                return null;
            }
        })
        .filter(Boolean);

    const handleViewMore = (section) => {
        // Go to first product in section
        if (section.products && section.products.length > 0) {
            const prod = section.products[0];
            navigate(`/products/${encodeURIComponent(section.title)}/${encodeURIComponent(prod.name)}`);
        }
    };

    const handleProductClick = (section, prod) => {
        navigate(`/products/${encodeURIComponent(section.title)}/${encodeURIComponent(prod.name)}`);
    };

    return (
        <>
            <div style={styles.page}>
                <h1 style={styles.pageTitle}>{pageTitle}</h1>
                <p style={{ margin: "0 2rem 2rem 2rem", color: "#555", fontSize: "1.1rem" }}>
                    {pageDescription}
                </p>
                <div style={styles.mainRow}>
                    {/* Sidebar left */}
                    <div style={styles.sidebarCol} className="product-sidebar-col">
                        <ProductSidebar productSections={filteredSections} />
                    </div>
                    {/* Right: search above product content */}
                    <div style={styles.rightCol}>
                        <div style={styles.searchBoxWrap}>
                            <input
                                id="product-search"
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="What are you looking for?"
                                style={styles.simpleSearchBox}
                            />
                        </div>
                        <div style={styles.productsContent} className="products-content">
                            {filteredSections.length === 0 ? (
                                <div style={{ color: "#b00", fontSize: "1.1rem", margin: "2rem" }}>
                                    No products found matching your search.
                                </div>
                            ) : (
                                <>
                                    {/* Desktop/tablet view: show by category */}
                                    <div className="desktop-products-list">
                                        {filteredSections.map((section, idx) => {
                                            const sectionId = section.title
                                                ? section.title.toLowerCase().replace(/\s+/g, "-")
                                                : `section-${idx}`;
                                            return (
                                                <div key={section.title} id={sectionId} style={styles.section} className="product-section">
                                                    <div style={styles.sectionHeader} className="sectionHeader">
                                                        <h2 style={styles.sectionTitle} className="sectionTitle">{section.title}</h2>
                                                        <button
                                                            style={styles.viewMoreBtn}
                                                            className="viewMoreBtn"
                                                            onClick={() => handleViewMore(section)}
                                                        >
                                                            View More
                                                        </button>
                                                    </div>
                                                    <p style={styles.sectionDesc} className="sectionDesc">{section.description}</p>
                                                    <div style={styles.cardGridHorizontal} className="cardGridHorizontal">
                                                        {section.products.map((prod, pidx) => {
                                                            const prodId = prod.name
                                                                ? prod.name.toLowerCase().replace(/\s+/g, "-")
                                                                : `product-${pidx}`;
                                                            return (
                                                                <div
                                                                    key={prod.name}
                                                                    id={prodId}
                                                                    style={styles.card}
                                                                    className="product-card"
                                                                    onClick={() => handleProductClick(section, prod)}
                                                                    tabIndex={0}
                                                                    role="button"
                                                                >
                                                                    <img
                                                                        src={prod.images[0]}
                                                                        alt={prod.name}
                                                                        style={styles.cardImg}
                                                                        className="product-card-img"
                                                                    />
                                                                    <div style={styles.cardLabel}>{prod.name}</div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    {/* Mobile view: show one by one */}
                                    <div className="all-products-mobile-list">
                                        {filteredSections.flatMap((section, idx) => {
                                            return section.products.map((prod, pidx) => {
                                                const prodId = prod.name
                                                    ? prod.name.toLowerCase().replace(/\s+/g, "-")
                                                    : `product-${pidx}`;
                                                return (
                                                    <div
                                                        key={section.title + prod.name}
                                                        id={prodId}
                                                        className="product-card-mobile"
                                                        style={styles.cardMobile}
                                                        onClick={() => handleProductClick(section, prod)}
                                                        tabIndex={0}
                                                        role="button"
                                                    >
                                                        <img
                                                            src={prod.images[0]}
                                                            alt={prod.name}
                                                            style={styles.cardImgMobile}
                                                        />
                                                        <div style={styles.cardLabelMobile}>{prod.name}</div>
                                                        <div style={styles.sectionLabelMobile}>{section.title}</div>
                                                    </div>
                                                );
                                            });
                                        })}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <FooterContact />
            <style>
                {`
                /* Desktop/tablet: show desktop-products-list, hide mobile list */
                @media (min-width: 701px) {
                    .desktop-products-list { display: block !important; }
                    .all-products-mobile-list, .product-card-mobile { display: none !important; }
                    .product-sidebar-col {
                        position: sticky;
                        top: 32px;
                        z-index: 2;
                        align-self: flex-start;
                    }
                    .product-card:hover, .product-card:focus {
                        background: #53EDDE !important;
                        background: radial-gradient(circle, rgba(83, 237, 222, 0.8) 0%, rgba(248, 248, 250, 1) 30%, rgba(248, 248, 250, 1) 70%, rgba(83, 237, 222, 0.63) 100%) !important;
                        transform: translateY(-4px) scale(1.025);
                    }
                    .viewMoreBtn:hover, .viewMoreBtn:focus {
                        background: #53EDDE !important;
                        background: linear-gradient(328deg, rgba(83, 237, 222, 0.8) 0%, rgba(248, 248, 250, 1) 40%, rgba(248, 248, 250, 1) 60%, rgba(83, 237, 222, 0.63) 100%) !important;
                        transform: translateY(-4px) scale(1.025);           
                    }
                }
                /* Mobile: show mobile list, hide desktop grid/cards */
                @media (max-width: 700px) {
                    .desktop-products-list { display: none !important; }
                    .all-products-mobile-list {
                        display: flex !important;
                        flex-direction: column !important;
                        gap: 1.2rem !important;
                        width: 100%;
                    }
                    .product-card-mobile {
                        background: #fff;
                        border-radius: 8px;
                        box-shadow: 0 1px 4px rgba(0,0,0,0.06);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 1rem;
                        width: 100%;
                        max-width: 350px;
                        margin: 0 auto;
                    }
                    .product-card-mobile img {
                        width: 100%;
                        max-width: 180px;
                        height: 120px;
                        object-fit: cover;
                        border-radius: 6px;
                        margin-bottom: 0.8rem;
                        background: #eaeaea;
                    }
                    .product-card-mobile .product-label-mobile {
                        font-size: 1rem;
                        color: #222;
                        text-align: center;
                        margin-top: 0.5rem;
                    }
                    .product-card-mobile .section-label-mobile {
                        font-size: 0.9rem;
                        color: #2d2d8c;
                        margin-top: 0.3rem;
                        font-weight: 500;
                    }
                    .product-sidebar-col {
                        display: none !important;
                    }
                }
                `}
            </style>
        </>
    );
};

const styles = {
    page: {
        background: "#fafbfc",
        minHeight: "100vh",
        padding: "2rem 0",
    },
    pageTitle: {
        fontSize: "2rem",
        fontWeight: "bold",
        margin: "1rem 2rem",
    },
    mainRow: {
        display: "flex",
        flexDirection: "row",
        maxWidth: "1200px",
        gap: "2rem",
        alignItems: "flex-start",
        width: "100%",
        padding: "0 1rem",
    },
    sidebarCol: {
        minWidth: 260,
        maxWidth: 340,
        width: "25%",
    },
    rightCol: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
    },
    searchBoxWrap: {
        width: "100%",
        marginBottom: "0.5rem",
        display: "flex",
        justifyContent: "flex-start",
    },
    simpleSearchBox: {
        width: "100%",
        maxWidth: 900,
        padding: "0.5rem",
        borderRadius: "9px",
        border: "2px solid #9797b7",
        outline: "none",
        background: "#fff",
        color: "#444",
        boxShadow: "none",
        fontWeight: 400,
        transition: "border 0.2s",
    },
    productsContent: {
        flex: 1,
        paddingLeft: 0,
    },
    section: {
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        margin: "2rem auto",
        maxWidth: "1100px",
        padding: "2rem",
    },
    sectionHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "0.5rem",
    },
    sectionTitle: {
        color: "#2d2d8c",
        fontWeight: "bold",
        fontSize: "1.3rem",
        margin: 0,
    },
    viewMoreBtn: {
        border: "1px solid #2d2d8c",
        background: "#fff",
        color: "#2d2d8c",
        borderRadius: "4px",
        padding: "0.4rem 1rem",
        cursor: "pointer",
        fontWeight: 500,
        fontSize: "0.95rem",
    },
    sectionDesc: {
        color: "#444",
        marginBottom: "1.5rem",
        fontSize: "1rem",
    },
    cardGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "1.5rem",
    },
    cardGridHorizontal: {
        display: "flex",
        flexDirection: "row",
        gap: "1.5rem",
        overflowX: "auto",
        paddingBottom: "1rem",
        scrollbarWidth: "thin",
        scrollbarColor: "#bbb #f8f8fa",
        minWidth: 0,
    },
    card: {
        background: "#f8f8fa",
        borderRadius: "8px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
        transition: "box-shadow 0.2s",
        minWidth: 180,
        maxWidth: 220,
        flex: "0 0 auto",
    },
    cardImg: {
        width: "100%",
        maxWidth: "160px",
        height: "140px",
        objectFit: "cover",
        borderRadius: "6px",
        marginBottom: "0.8rem",
        background: "#eaeaea",
    },
    cardLabel: {
        fontSize: "1rem",
        color: "#222",
        textAlign: "center",
        marginTop: "0.5rem",
    },
    // Mobile styles for product cards
    cardMobile: {
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
        width: "100%",
        maxWidth: 350,
        margin: "0 auto",
    },
    cardImgMobile: {
        width: "100%",
        maxWidth: "180px",
        height: "120px",
        objectFit: "cover",
        borderRadius: "6px",
        marginBottom: "0.8rem",
        background: "#eaeaea",
    },
    cardLabelMobile: {
        fontSize: "1rem",
        color: "#222",
        textAlign: "center",
        marginTop: "0.5rem",
    },
    sectionLabelMobile: {
        fontSize: "0.9rem",
        color: "#2d2d8c",
        marginTop: "0.3rem",
        fontWeight: 500,
    },
};

export default Products;