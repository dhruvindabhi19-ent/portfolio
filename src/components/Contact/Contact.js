import React, { useState } from "react";

function Contact() {
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const sendWhatsAppMessage = () => {
        // Validation: Ensure name and message aren't empty
        if (!name || !message) {
            alert("Please enter at least your name and a message.");
            return;
        }

                const text = `Hello,
        *Name:* ${name}
        *Phone:* ${phone}
        *Email:* ${email}
        *Message:* ${message}`;

        // Using the wa.me API to open WhatsApp with pre-filled text
        const url = `https://wa.me/917600118392?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="contact-bg">
            <div className="contact-card">

                {/* HEADER */}
                <div className="headerPadding">
                    <h1 className="project-heading">
                        <strong className="purple">Contact us </strong>
                    </h1>
                    <p style={{ color: "sub-heading" }}>
                        If you have any questions, please feel free to get in touch with us
                        via phone, text, email, the form below, or even on social media!
                    </p>
                </div>

                {/* CONTENT */}
                <div className="contact-content">

                    {/* LEFT FORM */}
                    <div className="contact-form-box">
                        <h3>Get In Touch</h3>

                        <div className="form-row">
                            <input
                                type="text"
                                placeholder="Enter your name*"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Enter your phone number*"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <input
                            type="email"
                            placeholder="Enter your email*"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <textarea
                            placeholder="Your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>

                        {/* <button>Send Message</button> */}
                        <button type="button" onClick={sendWhatsAppMessage}>
                            Send Message on WhatsApp
                        </button>
                        {/* <button
                            type="button"
                            onClick={() =>
                                window.open(
                                    "https://wa.me/917600118392?text=Hello%20I%20would%20like%20to%20get%20more%20information.",
                                    "_blank"
                                )
                            }
                        >
                            Send Message on WhatsApp
                        </button> */}
                    </div>

                    {/* RIGHT INFO */}
                    <div className="contact-info-box">

                        <div className="info-section">
                            <h3>Contact Information</h3>

                            <p>📞 <strong>Phone:</strong> +91 76001 18392</p>
                            <p>✉️ <strong>Email:</strong> dhruvin.dabhi19@gmail.com
                                <p>Shriadhikagency15@gmail.com</p>
                            </p>
                            <p>📍 <strong>Address:</strong>  No A/33, Suvidha Estate, Sarkhej -
                                Gandhinagar Hwy, nearby Bharat Carring, Sarkhej,<br />
                                Ahmedabad, Sarkhej, Gujarat 382210</p>
                        </div>

                        <div className="info-section">
                            <h3>Business Hours</h3>

                            <div className="hours-grid">
                                <div>
                                    <strong>Monday – Friday</strong>
                                    <p>11:00 AM – 7:00 PM</p>
                                </div>

                                <div>
                                    <strong>Saturday</strong>
                                    <p>11:00 AM – 6:00 PM</p>
                                </div>

                                <div>
                                    <strong>Sunday</strong>
                                    <p className="closed">Closed</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* MAP */}
                <div className="contact-map">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.906650882402!2d72.489175!3d22.9814657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9a947de485f9%3A0x228b0cf1d3050247!2sLeo%20Taps%20And%20Fittings%20-%20Shri%20Adhik%20Agencies!5e0!3m2!1sen!2sin!4v1700000000000"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                {/* <div className="contact-map">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps?q=Elgin,IL&output=embed"
                        loading="lazy"
                    ></iframe>
                </div> */}

            </div>
        </div>
    );
}

export default Contact;