import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { AiFillCaretLeft, AiFillCaretDown, AiTwotoneDollarCircle } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineDashboard, MdOutlineHomeWork } from "react-icons/md";
import { RiAddBoxFill, RiDisqusLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { BsCart4, BsCartDash, BsCoin, BsDatabaseAdd } from "react-icons/bs";
import { CiLocationOn, CiMenuBurger } from "react-icons/ci";
import { FcPaid, FcDoughnutChart, FcCurrencyExchange, FcContacts, FcSoundRecordingCopyright } from "react-icons/fc";

import './index.css'

const Sidebar = () => {
    const [dashboardArrow, setDashboardArrow] = useState(true);
    const [ordersArrow, setOrdersArrow] = useState(true);
    const [thirdSectionArrow, setThirdSectionArrow] = useState(true);
    const [Categoris, setCategoris] = useState(false);
    const [brands, setBrands] = useState(true);
    const [seller, setSeller] = useState(true);
    const [products, setProducts] = useState(false);
    const [banner, setBanner] = useState(true);

    const handleArrowClick = (section) => {
        switch (section) {
            case 'dashboard':
                setDashboardArrow(!dashboardArrow);
                break;
            case 'orders':
                setOrdersArrow(!ordersArrow);
                break;
            case 'thirdSection':
                setThirdSectionArrow(!thirdSectionArrow);
                break;
            case 'categoris':
                setCategoris(!Categoris);
                break;
            case 'brands':
                setBrands(!brands);
                break;
            case 'products':
                setProducts(!products);
                break;
            case 'seller':
                setSeller(!seller);
                break;
            case 'banner':
                setBanner(!banner);
                break;

            default:
                break;
        }
    };

    return (
        <div className='sidebar-main-container'>
            <h1 className='avvika-heading'>Avikka</h1>
            <div className='sidebar-home-container'>
                {/* first */}
                <div className='list-item-container'>
                    <div className='list-item-row' onClick={() => handleArrowClick('dashboard')}>
                        <div className="list-item-main-container">
                            <h1 className="icons"><FcPaid size={23} /></h1>
                            <h1 className='item-heading'>Dashboard</h1>
                        </div>
                        {dashboardArrow ? (
                            <h1 className="icons"><AiFillCaretLeft size={23} /></h1>
                        ) : (
                            <h1 className="icons"><AiFillCaretDown size={23} /></h1>
                        )}
                    </div>
                </div>
                {/* iner item */}
                {dashboardArrow === false && (
                    <div className='list-item-container' style={{ backgroundColor: "#6c757d", width: "100%" }}>
                        {/* Inner items for Dashboard section */}
                        {/* ... */}
                    </div>
                )}

                {/* second */}
                <div className='list-item-container'>
                    <div className='list-item-row' onClick={() => handleArrowClick('orders')}>
                        <div className="list-item-main-container">
                            <h1 className="icons"><BsCart4 color="yellow" size={23} /></h1>
                            <h1 className='item-heading'>Orders</h1>
                        </div>
                        {ordersArrow ? (
                            <h1 className="icons"><AiFillCaretLeft size={23} /></h1>
                        ) : (
                            <h1 className="icons"><AiFillCaretDown size={23} /></h1>
                        )}
                    </div>
                </div>
                {/* iner item */}
                {ordersArrow === false && (
                    <div className='list-item-container' style={{ backgroundColor: "#6c757d", width: "100%" }}>
                        <div className='list-item-row'>
                            <div className="list-item-main-container">
                                <h1 className="icons"><BsCartDash size={23} /></h1>
                                <Link to="/mmm" style={{ textDecoration: "none" }} className='item-heading hover-effect'>Orders</Link>
                            </div>
                        </div>
                        <div className='list-item-row'>
                            <div className="list-item-main-container">
                                <h1 className="icons"><CiLocationOn size={23} /></h1>
                                <Link to="/mmm" style={{ textDecoration: "none" }} className='item-heading hover-effect'>Orders tracking</Link>
                            </div>
                        </div>
                        <div className='list-item-row'>
                            <div className="list-item-main-container">
                                <h1 className="icons"><IoIosNotificationsOutline size={23} /></h1>
                                <Link to="/mmm" style={{ textDecoration: "none" }} className='item-heading hover-effect'>System Notification</Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* Categoris */}
                <div className='list-item-container'>
                    <div className='list-item-row' onClick={() => handleArrowClick('categoris')}>
                        <div className="list-item-main-container">
                            <h1 className="icons"><FcDoughnutChart size={23} /></h1>
                            <h1 className='item-heading'>Categoris</h1>
                        </div>
                        {Categoris ? (
                            <h1 className="icons"><AiFillCaretLeft size={23} /></h1>
                        ) : (
                            <h1 className="icons"><AiFillCaretDown size={23} /></h1>
                        )}
                    </div>
                </div>
                {/* iner item */}
                {Categoris === false && (
                    <div className='list-item-container' style={{ backgroundColor: "#6c757d", width: "100%" }}>
                        <div className='list-item-row'>
                            <div className="list-item-main-container">
                                <h1 className="icons"><BsCoin size={23} /></h1>
                                <Link to="/mmm" style={{ textDecoration: "none" }} className='item-heading hover-effect'>Category</Link>
                            </div>
                        </div>
                        <div className='list-item-row'>
                            <div className="list-item-main-container">
                                <h1 className="icons"><CiMenuBurger size={23} /></h1>
                                <Link to="/mmm" style={{ textDecoration: "none" }} className='item-heading hover-effect'>Category Orders</Link>
                            </div>
                        </div>
                    </div>
                )}
                {/* Categoris */}

                {/* Brand */}
                <div className='list-item-container'>
                    <div className='list-item-row' onClick={() => handleArrowClick('brands')}>
                        <div className="list-item-main-container">
                            <h1 className="icons"><FcCurrencyExchange size={23} /></h1>
                            <h1 className='item-heading'>Brands</h1>
                        </div>
                        {brands ? (
                            <h1 className="icons"><AiFillCaretLeft size={23} /></h1>
                        ) : (
                            <h1 className="icons"><AiFillCaretDown size={23} /></h1>
                        )}
                    </div>
                </div>
                {/* iner item */}
                {brands === false && (
                    <div className='list-item-container' style={{ backgroundColor: "#6c757d", width: "100%" }}>
                        <div className='list-item-row'>
                            <div className="list-item-main-container">
                                <h1 className="icons"><AiTwotoneDollarCircle size={23} /></h1>
                                <Link to="/mmm" style={{ textDecoration: "none" }} className='item-heading hover-effect'>Orders</Link>
                            </div>
                        </div>

                    </div>
                )}
                {/* Brands */}

                {/* Seller */}
                <div className='list-item-container'>
                    <div className='list-item-row' onClick={() => handleArrowClick('seller')}>
                        <div className="list-item-main-container">
                            <h1 className="icons"><FcContacts size={23} /></h1>
                            <h1 className='item-heading'>Seller</h1>
                        </div>
                        {seller ? (
                            <h1 className="icons"><AiFillCaretLeft size={23} /></h1>
                        ) : (
                            <h1 className="icons"><AiFillCaretDown size={23} /></h1>
                        )}
                    </div>
                </div>
                {/* iner item */}
                {seller === false && (
                    <div className='list-item-container' style={{ backgroundColor: "#6c757d", width: "100%" }}>
                        <div className='list-item-row'>
                            <div className="list-item-main-container">
                                <h1 className="icons"><MdOutlineHomeWork size={23} /></h1>
                                <Link to="/mmm" style={{ textDecoration: "none" }} className='item-heading hover-effect'>Sellers</Link>
                            </div>
                        </div>

                        <div className='list-item-row'>
                            <div className="list-item-main-container">
                                <h1 className="icons"><FaWallet size={23} /></h1>
                                <Link to="/mmm" style={{ textDecoration: "none" }} className='item-heading hover-effect'>Wallets Tranction</Link>
                            </div>
                        </div>

                    </div>
                )}
                {/* Seller */}

                {/* Products */}
                <div className='list-item-container'>
                    <div className='list-item-row' onClick={() => handleArrowClick('products')}>
                        <div className="list-item-main-container">
                            <h1 className="icons"><FcSoundRecordingCopyright size={23} /></h1>
                            <h1 className='item-heading'>Products</h1>
                        </div>
                        {products ? (
                            <h1 className="icons"><AiFillCaretLeft size={23} /></h1>
                        ) : (
                            <h1 className="icons"><AiFillCaretDown size={23} /></h1>
                        )}
                    </div>
                </div>
                {/* iner item */}
                {products === false && (
                    <div className='list-item-container' style={{ backgroundColor: "#6c757d", width: "100%" }}>
                        <div className='list-item-row'>
                            <div className="list-item-main-container">
                                <h1 className="icons"><RiAddBoxFill size={23} /></h1>
                                <Link to="/mmm" style={{ textDecoration: "none" }} className='item-heading hover-effect'>Add Products</Link>
                            </div>
                        </div>
                        <div className='list-item-row'>
                            <div className="list-item-main-container">
                                <h1 className="icons"><BsDatabaseAdd size={23} /></h1>
                                <Link to="/mmm" style={{ textDecoration: "none" }} className='item-heading hover-effect'>Manage Products</Link>
                            </div>
                        </div>
                        <div className='list-item-row'>
                            <div className="list-item-main-container">
                                <h1 className="icons"><RiDisqusLine size={23} /></h1>
                                <Link to="/mmm" style={{ textDecoration: "none" }} className='item-heading hover-effect'>Products FAQs</Link>
                            </div>
                        </div>
                    </div>
                )}
                {/* Products */}

                {/* Banner */}
                <div className='list-item-container'>
                    <div className='list-item-row' onClick={() => handleArrowClick('banner')}>
                        <div className="list-item-main-container">
                            <h1 className="icons"><FcSoundRecordingCopyright size={23} /></h1>
                            <h1 className='item-heading'>Banner</h1>
                        </div>
                        {banner ? (
                            <h1 className="icons"><AiFillCaretLeft size={23} /></h1>
                        ) : (
                            <h1 className="icons"><AiFillCaretDown size={23} /></h1>
                        )}
                    </div>
                </div>
                {/* iner item */}
                {banner === false && (
                    <div className='list-item-container' style={{ backgroundColor: "#6c757d", width: "100%" }}>
                        <div className='list-item-row'>
                            <div className="list-item-main-container">
                                <h1 className="icons"><RiAddBoxFill size={23} /></h1>
                                <Link to="/mmm" style={{ textDecoration: "none" }} className='item-heading hover-effect'>Add Banner</Link>
                            </div>
                        </div>
                        <div className='list-item-row'>
                            <div className="list-item-main-container">
                                <h1 className="icons"><BsDatabaseAdd size={23} /></h1>
                                <Link to="/mmm" style={{ textDecoration: "none" }} className='item-heading hover-effect'>Manage Banner</Link>
                            </div>
                        </div>
                       
                    </div>
                )}
                {/* Banner */}

                {/* third start */}
                <div className='list-item-container'>
                    <div className='list-item-row' onClick={() => handleArrowClick('thirdSection')}>
                        <div className="list-item-main-container">
                            <h1 className="icons"><MdOutlineDashboard size={23} /></h1>
                            <h1 className='item-heading'>Third Section</h1>
                        </div>
                        {thirdSectionArrow ? (
                            <h1 className="icons"><AiFillCaretLeft size={23} /></h1>
                        ) : (
                            <h1 className="icons"><AiFillCaretDown size={23} /></h1>
                        )}
                    </div>
                </div>
                {/* third end */}

            </div>
        </div>
    )
}

export default Sidebar;
