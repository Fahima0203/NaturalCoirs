import FooterContact from "../components/FooterContact";

const Info = () => (
    <>
        <div style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "2rem",
            fontFamily: "Segoe UI, sans-serif",
            color: "#2d2d2d"
        }}>
            <section id="packaging" style={{ marginTop: "2rem" }}>
                <h2 style={{ color: "#00695c" }}>📦 Packaging Options with Custom Labeling</h2>
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
                <img src="https://via.placeholder.com/600x300?text=Packaging" alt="Packaging" style={{ width: "100%", borderRadius: 10, margin: "20px 0" }} />
            </section>
            <section id="applications" style={{ marginTop: "2rem" }}>
                <h2 style={{ color: "#00695c" }}>🌾 Modern Agriculture Applications</h2>
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
                <img src="https://via.placeholder.com/600x300?text=Hydroponics+Setup" alt="Hydroponics" style={{ width: "100%", borderRadius: 10, margin: "20px 0" }} />
            </section>
            <section id="whyourcocopeat" style={{ marginTop: "2rem" }}>
                <h2 style={{ color: "#00695c" }}>Why Choose Our Cocopeat?</h2>
                <ul style={{ margin: "1rem 0 1rem 1.5rem" }}>
                    <li><b>Raw Materials: </b>Extracted only from handpicked, mature coconut husks for optimum fiber and peat content.</li>
                    <li><b>Purity Guaranteed: </b>Washed with clean water, filtered with 6 mm mesh, and double-sieved to eliminate sand, fine dust, and fiber contaminants.</li>
                    <li><b>High Expansion Ratio: </b>1 kg Cocopeat yields up to 18 liters of ready-to-use growing medium.</li>
                    <li><b>Sterile & Safe: </b>Naturally sterilized by solar drying; free from chemical additives.</li>
                    <li><b>Consistent Quality: </b>Every batch is tested for EC, pH, moisture, and impurities.</li>
                    <li><b>Global Logistics: </b>Ability to ship over 5000+ tonnes/month with on-time delivery.</li>
                    <li><b>Tailored Solutions: </b>Mixtures, sizes, and packaging customized for retail, greenhouse, or commercial farms.</li>
                </ul>
            </section>
            <section id="expertadvisory" style={{ marginTop: "2rem" }}>
                <h2 style={{ color: "#00695c" }}>💡 Expert Advisory Services – 24/7 Support</h2>
                <p>
                    Our expert agricultural consultants are available around-the-clock to guide you through your cocopeat journey. Whether you're a backyard gardener, a hydroponic grower, or a large-scale farm operator, we offer personalized recommendations on:
                </p>
                <ol style={{ margin: "1rem 0 1rem 1.5rem" }}>
                    <li>Required cocopeat volume for land and crop types.</li>
                    <li>Selection between blocks, bricks, grow bags, or loose powder.</li>
                    <li>Ideal cocopeat-chip mix ratios for your farming system.</li>
                    <li>Appropriate fertilizers: Biochar, Perlite, Vermiculite, NPK (19:19:19 / 20:20:20).</li>
                    <li>Ordering strategies that save space and money.</li>
                    <li>Best practices for storing and using cocopeat efficiently.</li>
                    <li>How to achieve high yields even in extreme climates using sustainable methods?</li>
                </ol>
            </section>
            <section id="vision" style={{ marginTop: "2rem" }}>
                <h2 style={{ color: "#00695c" }}>🌍 Our Vision</h2>
                <p>
                    We aim to make the world greener and more productive through sustainable farming practices, helping prevent desertification and boosting food security globally.
                </p>
                <ul style={{ lineHeight: "2" }}>
                    <li>Promote soil-free cultivation methods to combat soil degradation.</li>
                    <li>Address global water scarcity through smart irrigation and moisture-retentive substrates.</li>
                    <li>Help eradicate famine and poverty by enabling farmers to achieve 3x faster yields.</li>
                    <li>Create a carbon-negative ecosystem by encouraging the use of biodegradable inputs.</li>
                    <li>Prevent desertification and restore green cover across the globe.</li>
                </ul>
                <img src="https://via.placeholder.com/600x300?text=Green+Vision" alt="Vision" style={{ width: "100%", borderRadius: 10, margin: "20px 0" }} />
            </section>
            <footer style={{ marginTop: "3rem", fontSize: "1rem", color: "#888" }}>
                Let’s grow the future, together — with Certified, Sustainable, and High-Performance Cocopeat.
            </footer>
        </div>
        <FooterContact />
    </>
);

export default Info;
