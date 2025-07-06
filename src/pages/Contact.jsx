import { useState } from "react";
import FooterContact from "../components/FooterContact";
import { YouTube, Directions } from '@mui/icons-material';

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div style={styles.outerContainer}>
                <div className="contact-grid-container" style={styles.gridContainer}>
                    <div className="contact-container" style={styles.container}>
                        <h2 style={styles.heading}>Contact Us</h2>
                        <p style={styles.subheading}>
                            We'd love to hear from you! Please fill out the form below.
                        </p>
                        <form
                            action="https://formspree.io/f/mvonbjbb"
                            method="POST"
                            style={styles.form}
                        >
                            <div style={styles.formGroup}>
                                <label htmlFor="name" style={styles.label}>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    style={styles.input}
                                />
                            </div>
                            <div style={styles.formGroup}>
                                <label htmlFor="email" style={styles.label}>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    style={styles.input}
                                />
                            </div>
                            <div style={styles.formGroup}>
                                <label htmlFor="message" style={styles.label}>Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    style={styles.textarea}
                                />
                            </div>
                            <button type="submit" style={styles.button}>
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="contact-left" style={styles.left}>
                        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                            <h3 style={{ marginBottom: "0.5rem", color: "#007b5e", fontWeight: 700, letterSpacing: 1.5 }}>Get In Touch</h3>
                            <h2 style={{ fontWeight: 400, fontSize: 24, margin: "0 0 1.5rem 0" }}>
                                We are always connected to support your Business!
                            </h2>
                            {/* English Support */}
                            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", justifyContent: "center" }}>
                                <a href="tel:+919445676371"> <span style={iconStyle} role="img" aria-label="phone">📞</span> </a>
                                <span style={contactTextStyle}>
                                    English Support: <a href="tel:+919445676371" style={iconLinkStyle}><strong>+91 94456 76371</strong></a>
                                </span>
                            </div>
                            {/* Arabic, Hindi, Urdu Support */}
                            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", justifyContent: "center" }}>
                                <a href="tel:+919445071614"> <span style={iconStyle} role="img" aria-label="phone">📞</span> </a>
                                <span style={contactTextStyle}>
                                    Arabic, Hindi, Urdu Support: <a href="tel:+919445071614" style={iconLinkStyle}><strong>+91 94450 71614</strong></a>
                                </span>
                            </div>
                            {/* Email */}
                            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", justifyContent: "center" }}>
                                <a href="mailto:naturalcoirs786@gmail.com"> <span style={iconStyle} role="img" aria-label="email">✉️</span> </a>
                                <span style={contactTextStyle}>
                                    <a href="mailto:naturalcoirs786@gmail.com" style={iconLinkStyle}><strong>naturalcoirs786@gmail.com</strong></a>
                                </span>
                            </div>
                            {/* Social Networks */}
                            <div style={{ margin: "1.5rem 0 0.5rem 0", fontWeight: 600 }}>
                                Follow us on Social Networks to stay in touch with us
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: "1.5rem", justifyContent: "center" }}>
                                <a href="https://www.youtube.com/@NaturalCoirs" aria-label="YouTube" target="_blank" rel="noopener noreferrer" style={{ ...iconLinkStyle, color: "#FF0000" }}>
                                    <YouTube style={{ height: '35px', width: '35px', color: "#FF0000" }} />
                                </a>
                                <a href="https://www.indiamart.com/naturalcoirs" aria-label="IndiaMart" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
                                    <span style={{ fontSize: 26 }}>🛒</span>
                                </a>
                                {/* <a href="https://www.amazon.in/gp/product/B0DT4NWV5L/ref=cx_skuctr_share_ls_srb?smid=A2813C0Z0Q7WMV&tag=ShopReferral_802e106a-fe9c-4e2b-b0bd-1b9e1e2e7aeb" aria-label="Amazon" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
                                    <span style={{ fontSize: 26 }}>🛍️</span>
                                </a>
                                <a href="https://www.meesho.com/naturalcoirs" aria-label="Meesho" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
                                    <span style={{ fontSize: 26 }}>👜</span>
                                </a> */}
                            </div>
                            <div style={{ margin: "1rem 0", color: "#222" }}>
                                <span role="img" aria-label="truck">🚚</span> Bulk Orders | <span role="img" aria-label="seedling">🌱</span> Custom Mixes | <span role="img" aria-label="label">🏷️</span> OEM Labels
                            </div>
                            {/* Get Direction */}
                            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", justifyContent: "center" }}>
                                <Directions style={{ color: "#1976d2" }} />
                                <span style={contactTextStyle}>
                                    <a
                                        href="https://www.google.co.in/maps/dir//11.671988,78.116388/@11.6719763,78.0339861,12z?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={iconLinkStyle}
                                    >
                                        Get Direction
                                    </a>
                                </span>
                            </div>
                            {/* Map */}
                            <div style={{ borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", width: "100%", maxWidth: 350 }}>
                                <iframe
                                    title="Natural Coirs Location"
                                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d125034.05751044782!2d78.11625939912227!3d11.672123441354502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s33%2F1%2C2%2C3%2C%20Dharmanagar%203rd%20Street%2C%20Suramangalam%2C%20Salem-636005%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1750177834565!5m2!1sen!2sin"
                                    width="300"
                                    height="200"
                                    style={{ border: 0, width: "100%", minWidth: 220 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterContact />
            <style>
                {`
                @media (max-width: 900px) {
                    .contact-grid-container {
                        display: flex !important;
                        flex-direction: column !important;
                        gap: 2rem !important;
                    }
                    .contact-container, .contact-left {
                        width: 100% !important;
                        max-width: 100% !important;
                        padding: 1rem !important;
                    }
                }
                @media (max-width: 600px) {
                    .contact-container, .contact-left {
                        padding: 0.5rem !important;
                    }
                }
                `}
            </style>
        </>
    );
};

const iconStyle = {
    fontSize: 22,
    color: "#219653",
    marginRight: 10,
    minWidth: 28,
    display: "inline-block",
    textAlign: "center",
    cursor: "pointer",
};
const contactTextStyle = {
    fontSize: 16,
    color: "#222",
    lineHeight: 1.5
};
const iconLinkStyle = {
    color: "#222",
    textDecoration: "none",
    cursor: "pointer",
};

const styles = {
    outerContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "80vh",
        background: "#fff",
    },
    gridContainer: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
        alignItems: "flex-start",
        margin: "2rem 0",
        width: "100%",
        maxWidth: "1200px",
    },
    left: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "300px",
        height: "300px",
        borderRadius: "8px",
        objectFit: "cover",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    container: {
        maxWidth: "500px",
        margin: "0",
        padding: "2rem",
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    heading: {
        textAlign: "center",
        marginBottom: "0.5rem",
    },
    subheading: {
        textAlign: "center",
        marginBottom: "1.5rem",
        color: "#666",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
    formGroup: {
        display: "flex",
        flexDirection: "column",
    },
    label: {
        marginBottom: "0.5rem",
        fontWeight: "bold",
    },
    input: {
        padding: "0.75rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize: "1rem",
    },
    textarea: {
        padding: "0.75rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize: "1rem",
        resize: "vertical",
    },
    button: {
        padding: "0.75rem",
        background: "linear-gradient(90deg, rgb(0, 105, 92) 0%, rgb(67, 160, 71) 100%)",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        fontWeight: "bold",
        cursor: "pointer",
        fontSize: "1rem",
        marginTop: "1rem",
    },
    success: {
        color: "green",
        marginTop: "1rem",
        textAlign: "center",
    },
};

export default Contact;