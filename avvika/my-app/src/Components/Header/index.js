import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

import { FaMobileAlt } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { LiaGrinHeartsSolid } from "react-icons/lia";

import "./index.css";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => {
    setMenuVisible(!menuVisible); // Use menuVisible here instead of visible
  };

  // const closeMenu = () => {
  //   setMenuVisible(false);
  // };


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

  const categoriesData = [
    {
      name: 'Makeup',
      subcategories: [
        {
          name: 'Face Makeup',
          value: 'facemakeup',
          subcategories: [
            { name: 'home' },
            { name: 'Concealer' },
            { name: 'Foundation' },
          ],
        },

        {
          name: 'Eye Makeup',
          value: 'eyemakeup',
          subcategories: [
            { name: 'Eyeshadow' },
            { name: 'Eyeliner' },
            { name: 'Mascara' },
          ],
        },
        {
          name: 'Lip Makeup',
          value: 'lipmakeup',
          subcategories: [
            { name: 'Lipstick' },
            { name: 'Lip Gloss' },
          ],
        },
      ],
    },

    {
      name: 'Skincare',
      value: 'Skincare',
      subcategories: [
        { name: 'Cleanser' },
        { name: 'Moisturizer' },
        { name: 'Sunscreen' },
        { name: 'Facewash' },
      ],
    },

    {
      name: 'Haircare',
      value: 'Haircare',
      subcategories: [
        { name: 'Shampoo' },
        { name: 'Conditioner' },
        { name: 'Hair Serum' },
      ],
    },

    {
      name: 'facewash',
      value: 'Skincare',
      subcategories: [
        { name: 'Shampoo' },
        { name: 'Conditioner' },
        { name: 'Hair Serum' },
      ],
    },
    {
      name: 'facepack',
      value: 'Skincare',
      subcategories: [
        { name: 'Shampoo' },
        { name: 'Conditioner' },
        { name: 'Hair Serum' },
      ],
    },
  ];

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
              <img
                src="https://advikka.com/image/catalog/logo.png"
                alt=""
                style={{ width: "150px" }}
              />
              {/* <img src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1537798844_try-logo-3x.png" alt="TryElite" style={{height:"40px"}}/> */}
            </div>
            <div className="middle-item-container">
              <button type="button" className="icon-btn" onClick={showPopup}>
                <h1 style={{ width: "50px" }}>
                  <AiOutlineHeart />
                </h1>
                {isActive && <ul className="show-popup">
                  <li className="item-icon-list">mmm</li>
                  <li className="item-icon-list">mmm</li>
                  <li className="item-icon-list">mmm</li>
                  <li className="item-icon-list">mmm</li>
                  <li className="item-icon-list">mmm</li>
                  <li className="item-icon-list">mmm</li>
                  <li className="item-icon-list">mmm</li>
                  <li className="item-icon-list">mmm</li>
                </ul>}
              </button>
              <button type="button" className="icon-btn">
                <h1 style={{ width: "50px" }}>
                  <LiaGrinHeartsSolid />
                </h1>
              </button>
              <button type="button" className="icon-btn">
                <h1 style={{ width: "50px" }}>
                  <AiOutlineHeart />
                </h1>
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
              <button type="button" className="icon-btn" onClick={showPopup}>
                <h1 style={{ width: "50px" }}>
                  <AiOutlineHeart />
                </h1>
                {isActive && <ul className="show-popup">
                  <li className="item-icon-list">mmm</li>
                  <li className="item-icon-list">mmm</li>
                  <li className="item-icon-list">mmm</li>
                  <li className="item-icon-list">mmm</li>
                  <li className="item-icon-list">mmm</li>
                  <li className="item-icon-list">mmm</li>
                  <li className="item-icon-list">mmm</li>
                  <li className="item-icon-list">mmm</li>
                </ul>}
              </button>
              <button type="button" className="icon-btn">
                <h1 style={{ width: "50px" }}>
                  <LiaGrinHeartsSolid />
                </h1>
              </button>
              <button type="button" className="icon-btn">
                <h1 style={{ width: "50px" }}>
                  <AiOutlineHeart />
                </h1>
              </button>
            </div>
          </div>
        }

      </div>
      {menuVisible && (
        <div className="menu-styles1">
          <div className="menu-styles">
            {categoriesData.map((eachmenu, menuindex)=>
               <Link to={eachmenu.name} key={menuindex} className="link" >{eachmenu.name}</Link>
            )}
          </div>
          {menuVisible && (
            <div className="menustyle-main" style={{ backgroundColor: "#f0efef" }}>

              <div className="menu-styles-category">
                <button className="close-button" onMouseEnter={openMenu}>Close Menu</button>
                {categoriesData.map((eachCat, index) =>
                  <ul className="item-row" key={index}>
                    <li>{eachCat.name}</li>
                    <ul>{eachCat.subcategories.map((eachsubcat, subIndex) =>
                      <Link to={`/filter-page/${eachsubcat.value}`}>
                        <li key={subIndex}>{eachsubcat.name}</li>
                      </Link>
                      
                    )}
                    </ul>
                  </ul>
                )}
                

              </div>
            </div>
          )}
        </div>
      )}

    </>
  );
};

export default Header;
