import FooterContact from "../components/FooterContact";

const Info = () => (
    <>
        <div style={{padding: "2rem"}}>
            <section
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
                    Cocopeat, also known as coir pith or coir dust, is a 100% organic, biodegradable, and renewable by-product derived from coconut husks. It is widely recognized as a superior alternative to soil or peat moss, offering high porosity, excellent water-holding capacity, and optimal air circulation. These unique features make cocopeat ideal for seed germination, hydroponics, nursery plantations, and large-scale agriculture.
                </p>
                {/* --- Cocopeat vs Soil Table Section --- */}
                <section style={{ margin: "2.2rem 0 1.5rem 0" }}>
                    <h3 style={{ color: "#1976d2", fontWeight: 600, marginBottom: 12, fontSize: "1.18rem" }}>
                        Advantages of Cocopeat Growing Medium vs. Traditional Soil
                    </h3>
                    <div style={{ overflowX: "auto" }}>
                        <table style={{
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

                {/* --- Why Choose Our Cocopeat Section --- */}
                <section
                    style={{
                        margin: "2.5rem 0 1.5rem 0",
                        background: "linear-gradient(90deg, #f1f8e9 0%, #e0f7fa 100%)",
                        borderRadius: 16,
                        boxShadow: "0 2px 16px rgba(8,108,92,0.09)",
                        padding: "2rem 1.5rem",
                        display: "flex",
                        flexDirection: "row",
                        gap: 32,
                        alignItems: "flex-start",
                        flexWrap: "wrap"
                    }}
                >
                    <div style={{ flex: 1, minWidth: 220 }}>
                        <h2 style={{
                            color: "#388e3c",
                            fontWeight: 700,
                            marginBottom: 14,
                            fontSize: "1.35rem",
                            letterSpacing: "0.5px",
                            display: "flex",
                            alignItems: "center",
                            gap: 8
                        }}>
                            <span role="img" aria-label="star">🌟</span> Why Choose Our Cocopeat?
                        </h2>
                        <ul style={{
                            fontSize: "1.09rem",
                            color: "#234",
                            margin: 0,
                            padding: 0,
                            listStyle: "none"
                        }}>
                            <li style={{ marginBottom: 12, display: "flex", alignItems: "flex-start", gap: 10 }}>
                                <span style={{ color: "#43a047", fontSize: 20 }}>🥥</span>
                                <span>
                                    <b>Raw Materials:</b> Extracted only from handpicked, mature coconut husks for optimum fiber and peat content.
                                </span>
                            </li>
                            <li style={{ marginBottom: 12, display: "flex", alignItems: "flex-start", gap: 10 }}>
                                <span style={{ color: "#0288d1", fontSize: 20 }}>🧹</span>
                                <span>
                                    <b>Purity Guaranteed:</b> Washed with clean water, filtered with 6&nbsp;mm mesh, and double-sieved to eliminate sand, fine dust, and fiber contaminants.
                                </span>
                            </li>
                            <li style={{ marginBottom: 12, display: "flex", alignItems: "flex-start", gap: 10 }}>
                                <span style={{ color: "#fbc02d", fontSize: 20 }}>📈</span>
                                <span>
                                    <b>High Expansion Ratio:</b> 1&nbsp;kg yields up to 15&nbsp;liters of ready-to-use growing medium.
                                </span>
                            </li>
                            <li style={{ marginBottom: 12, display: "flex", alignItems: "flex-start", gap: 10 }}>
                                <span style={{ color: "#d84315", fontSize: 20 }}>🛡️</span>
                                <span>
                                    <b>Sterile &amp; Safe:</b> Naturally sterilized by solar drying; free from chemical additives.
                                </span>
                            </li>
                            <li style={{ marginBottom: 12, display: "flex", alignItems: "flex-start", gap: 10 }}>
                                <span style={{ color: "#7b1fa2", fontSize: 20 }}>🔬</span>
                                <span>
                                    <b>Consistent Quality:</b> Every batch is tested for EC, pH, moisture, and impurities.
                                </span>
                            </li>
                            <li style={{ marginBottom: 12, display: "flex", alignItems: "flex-start", gap: 10 }}>
                                <span style={{ color: "#1976d2", fontSize: 20 }}>🚚</span>
                                <span>
                                    <b>Global Logistics:</b> Ability to ship over 1000+ tonnes/month with on-time delivery.
                                </span>
                            </li>
                            <li style={{ marginBottom: 0, display: "flex", alignItems: "flex-start", gap: 10 }}>
                                <span style={{ color: "#009688", fontSize: 20 }}>🎯</span>
                                <span>
                                    <b>Tailored Solutions:</b> Mixtures, sizes, and packaging customized for retail, greenhouse, or commercial farms.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div style={{
                        flex: "0 0 180px",
                        minWidth: 140,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <img
                            src="/choose-cocopeat.svg"
                            alt="Why Choose Our Cocopeat"
                            style={{
                                width: "100%",
                                maxWidth: 140,
                                borderRadius: 12,
                                boxShadow: "0 2px 8px rgba(56,142,60,0.09)",
                                background: "#f1f8e9"
                            }}
                            onError={e => { e.target.style.display = "none"; }}
                        />
                    </div>
                </section>
                {/* --- End Why Choose Section --- */}

                <h3 style={{ color: "#1976d2", fontWeight: 600, margin: "1.2rem 0 0.5rem 0", fontSize: "1.13rem" }}>
                    We offer a wide range of cocopeat varieties:
                </h3>
                <ul style={{ fontSize: "1.05rem", lineHeight: 2 }}>
                    <li><b>High EC (Electrical Conductivity)</b> – ideal for specific industrial or non-agricultural uses.</li>
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
                    <li>Cocopeat Bricks</li>
                    <li>Cocopeat Briquettes</li>
                    <li>Cocopeat Discs</li>
                    <li>Grow Bags/Slabs (ideal for greenhouse farming)</li>
                    <li>Coir Pots (biodegradable nursery pots)</li>
                    <li>Loose Powder (for soil amendments)</li>
                </ul>
            </section>
            <hr />
            {/* Custom Cocopeat Mixes Section */}
            <section
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
                <div style={{
                    flex: "0 0 220px",
                    minWidth: 180,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <img
                        src="/mix-cocopeat-chips.svg"
                        alt="Custom Cocopeat Mix"
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
                <p>Cocopeat is a versatile growing medium used in a wide range of modern agriculture techniques. It improves productivity, supports sustainable farming practices, and enhances crop quality.</p>
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
