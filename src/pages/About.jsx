import FooterContact from "../components/FooterContact";
const About = () => (
    <>
        <div style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "2rem",
            fontFamily: "Segoe UI, sans-serif",
            color: "#2d2d2d"
        }}>
            <h1 style={{ fontSize: "2.5rem", color: "#00695c", marginBottom: 8 }}>🌿 Welcome to the Global Leader in Cocopeat Solutions</h1>
            <p style={{ fontSize: "1.2rem", margin: "1rem 0 2rem 0" }}>
                With decades of hands-on experience in agriculture and coir-based products since the 1970s, we are proud to stand as a global leader in the manufacturing and export of premium quality cocopeat. As pioneers in modern agriculture solutions, we cater to a worldwide clientele spanning Saudi Arabia, UAE (Dubai), Qatar, Kuwait, Oman, USA, Canada, Germany, China, Japan, UK, Iran, and many more.
            </p>
            <img src="https://via.placeholder.com/1200x400?text=Cover+Photo" alt="Cover" style={{ width: "100%", borderRadius: 12, marginBottom: 32 }} />
            <section style={{ marginTop: "2rem" }}>
                <h2 style={{ color: "#00695c" }}>👋 About Us</h2>
                <p>
                    Our passion lies in providing sustainable and effective growing mediums that significantly enhance agricultural productivity while remaining environmentally conscious. We combine deep-rooted traditional expertise with cutting-edge production processes to deliver high-quality cocopeat that meets international standards for performance, purity, and consistency.
                </p>
                <img src="https://via.placeholder.com/600x300?text=Our+Factory" alt="Factory" style={{ width: "100%", borderRadius: 10, margin: "20px 0" }} />
            </section>
            <section style={{ marginTop: "2rem" }}>
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
            <section style={{ marginTop: "2rem" }}>
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
            <section style={{ marginTop: "2rem" }}>
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
            <footer style={{ marginTop: "3rem", fontSize: "1rem", color: "#888" }}>
                Let’s grow the future, together — with Certified, Sustainable, and High-Performance Cocopeat.
            </footer>
        </div>
        <FooterContact />
    </>
);

export default About;