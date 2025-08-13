import FooterContact from "../components/FooterContact";
import image1 from "../assets/products/Cocopeat Blocks/5Kg/rows.png";

const Info = () => {

    return (
        <>
            {/* Responsive styles for mobile and enhanced business look */}
            <style>
                {`
            .info-hero {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: linear-gradient(90deg, #e0f2f1 0%, #f1f8e9 100%);
                border-radius: 18px;
                box-shadow: 0 2px 18px rgba(8,108,92,0.10);
                margin: 1.5rem auto 2.5rem auto;
                padding: 2.5rem 2rem;
                gap: 32px;
                max-width: 1200px;
            }
            .info-hero-content {
                flex: 1;
            }
            .info-hero h1 {
                color: #00695c;
                font-size: 2.1rem;
                font-weight: 800;
                margin-bottom: 0.7rem;
                letter-spacing: 0.5px;
            }
            .info-hero p {
                font-size: 1.18rem;
                color: #234;
                margin-bottom: 1.2rem;
            }
            .info-cta-btn {
                display: inline-block;
                background: linear-gradient(90deg, #009688 0%, #43a047 100%);
                color: #fff;
                font-weight: 700;
                padding: 0.7rem 1.7rem;
                border-radius: 8px;
                text-decoration: none;
                font-size: 1.08rem;
                box-shadow: 0 2px 8px rgba(8,108,92,0.09);
                transition: background 0.2s, box-shadow 0.2s;
            }
            .info-cta-btn:hover {
                background: linear-gradient(90deg, #43a047 0%, #009688 100%);
                box-shadow: 0 4px 16px rgba(8,108,92,0.13);
            }
            .info-divider {
                height: 2px;
                background: linear-gradient(90deg, #b2dfdb 0%, #f1f8e9 100%);
                margin: 2.5rem 0;
                border-radius: 2px;
            }
            .info-feature-cards {
                display: flex;
                flex-wrap: wrap;
                gap: 18px;
                margin: 2rem 0 1.5rem 0;
            }
            .info-feature-card {
                background: #fff;
                border-radius: 12px;
                box-shadow: 0 1px 8px rgba(8,108,92,0.07);
                padding: 1.1rem 1.2rem;
                flex: 1 1 260px;
                min-width: 220px;
                max-width: 320px;
                display: flex;
                align-items: flex-start;
                gap: 14px;
                transition: box-shadow 0.2s, transform 0.2s;
                cursor: pointer;
            }
            .info-feature-card:hover {
                box-shadow: 0 4px 18px rgba(8,108,92,0.13);
                transform: translateY(-4px) scale(1.03);
            }
            .info-feature-icon {
                font-size: 2rem;
                margin-top: 2px;
                color: #009688;
                flex-shrink: 0;
            }
            .info-feature-card b {
                color: #1976d2;
                font-size: 1.07rem;
            }
            .info-feature-card p {
                margin: 0.2rem 0 0 0;
                color: #234;
                font-size: 1.01rem;
            }
            .info-packaging-cards, .info-app-cards {
                display: flex;
                flex-wrap: wrap;
                gap: 18px;
                margin: 1.5rem 0 1.5rem 0;
            }
            .info-packaging-card, .info-app-card {
                background: #fff;
                border-radius: 12px;
                box-shadow: 0 1px 8px rgba(8,108,92,0.07);
                padding: 1.1rem 1.2rem;
                flex: 1 1 220px;
                min-width: 180px;
                max-width: 300px;
                display: flex;
                align-items: flex-start;
                gap: 14px;
                transition: box-shadow 0.2s, transform 0.2s;
                cursor: pointer;
            }
            .info-packaging-card:hover, .info-app-card:hover {
                box-shadow: 0 4px 18px rgba(8,108,92,0.13);
                transform: translateY(-4px) scale(1.03);
            }
            .info-packaging-icon, .info-app-icon {
                font-size: 1.7rem;
                margin-top: 2px;
                color: #009688;
                flex-shrink: 0;
            }
            .info-packaging-card b, .info-app-card b {
                color: #1976d2;
                font-size: 1.07rem;
            }
            .info-packaging-card p, .info-app-card p {
                margin: 0.2rem 0 0 0;
                color: #234;
                font-size: 1.01rem;
            }
            @media (max-width: 1100px) {
                .info-hero {
                    flex-direction: column;
                    text-align: center;
                    padding: 2rem 1rem;
                }
            }
            @media (max-width: 900px) {
                .info-feature-cards {
                    flex-direction: column;
                    gap: 12px;
                }
                .info-feature-card {
                    max-width: 100%;
                    flex: 1 1 0px;
                }
                .info-packaging-cards, .info-app-cards {
                    flex-direction: column;
                    gap: 12px;
                }
                .info-packaging-card, .info-app-card {
                    max-width: 100%;
                    flex: 1 1 0px;
                }
            }
            @media (max-width: 600px) {
                .info-root {
                    padding: 0.7rem !important;
                }
                .info-section {
                    padding: 1.1rem 0.6rem !important;
                    border-radius: 8px !important;
                }
                .info-section h2, .info-section h3 {
                    font-size: 1.05rem !important;
                }
                .info-section p, .info-section ul, .info-section ol, .info-section li, .info-section table, .info-section th, .info-section td {
                    font-size: 0.97rem !important;
                }
                .info-flex-row {
                    flex-direction: column !important;
                    gap: 18px !important;
                    padding: 1.1rem 0.6rem !important;
                }
                .info-flex-img {
                    max-width: 110px !important;
                    min-width: 80px !important;
                }
                .info-table {
                    font-size: 0.93rem !important;
                }
                .info-hero {
                    padding: 1.1rem 0.5rem;
                    gap: 10px;
                }
                .info-hero h1 {
                    font-size: 1.15rem !important;
                }
                .info-hero p {
                    font-size: 0.98rem !important;
                }
                .info-cta-btn {
                    font-size: 0.97rem !important;
                    padding: 0.5rem 1.1rem !important;
                }
                .info-feature-card {
                    flex: 1 1 0px;
                }
                .info-packaging-card, .info-app-card {
                    flex: 1 1 0px;
                }
            }
            /* Table row hover effect */
            .info-table tbody tr:hover {
                background: #e0f2f1 !important;
                transition: background 0.2s;
            }
            `}
            </style>
            {/* Hero Section */}
            <section className="info-hero">
                <div className="info-hero-content">
                    <h1>
                        <span role="img" aria-label="About Our Products">🪴</span> About Our Products
                    </h1>
                    <p>
                        Discover the next generation of sustainable, high-performance cocopeat products and organic fertilizers for agriculture, horticulture, and beyond.<br />
                        <span style={{ color: "#009688", fontWeight: 600 }}>Boost your yields. Protect the planet. Grow with confidence.</span>
                    </p>
                    <a href="/contact" className="info-cta-btn">Request a Free Sample</a>
                </div>
                <div className="info-hero-img">
                    <img src={image1} loading="lazy" alt="Premium Coco Products" style={{maxWidth: 320, borderRadius: 14, boxShadow: "0 2px 12px rgba(8,108,92,0.13)"}} />
                </div>
            </section>
            <div className="info-root" style={{padding: "2rem"}}>
                <section className="info-section"
                    style={{
                        background: "#f7fafc",
                        borderRadius: 14,
                        boxShadow: "0 2px 12px rgba(8,108,92,0.07)",
                        padding: "2rem 1.5rem",
                    }}
                >
                    <h2 style={{ color: "#00695c", fontWeight: 700, fontSize: "1.45rem" }}>
                        What is Cocopeat?
                    </h2>
                    <p style={{ fontSize: "1.08rem", textAlign: "justify", marginBottom: 16 }}>
                        Cocopeat, also known as coco pith or coir dust, is a 100% organic, biodegradable, and renewable by-product derived from coconut husks. It is widely recognized as a superior alternative to soil or peat moss, offering high porosity, excellent water-holding capacity, and optimal air circulation. These unique features make cocopeat ideal for seed germination, hydroponics, nursery plantations, and large-scale agriculture.
                    </p>
                    {/* --- Cocopeat vs Soil Table Section --- */}
                    <section className="info-section" style={{ margin: "2.2rem 0 1.5rem 0" }}>
                        <h3 style={{ color: "#1976d2", fontWeight: 600, marginBottom: 12, fontSize: "1.18rem" }}>
                            Advantages of Cocopeat Growing Medium vs. Traditional Soil
                        </h3>
                        <div style={{ overflowX: "auto" }}>
                            <table className="info-table" style={{
                                borderCollapse: "collapse",
                                width: "100%",
                                background: "#fff",
                                borderRadius: 10,
                                boxShadow: "0 1px 8px rgba(8,108,92,0.07)",
                                fontSize: "1.01rem",
                                minWidth: 420
                            }}>
                                <thead>
                                    <tr style={{ background: "#e0f7fa" }}>
                                        <th style={{ padding: "0.7rem 0.8rem", border: "1px solid #b2dfdb", fontWeight: 700, color: "#00695c" }}>Feature</th>
                                        <th style={{ padding: "0.7rem 0.8rem", border: "1px solid #b2dfdb", fontWeight: 700, color: "#009688" }}>Cocopeat Mix Growing Medium</th>
                                        <th style={{ padding: "0.7rem 0.8rem", border: "1px solid #b2dfdb", fontWeight: 700, color: "#757575" }}>Traditional Soil</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Water Retention</td>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Excellent (retains up to 8–9 times its weight in water)</td>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Moderate to poor</td>
                                    </tr>
                                    <tr style={{ background: "#f7fafc" }}>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Aeration</td>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Superior root aeration; prevents compaction</td>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Poor in compacted or clay soils</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>pH Neutrality</td>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Neutral (5.5 to 6.5)</td>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Can be acidic or alkaline</td>
                                    </tr>
                                    <tr style={{ background: "#f7fafc" }}>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Reusability</td>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Reusable for up to 5 years</td>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Limited</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Disease Resistance</td>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Naturally resistant to root-borne diseases</td>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Often harbors nematodes and pathogens</td>
                                    </tr>
                                    <tr style={{ background: "#f7fafc" }}>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Lightweight</td>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Easy to handle and cost-efficient in shipping</td>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Heavy and bulky</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Eco-Friendly</td>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>100% renewable, recyclable, and biodegradable</td>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Often over-exploited and depleting</td>
                                    </tr>
                                    <tr style={{ background: "#f7fafc" }}>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Nutrient Holding Capacity</td>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>High Cation Exchange Capacity (CEC)</td>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Variable and inconsistent</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Growth Rate</td>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Enhances germination and vegetative growth</td>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Slower plant development</td>
                                    </tr>
                                    <tr style={{ background: "#f7fafc" }}>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Climate Adaptability</td>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Performs well in extreme climates</td>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Limited adaptability</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Sterility</td>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>Free from weeds and contaminants</td>
                                        <td style={{ padding: "0.6rem 0.7rem", border: "1px solid #e0e0e0" }}>May contain pests and weed seeds</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                    {/* --- End Table Section --- */}
                    <div className="info-divider"></div>
                    {/* --- Feature Cards Section --- */}
                    <section>
                        <h2 style={{ color: "#388e3c", fontWeight: 700, marginBottom: 14, fontSize: "1.35rem", letterSpacing: "0.5px", display: "flex", alignItems: "center", gap: 8 }}>
                            <span role="img" aria-label="star">🌟</span> Why Choose Our Cocopeat?
                        </h2>
                        <div className="info-feature-cards">
                            <div className="info-feature-card">
                                <span className="info-feature-icon">🥥</span>
                                <div>
                                    <b>Raw Materials</b>
                                    <p>Extracted only from handpicked, mature coconut husks for optimum fiber and peat content.</p>
                                </div>
                            </div>
                            <div className="info-feature-card">
                                <span className="info-feature-icon">🧹</span>
                                <div>
                                    <b>Purity Guaranteed</b>
                                    <p>Washed with clean water, filtered with 6 mm mesh, and double-sieved to eliminate sand, fine dust, and fiber contaminants.</p>
                                </div>
                            </div>
                            <div className="info-feature-card">
                                <span className="info-feature-icon">📈</span>
                                <div>
                                    <b>High Expansion Ratio</b>
                                    <p>1 kg yields up to 15 liters of ready-to-use growing medium.</p>
                                </div>
                            </div>
                            <div className="info-feature-card">
                                <span className="info-feature-icon">🛡️</span>
                                <div>
                                    <b>Sterile &amp; Safe</b>
                                    <p>Naturally sterilized by solar drying; free from chemical additives.</p>
                                </div>
                            </div>
                            <div className="info-feature-card">
                                <span className="info-feature-icon">🔬</span>
                                <div>
                                    <b>Consistent Quality</b>
                                    <p>Every batch is tested for EC, pH, moisture, and impurities.</p>
                                </div>
                            </div>
                            <div className="info-feature-card">
                                <span className="info-feature-icon">🚚</span>
                                <div>
                                    <b>Global Logistics</b>
                                    <p>Ability to ship over 1000+ tonnes/month with on-time delivery.</p>
                                </div>
                            </div>
                            <div className="info-feature-card">
                                <span className="info-feature-icon">🎯</span>
                                <div>
                                    <b>Tailored Solutions</b>
                                    <p>Mixtures, sizes, and packaging customized for retail, greenhouse, or commercial farms.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="info-divider"></div>
                    <h3 style={{ color: "#1976d2", fontWeight: 600, margin: "1.2rem 0 0.5rem 0", fontSize: "1.13rem" }}>
                        We offer a wide range of cocopeat varieties:
                    </h3>
                    <ul style={{ fontSize: "1.05rem", lineHeight: 2 }}>
                        <li><b>High EC (Electrical Conductivity)</b> – ideal for specific nutrient rich environmental crops.</li>
                        <li><b>Low EC</b> – perfect for sensitive crops and food production.</li>
                        <li><b>Washed Cocopeat</b> – free from excess salts, ideal for vegetables and fruits.</li>
                        <li><b>Buffered Cocopeat</b> – treated to remove potassium and sodium, ensuring nutrient stability.</li>
                        <li><b>Custom Blends</b> – tailored to meet precise agricultural needs.</li>
                    </ul>
                    <h3 style={{ color: "#1976d2", fontWeight: 600, margin: "1.2rem 0 0.5rem 0", fontSize: "1.13rem" }}>
                        Available in various forms:
                    </h3>
                    <ul style={{ fontSize: "1.05rem", lineHeight: 2 }}>
                        <li>Cocopeat Blocks (5 kg & 650g)</li>
                        <li>Cocopeat Discs</li>
                        <li>Grow Bags/Slabs (ideal for greenhouse farming)</li>
                        <li>Coir Pots (biodegradable nursery pots)</li>
                        <li>Loose Powder (for soil amendments)</li>
                    </ul>
                </section>
                <hr />
                {/* Custom Cocopeat Mixes Section */}
                <section
                    className="info-section info-flex-row"
                    style={{
                        margin: "2.5rem 0",
                        background: "linear-gradient(90deg, #e0f7fa 0%, #f7fafc 100%)",
                        borderRadius: 16,
                        boxShadow: "0 2px 16px rgba(8,108,92,0.08)",
                        padding: "2.2rem 1.5rem",
                        display: "flex",
                        flexDirection: "row",
                        gap: 32,
                        alignItems: "center",
                        flexWrap: "wrap"
                    }}
                >
                    <div style={{ flex: 1, minWidth: 220 }}>
                        <h2 style={{ color: "#009688", fontWeight: 700, marginBottom: 12, fontSize: "1.35rem", letterSpacing: "0.5px" }}>
                            <span role="img" aria-label="mix">🧪</span> Custom Cocopeat Mixes with Coconut Husk Chips
                        </h2>
                        <p style={{ fontSize: "1.08rem", color: "#234", marginBottom: 12, textAlign: "justify" }}>
                            Our products are not limited to just pure cocopeat. We offer <b>customized mixes</b> such as <span style={{ color: "#00796b", fontWeight: 600 }}>70% Cocopeat + 30% Coir Chips</span> to enhance drainage, root aeration, and prevent waterlogging. These mixes are especially beneficial for <b>orchids, anthuriums, and high-value crops</b> grown in hydroponic or soilless systems.
                        </p>
                        <div style={{
                            background: "#fff",
                            borderRadius: 10,
                            boxShadow: "0 1px 6px rgba(8,108,92,0.07)",
                            padding: "1rem 1.2rem",
                            marginBottom: 10,
                            fontSize: "1.05rem"
                        }}>
                            <b>You can request any mix ratio based on:</b>
                            <ul style={{ margin: "0.7rem 0 0 1.2rem", lineHeight: 2 }}>
                                <li>Crop Type</li>
                                <li>Climate Conditions</li>
                                <li>Container or Field Farming</li>
                                <li>Watering Frequency</li>
                            </ul>
                        </div>
                        <div style={{
                            marginTop: 10,
                            fontSize: "1.01rem",
                            color: "#1976d2",
                            fontWeight: 500,
                            letterSpacing: "0.1px"
                        }}>
                            <span role="img" aria-label="tip">💡</span> <span>Get the perfect blend for your crop and climate—just ask our experts!</span>
                        </div>
                    </div>
                    <div
                        className="info-flex-img"
                        style={{
                            minWidth: 180,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                        <img
                            src="/mix-cocopeat-chips.svg"
                            loading="lazy" alt="Custom Cocopeat Mix"
                            style={{
                                width: "100%",
                                maxWidth: 180,
                                borderRadius: 12,
                                boxShadow: "0 2px 8px rgba(8,108,92,0.09)",
                                background: "#e0f7fa"
                            }}
                            onError={e => { e.target.style.display = "none"; }}
                        />
                    </div>
                </section>
                <hr />

                {/* Packaging Options Section - Enhanced */}
                <section id="packaging" className="info-section" style={{ marginTop: "2rem", background: "linear-gradient(90deg, #f7fafc 60%, #e0f2f1 100%)" }}>
                    <h2 style={{ color: "#00695c", fontWeight: 700, marginBottom: 16, fontSize: "1.45rem" }}>📦 Packaging Options with Custom Labeling</h2>
                    <p>
                        We understand that packaging plays a vital role in logistics, retail, and branding. That’s why we offer flexible packaging options with custom labeling and private labeling services to help you build your brand in your market.
                    </p>
                    <div className="info-packaging-cards">
                        <div className="info-packaging-card">
                            <span className="info-packaging-icon">🛡️</span>
                            <div>
                                <b>Individual Shrink Wrap</b>
                                <p>Moisture-protected and tamper-proof for maximum product integrity.</p>
                            </div>
                        </div>
                        <div className="info-packaging-card">
                            <span className="info-packaging-icon">📦</span>
                            <div>
                                <b>Bundle Packs with Nylon Straps</b>
                                <p>3/4/5 packs—compact, economical, and easy to handle.</p>
                            </div>
                        </div>
                        <div className="info-packaging-card">
                            <span className="info-packaging-icon">🛍️</span>
                            <div>
                                <b>Poly Bag Packs</b>
                                <p>Perfect for retail distribution and consumer convenience.</p>
                            </div>
                        </div>
                        <div className="info-packaging-card">
                            <span className="info-packaging-icon">🚛</span>
                            <div>
                                <b>Pallet Packing</b>
                                <p>Optimized for container shipping and bulk orders worldwide.</p>
                            </div>
                        </div>
                    </div>
                    <p>
                        Each unit is tightly packed to prevent moisture loss, contamination, or compression during shipping. Packaging sizes can also be customized upon request.
                    </p>
                </section>
                {/* Modern Agriculture Applications Section - Enhanced */}
                <section id="applications" className="info-section" style={{ marginTop: "2rem", background: "linear-gradient(90deg, #e0f7fa 60%, #f7fafc 100%)" }}>
                    <h2 style={{ color: "#00695c", fontWeight: 700, marginBottom: 16, fontSize: "1.45rem" }}>🌾 Modern Agriculture Applications</h2>
                    <p>Cocopeat is a versatile growing medium used in a wide range of modern agriculture techniques. It improves productivity, supports sustainable farming practices, and enhances crop quality.</p>
                    <div className="info-app-cards">
                        <div className="info-app-card">
                            <span className="info-app-icon">🌱</span>
                            <div>
                                <b>Horticulture</b>
                                <p>Boosts root mass and nutrient absorption in flowers, herbs, and shrubs.</p>
                            </div>
                        </div>
                        <div className="info-app-card">
                            <span className="info-app-icon">💧</span>
                            <div>
                                <b>Hydroponics</b>
                                <p>Acts as an inert substrate with excellent water retention for soilless farming.</p>
                            </div>
                        </div>
                        <div className="info-app-card">
                            <span className="info-app-icon">🐟</span>
                            <div>
                                <b>Aquaponics</b>
                                <p>Integrates seamlessly with fish farming systems, enhancing bio-filtration.</p>
                            </div>
                        </div>
                        <div className="info-app-card">
                            <span className="info-app-icon">🌬️</span>
                            <div>
                                <b>Aeroponics</b>
                                <p>Encourages rapid root expansion with minimal nutrient wastage.</p>
                            </div>
                        </div>
                        <div className="info-app-card">
                            <span className="info-app-icon">🥒</span>
                            <div>
                                <b>Olericulture</b>
                                <p>Ideal for vegetables such as tomatoes, cucumbers, capsicum, and lettuce.</p>
                            </div>
                        </div>
                        <div className="info-app-card">
                            <span className="info-app-icon">🍇</span>
                            <div>
                                <b>Pomology</b>
                                <p>Increases fruit set and size in apples, berries, grapes, and other fruits.</p>
                            </div>
                        </div>
                        <div className="info-app-card">
                            <span className="info-app-icon">🌸</span>
                            <div>
                                <b>Floriculture</b>
                                <p>Maintains consistent moisture for flowers like roses, orchids, and gerberas.</p>
                            </div>
                        </div>
                        <div className="info-app-card">
                            <span className="info-app-icon">🏢</span>
                            <div>
                                <b>Vertical Farming</b>
                                <p>Lightweight and stackable—maximizes urban cultivation.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <FooterContact />
        </>
    );
};

export default Info;
