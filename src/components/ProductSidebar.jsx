import { useState } from "react";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

// Accept productSections as a prop for reusability
export default function ProductSidebar({ productSections }) {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (id) => {
        setOpenSections((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const scrollToSection = (sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div
            className="product-sidebar"
            style={{
                minWidth: "270px",
                borderRight: "1px solid #eee",
                padding: 16,
                width: "270px",
                boxSizing: "border-box",
            }}
        >
            {productSections.map((section, idx) => {
                // Generate a section id based on title for scrolling
                const sectionId = section.title
                    ? section.title.toLowerCase().replace(/\s+/g, "-")
                    : `section-${idx}`;
                return (
                    <div key={sectionId}>
                        <div
                            style={{ display: "flex", alignItems: "center", cursor: "pointer", fontWeight: 600, padding: "8px 0" }}
                            onClick={() => {
                                toggleSection(sectionId);
                                scrollToSection(sectionId);
                            }}
                        >
                            <span>{section.title}</span>
                            {openSections[sectionId] ? <ExpandLess /> : <ExpandMore />}
                        </div>
                        {openSections[sectionId] && (
                            <ul style={{ margin: 0, paddingLeft: 20 }}>
                                {section.products.map((product, pidx) => {
                                    // Generate product id for scrolling
                                    const prodId = product.name
                                        ? product.name.toLowerCase().replace(/\s+/g, "-")
                                        : `product-${pidx}`;
                                    return (
                                        <li
                                            key={prodId}
                                            style={{ cursor: "pointer", padding: "4px 0" }}
                                            onClick={() => scrollToSection(prodId)}
                                        >
                                            {product.name}
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                );
            })}
            <style>
                {`
                @media (max-width: 900px) {
                    .product-sidebar {
                        width: 100% !important;
                        min-width: 0 !important;
                        border-right: none !important;
                        border-bottom: 1px solid #eee !important;
                        margin-bottom: 1.5rem;
                        padding: 10px !important;
                    }
                }
                `}
            </style>
        </div>
    );
}
