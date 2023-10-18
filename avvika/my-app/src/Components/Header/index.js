import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import { FaMobileAlt } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { LiaGrinHeartsSolid } from "react-icons/lia";

import "./index.css";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [item, setItem] = useState([]);
  const [menu, setMenu] = useState("Makeup");

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [cartlength, setCartItems] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        // First API call
        const response1 = await axios.get('http://localhost:8000/api/categories/all');
        setCategories(response1.data);

        // Second API call
        const response2 = await axios.get('http://localhost:8000/api/subCategories/all');
        setSubcategories(response2.data);

        // third API call
        const response3 = await axios.get('http://localhost:8000/api/item/all');
        setItem(response3.data);

        const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];
        const length = cartItemsFromLocalStorage.length
        setCartItems(length)
        console.log("length", length)

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const onChangeMenu = (data) => {
    setMenu(data)
  }

  const openMenu = () => {
    setMenuVisible(!menuVisible); // Use menuVisible here instead of visible
  };

  const showPopup = () => {
    setIsActive(!isActive)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(currentScrollPos < 20);
    setPrevScrollPos(currentScrollPos);
  };

  return (
    <>
      <div className="header-main-container sticky">
        {visible && <div className="first-header">
          <div className="header-home-container">
            <ul className="top-section-container">
              <li className="item-top-section">
                <h3>
                  <FaMobileAlt />
                </h3>
                DOWNLOAD APP |
              </li>
              <li className="item-top-section">SUPPORT |</li>
              <li className="item-top-section">TRACK ORDER</li>
            </ul>
          </div>
          <div className="hr-container"></div>
          <div className="header-middle-container">
            <div className="middle-item-container border-botom">
              <h2 style={{ fontWeight: "500" }}>What are you looking for?</h2>
              <h2 style={{ marginLeft: "50px", paddingTop: "10px" }}>
                <AiOutlineSearch />
              </h2>
            </div>
            <div className="middle-item-container">
              <Link to="/">
                <img
                  src="https://advikka.com/image/catalog/logo.png"
                  alt=""
                  style={{ width: "150px" }}
                />
              </Link>
              {/* <img src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1537798844_try-logo-3x.png" alt="TryElite" style={{height:"40px"}}/> */}
            </div>
            <div className="middle-item-container">
              <button type="button" className="icon-btn">
                <Link to="/favarate-profile" style={{ marginRight: "15px" }}>
                  <AiOutlineHeart size={30} color={"black"} />
                </Link>
              </button>
              <button type="button" className="icon-btn" onClick={showPopup}>
                <Link style={{ marginRight: "15px" }}>
                  <LiaGrinHeartsSolid size={30} color={"black"} />
                </Link>

                {isActive && <ul className="show-popup">
                  <button type="button" className="sign-button">Sign in</button>
                  <Link className="item-icon-list" style={{ textDecoration: "none" }}>New Customer?</Link>
                  <Link className="item-icon-list pink-color" style={{ textDecoration: "none" }}>Start here</Link>
                  <Link className="item-icon-list" style={{ textDecoration: "none" }}>Your Orders</Link>

                  <Link className="item-icon-list" style={{ textDecoration: "none" }}>Your Account</Link>
                  <Link className="item-icon-list" style={{ textDecoration: "none" }}>Elite Membership</Link>
                  <Link className="item-icon-list" style={{ textDecoration: "none" }}>Your Beaity Profile</Link>
                  <Link className="item-icon-list" style={{ textDecoration: "none" }}>Your Wishlist</Link>
                  <Link className="item-icon-list" style={{ textDecoration: "none" }}>Purplle Credite</Link>
                  <Link className="item-icon-list" style={{ textDecoration: "none" }}>Become a Seller?</Link>
                  <Link className="item-icon-list pink-color" style={{ textDecoration: "none" }}>Register Now</Link>
                </ul>}
              </button>
              <button type="button" className="icon-btn">
                <Link to="/addto-cart" style={{ marginRight: "15px" }}>
                  <AiOutlineHeart size={30} color={"black"} />
                </Link>
                {cartlength > 0 ? (<p style={{ color: "#6600FF", fontSize: "17px", paddingLeft: "0" }}>({cartlength})</p>) : null}
              </button>
            </div>
          </div>
          {/* onMouseLeave={closeMenu} */}
          <div className="lower-item-bg">
            <ul className="lower-item-container">
              <button className="lower-item" onMouseEnter={openMenu} >SHOP CATEGORIES</button>
              <button className="lower-item" >BRANDS</button>
              <button className="lower-item">OFFERS</button>
              <button className="lower-item">NEW</button>
              <button className="lower-item">SPLURGE</button>
              <button className="lower-item">MAGAZINE</button>
              <button className="lower-item">ELITE OFFERS</button>
            </ul>
          </div>
        </div>}

        {/* second header container */}
        {!visible &&
          <div className="header-middle-container bg-color sticky">

            <div className="middle-item-container">
              <img
                src="https://advikka.com/image/catalog/logo.png"
                alt=""
                style={{ width: "150px" }}
              />

            </div>

            <div className="lower-item-bg">
              <ul className="lower-item-container">
                <button className="lower-item" onMouseEnter={openMenu} >SHOP CATEGORIES</button>
                <button className="lower-item">BRANDS</button>
                <button className="lower-item">OFFERS</button>
                <button className="lower-item">NEW</button>
                <button className="lower-item">SPLURGE</button>
                <button className="lower-item">MAGAZINE</button>
                <button className="lower-item">ELITE OFFERS</button>
              </ul>
            </div>

            <div className="middle-item-container">
              <button type="button" className="icon-btn">
                <Link style={{ marginRight: "15px" }}>
                  <AiOutlineSearch size={30} color={"black"} />
                </Link>
              </button>

              <button type="button" className="icon-btn">
                <Link to="/favarate-profile" style={{ marginRight: "15px" }}>
                  <AiOutlineHeart size={30} color={"black"} />
                </Link>
              </button>
              <button type="button" className="icon-btn" onClick={showPopup}>
                <Link style={{ marginRight: "15px" }}>
                  <LiaGrinHeartsSolid size={30} color={"black"} />
                </Link>
                {isActive && <ul className="show-popup2">
                  <button type="button" className="sign-button">Sign in</button>
                  <Link className="item-icon-list" style={{ textDecoration: "none" }}>New Customer?</Link>
                  <Link className="item-icon-list pink-color" style={{ textDecoration: "none" }}>Start here</Link>
                  <Link className="item-icon-list" style={{ textDecoration: "none" }}>Your Orders</Link>

                  <Link className="item-icon-list" style={{ textDecoration: "none" }}>Your Account</Link>
                  <Link className="item-icon-list" style={{ textDecoration: "none" }}>Elite Membership</Link>
                  <Link className="item-icon-list" style={{ textDecoration: "none" }}>Your Beaity Profile</Link>
                  <Link className="item-icon-list" style={{ textDecoration: "none" }}>Your Wishlist</Link>
                  <Link className="item-icon-list" style={{ textDecoration: "none" }}>Purplle Credite</Link>
                  <Link className="item-icon-list" style={{ textDecoration: "none" }}>Become a Seller?</Link>
                  <Link className="item-icon-list pink-color" style={{ textDecoration: "none" }}>Register Now</Link>
                </ul>}
              </button>
              <button type="button" className="icon-btn">
                <Link to="/addto-cart" style={{ marginRight: "15px" }}>
                  <AiOutlineHeart size={30} color={"black"} />
                </Link>
                {cartlength > 0 ? (<p style={{ color: "#6600FF", fontSize: "17px", paddingLeft: "0" }}>({cartlength})</p>) : null}
              </button>
            </div>
          </div>
        }

      </div>
      {menuVisible && (
        <div className="menu-styles1">
          <div className="menu-styles">
            {categories.map((eachmenu, menuindex) =>
              <div className="button-wrap" key={menuindex}>
                <button type="button" className="link" onClick={() => onChangeMenu(eachmenu.categories_name)}>{eachmenu.categories_name}</button>
              </div>
            )}
          </div>
          {menuVisible && (
            <>
              {/* <button className="close-button" onMouseEnter={openMenu}>Close Menu</button> */}
              <div className="menustyle-main" style={{ backgroundColor: "#f0efef" }}>
                <button className="close-button" onMouseEnter={openMenu}>Close Menu</button>
                <div className="menu-styles-category">
                  {subcategories.map((eachCat, index) =>
                    menu === eachCat.categories_name ? (
                      <ul className="item-row" key={index}>
                        <li className="subcategories">{eachCat.subCetegories_name}</li>
                        <ul>{item.map((eachItem, subIndex) =>
                          eachCat.subCetegories_name === eachItem.subCetegories_name ? (
                            <Link to={`/filter-page/${eachItem.item_name}`} key={subIndex}>
                              <li key={subIndex} className="subcategories-item" style={{ listStyleType: "none", textDecoration: "none" }}>{eachItem.item_name}</li>
                            </Link>) : null
                        )}
                        </ul>
                      </ul>
                    ) : null
                  )}

                </div>
              </div>
            </>
          )}
        </div>
      )}

    </>
  );
};

export default Header;
