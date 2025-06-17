import FooterContact from "../components/FooterContact";
import image1 from "../assets/coco_peat/image1.png";
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

const Products = () => (
    <>
        <div style={styles.page}>
            <h1 style={styles.pageTitle}>Products</h1>
            {productSections.map((section, idx) => (
                <div key={section.title} style={styles.section}>
                    <div style={styles.sectionHeader}>
                        <h2 style={styles.sectionTitle}>{section.title}</h2>
                        <button style={styles.viewMoreBtn}>View More</button>
                    </div>
                    <p style={styles.sectionDesc}>{section.description}</p>
                    <div style={styles.cardGrid}>
                        {section.products.map((prod) => (
                            <div key={prod.name} style={styles.card}>
                                <img
                                    src={prod.img}
                                    alt={prod.name}
                                    style={styles.cardImg}
                                />
                                <div style={styles.cardLabel}>{prod.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        <FooterContact />
    </>
);

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
    card: {
        background: "#f8f8fa",
        borderRadius: "8px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
        transition: "box-shadow 0.2s",
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
};

export default Products;
