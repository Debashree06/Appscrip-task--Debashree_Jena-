// components/Footer.tsx
import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "40px 20px",
        fontSize: "14px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top Section */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginBottom: "40px",
          }}
        >
          {/* Newsletter */}
          <div style={{ flex: "1 1 300px", marginBottom: "20px" }}>
            <h4 style={{ fontWeight: 600 }}>BE THE FIRST TO KNOW</h4>
            <p>Sign up for updates from mettā muse.</p>
            <div style={{ display: "flex", marginTop: "20px" }}>
              <input
                type="email"
                placeholder="Enter your e-mail..."
                style={{
                  padding: "10px",
                  flex: 1,
                  border: "none",
                  marginRight: "10px",
                }}
              />
              <button
                style={{
                  background: "#222",
                  color: "#fff",
                  padding: "10px 20px",
                  border: "none",
                }}
              >
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* Contact & Currency */}
          <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
            <h4>CONTACT US</h4>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
            <br />
            <h4>CURRENCY</h4>
            <p>
              <span role="img" aria-label="flag">
                🇺🇸
              </span>{" "}
              USD
            </p>
            <p style={{ fontSize: "12px" }}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>

        <hr style={{ border: "1px solid #333" }} />

        {/* Bottom Section */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginTop: "40px",
          }}
        >
          {/* Links */}
          <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
            <h4 style={{ fontSize: "20px", marginBottom: "2px" }}>
              mettā muse
            </h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                "About Us",
                "Stories",
                "Artisans",
                "Boutiques",
                "Contact Us",
                "EU Compliances Docs",
              ].map((item) => (
                <li key={item} style={{ marginBottom: "8px" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
            <h4 style={{ fontSize: "20px", marginBottom: "2px" }}>
              QUICK LINKS
            </h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                "Orders & Shipping",
                "Join/Login as a Seller",
                "Payment & Pricing",
                "Return & Refunds",
                "FAQs",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((item) => (
                <li key={item} style={{ marginBottom: "8px" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Payment */}
          <div style={{ flex: "1 1 400px", marginBottom: "20px" }}>
            <h4>FOLLOW US</h4>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginBottom: "10px",
                marginTop: "4px",
              }}
            >
              <span
                style={{
                  width: "30px",
                  height: "30px",
                  border: "2px solid #fff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                }}
              >
                <BsInstagram style={{ fontSize: 15 }} />
              </span>
              <span
                style={{
                  width: "30px",
                  height: "30px",
                  border: "2px solid #fff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                }}
              >
                <BsLinkedin style={{ fontSize: 15 }} />
              </span>
            </div>
            <h4>mettā muse ACCEPTS</h4>
            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                marginTop: "10px",
              }}
            >
              <img src="./frame.png" alt="GPay" style={{ height: "24px" }} />
            </div>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
            fontSize: "12px",
            color: "#888",
          }}
        >
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
