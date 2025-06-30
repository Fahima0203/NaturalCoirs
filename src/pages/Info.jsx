import FooterContact from "../components/FooterContact";

const Info = () => (
    <>
        <div style={{padding: "2rem"}}>
            <section id="packaging" style={{ marginTop: "2rem" }}>
                <h2 style={{ color: "#00695c", fontWeight: 700, marginBottom: 16, fontSize: "1.45rem" }}>📦 Packaging Options with Custom Labeling</h2>
                <p>
                    We understand that packaging plays a vital role in logistics, retail, and branding. That’s why we offer flexible packaging options with custom labeling and private labeling services to help you build your brand in your market.
                </p>
                <ol style={{ margin: "1rem 0 1rem 1.5rem" }}>
                    <li><b>Individual Shrink Wrap – </b>moisture-protected and tamper-proof.</li>
                    <li><b>3/4/5 Bundle Packs with Nylon Straps – </b>compact and economical.</li>
                    <li><b>Poly Bag Packs – </b>suitable for retail distribution.</li>
                    <li><b>Pallet Packing – </b>optimized for container shipping and bulk orders.</li>
                </ol>
                <p>
                    Each unit is tightly packed to prevent moisture loss, contamination, or compression during shipping. Packaging sizes can also be customized upon request.
                </p>
            </section>
            <section id="applications" style={{ marginTop: "2rem" }}>
                <h2 style={{ color: "#00695c", fontWeight: 700, marginBottom: 16, fontSize: "1.45rem" }}>🌾 Modern Agriculture Applications</h2>
                <ul style={{ margin: "1rem 0 1rem 1.5rem" }}>
                    <li><b>Horticulture: </b>Cocopeat boosts root mass and nutrient absorption in flowers, herbs, and shrubs.</li>
                    <li><b>Hydroponics: </b>Acts as an inert substrate with excellent water retention for soilless farming.</li>
                    <li><b>Aquaponics: </b>Integrates seamlessly with fish farming systems, enhancing bio-filtration.</li>
                    <li><b>Aeroponics: </b>Encourages rapid root expansion with minimal nutrient wastage.</li>
                    <li><b>Olericulture: </b>Ideal for vegetables such as tomatoes, cucumbers, capsicum, and lettuce.</li>
                    <li><b>Pomology: </b>Increases fruit set and size in apples, berries, grapes, and other fruits.</li>
                    <li><b>Floriculture: </b>Maintains consistent moisture for flowers like roses, orchids, and gerberas.</li>
                    <li><b>Vertical Farming: </b>Lightweight and stackable—maximizes urban cultivation.</li>
                </ul>
            </section>
        </div>
        <FooterContact />
    </>
);

export default Info;
