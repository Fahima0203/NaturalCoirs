import FooterContact from "../components/FooterContact";
const About = () => (
    <>
        <div style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "2rem",
            fontFamily: "Segoe UI, sans-serif",
            color: "#2d2d2d"
        }}>
            <h1 style={{ fontSize: "2.5rem", color: "#3e7c3a" }}>About Natural Coirs</h1>
            <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
                Welcome to <strong>Natural Coirs</strong>! We are passionate about sustainability and eco-friendly living. Our mission is to provide high-quality, natural coir products that help you make greener choices for your home and garden.
            </p>
            <section style={{ marginTop: "2rem" }}>
                <h2 style={{ color: "#3e7c3a" }}>Our Story</h2>
                <p>
                    Founded by a team of nature enthusiasts, Natural Coirs was born out of a desire to reduce plastic waste and promote renewable resources. We source our coir from trusted growers and ensure every product is crafted with care and respect for the environment.
                </p>
            </section>
            <section style={{ marginTop: "2rem" }}>
                <h2 style={{ color: "#3e7c3a" }}>What We Offer</h2>
                <ul style={{ lineHeight: "2" }}>
                    <li>Premium coir mats and doormats</li>
                    <li>Eco-friendly gardening solutions</li>
                    <li>Custom coir products for your needs</li>
                </ul>
            </section>
            <section style={{ marginTop: "2rem" }}>
                <h2 style={{ color: "#3e7c3a" }}>Why Choose Us?</h2>
                <ul style={{ lineHeight: "2" }}>
                    <li>100% natural and biodegradable materials</li>
                    <li>Ethically sourced and produced</li>
                    <li>Dedicated to customer satisfaction</li>
                </ul>
            </section>
            <footer style={{ marginTop: "3rem", fontSize: "1rem", color: "#888" }}>
                Thank you for supporting a greener planet with Natural Coirs!
            </footer>
        </div>
        <FooterContact />
    </>
);

export default About;