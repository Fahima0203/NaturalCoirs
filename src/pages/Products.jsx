import FooterContact from "../components/FooterContact";
import image1 from "../assets/coco_peat/image1.png";
import React, { useState } from "react";
import ProductSidebar from "../components/ProductSidebar";
// Import other images as needed
// import image2 from "../assets/coco_peat/image2.png";
// import image3 from "../assets/coco_peat/image3.png";
// import image4 from "../assets/coco_peat/image4.png";
// import image5 from "../assets/coco_peat/image5.png";
// import image6 from "../assets/coir_yarn/image1.jpg";
// import image7 from "../assets/coir_yarn/image2.jpg";
// import image8 from "../assets/coir_yarn/image3.jpg";

const productSections = [
    {
        title: "Coir Pith Block",
        description:
            "Pioneers in the industry, we offer 5 Kg High Ec Cocopeat Block, 5kg Low EC Coir Pith Block, Coco Peat 650 Grams Low EC, Coco Peat 650 Grams High EC and High ec Coco Peat 5kg block (Unseived) from India.",
        products: [
            {
                name: "5 Kg High Ec Cocopeat Block",
                img: image1,
            },
            {
                name: "5kg Low EC Coir Pith Block",
                img: "../assets/coco_peat/image2.png",
            },
            {
                name: "Coco Peat 650 Grams Low EC",
                img: "../assets/coco_peat/image3.png",
            },
            {
                name: "Coco Peat 650 Grams High EC",
                img: "../assets/coco_peat/image4.png",
            },
            {
                name: "High ec Coco Peat 5kg block (Unseived)",
                img: "../assets/coco_peat/image5.png",
            },
            {
                name: "High ec Coco Peat 5kg block (Unseived)",
                img: "../assets/coco_peat/image5.png",
            },
        ],
    },
    {
        title: "Coir Yarn",
        description:
            "Prominent & Leading Wholesaler from Salem, we offer 6Mm 30Inches Coir Rope (Rollmudi), 5Mm 48 Inches CoirYarn (Magadan), 2Ply 6Mm Coir Yarn (Rollmudi) and 2 Ply Golden Brown Coir Yarn.",
        products: [
            {
                name: "6Mm 30Inches Coir Rope (Rollmudi)",
                img: "../assets/coir_yarn/image1.jpg",
            },
            {
                name: "5Mm 48 Inches CoirYarn (Magadan)",
                img: "../assets/coir_yarn/image2.jpg",
            },
            {
                name: "2Ply 6Mm Coir Yarn (Rollmudi)",
                img: "../assets/coir_yarn/image3.jpg",
            },
            {
                name: "2 Ply Golden Brown Coir Yarn",
                img: "../assets/coir_yarn/image4.jpg",
            },
        ],
    },
];

const pageTitle = "Our Products";
const pageDescription =
    "Explore our range of premium coir products, including coco peat blocks and coir yarn, sourced and manufactured with the highest quality standards. Use the search box to quickly find products by name, description, or section.";

const Products = () => {
    const [search, setSearch] = useState("");

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

    return (
        <>
            <div style={styles.page}>
                <h1 style={styles.pageTitle}>{pageTitle}</h1>
                <p style={{ margin: "0 2rem 2rem 2rem", color: "#555", fontSize: "1.1rem" }}>
                    {pageDescription}
                </p>
                <div style={styles.searchBoxWrap}>
                    <div style={styles.searchBox}>
                        <label
                            htmlFor="product-search"
                            style={{
                                fontWeight: "bold",
                                color: "#2d2d8c",
                                fontSize: "1.1rem",
                                display: "block",
                                marginBottom: "0.7rem",
                            }}
                        >
                            Search Products
                        </label>
                        <input
                            id="product-search"
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by name, description..."
                            style={{
                                width: "100%",
                                padding: "0.7rem",
                                borderRadius: "5px",
                                border: "1px solid #bbb",
                                fontSize: "1rem",
                            }}
                        />
                    </div>
                </div>
                <div
                    style={styles.mainContent}
                    className="product-main-content"
                >
                    <ProductSidebar productSections={filteredSections} />
                    <div
                        style={styles.productsContent}
                        className="products-content"
                    >
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
                                                    <button style={styles.viewMoreBtn} className="viewMoreBtn">View More</button>
                                                </div>
                                                <p style={styles.sectionDesc} className="sectionDesc">{section.description}</p>
                                                <div style={styles.cardGridHorizontal} className="cardGridHorizontal">
                                                    {section.products.map((prod, pidx) => {
                                                        const prodId = prod.name
                                                            ? prod.name.toLowerCase().replace(/\s+/g, "-")
                                                            : `product-${pidx}`;
                                                        return (
                                                            <div key={prod.name} id={prodId} style={styles.card} className="product-card">
                                                                <img
                                                                    src={prod.img}
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
                                        const sectionId = section.title
                                            ? section.title.toLowerCase().replace(/\s+/g, "-")
                                            : `section-${idx}`;
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
                                                >
                                                    <img
                                                        src={prod.img}
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
            <FooterContact />
            <style>
                {`
                /* Desktop/tablet: show desktop-products-list, hide mobile list */
                @media (min-width: 701px) {
                    .desktop-products-list { display: block !important; }
                    .all-products-mobile-list, .product-card-mobile { display: none !important; }
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
    searchBoxWrap: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "2rem",
        padding: "0 1rem",
    },
    searchBox: {
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        padding: "1.2rem 1.5rem",
        minWidth: 260,
        width: "100%",
        maxWidth: 400,
    },
    mainContent: {
        display: "flex",
        maxWidth: "1200px",
        gap: "1.5rem",
    },
    productsContent: {
        flex: 1,
        paddingLeft: 24,
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
