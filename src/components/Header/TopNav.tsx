import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

export default function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="top-nav">
        {/* <span className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <GiHamburgerMenu />
        </span> */}

        <span className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <img
            src="/logo.png" // replace with the actual path to your logo
            alt="Logo"
            style={{ height: "50px", width: "120px", cursor: "pointer" }}
          />
        </span>

        <div className="logo">LOGO</div>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            fontSize: "18px",
          }}
        >
          <span style={{ cursor: "pointer" }}>
            <BiSearch />
          </span>
          <span style={{ cursor: "pointer" }}>
            <FcLike />
          </span>
          <span style={{ cursor: "pointer" }}>
            <FiShoppingCart />
          </span>
          <span className="hide-mobile">
            <FaRegUser />
          </span>
          <span className="hide-mobile">
            ENG <IoIosArrowDown />
          </span>
        </div>
      </div>
      <div className={`main-nav ${menuOpen ? "show" : ""}`}>
        <a href="#">SHOP</a>
        <a href="#">SKILLS</a>
        <a href="#">STORIES</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT US</a>
      </div>

      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "45px",
        }}
      >
        Discover our products
      </h1>
      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
          maxWidth: "600px",
          margin: "20px auto",
        }}
      >
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>
    </>
  );
}
