import React, { useState } from "react";
import FooterContact from "../components/FooterContact";

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
                <div style={styles.flexContainer}>
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
                        <style>
                            {`
                                @media (max-width: 900px) {
                                    .contact-flex-container {
                                        flex-direction: column;
                                        align-items: center;
                                    }
                                    .contact-container {
                                        width: 100%;
                                        margin-left: 0;
                                    }
                                }
                            `}
                        </style>
                    </div>
                    <div className="contact-map" style={styles.left}>
                        <p>
                            For any inquiries, please reach out to us at:
                        </p>
                        <p>
                            <strong>Email:</strong> info@example.com
                        </p>
                    </div>
                    <div style={styles.left}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.123456789!2d77.7274!3d11.3410!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f1e2b1e2b1e%3A0x123456789abcdef!2sErode%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                            width="300"
                            height="300"
                            style={styles.image}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div id='contact1'><FooterContact /></div>
        </>
    );
};

const styles = {
    outerContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "80vh",
        background: "#fff",
    },
    flexContainer: {
        display: "flex",
        flexDirection: "row",
        gap: "2rem",
        alignItems: "flex-start",
        margin: "2rem 0",
    },
    left: {
        flex: "0 0 320px",
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
        background: "#007b5e",
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