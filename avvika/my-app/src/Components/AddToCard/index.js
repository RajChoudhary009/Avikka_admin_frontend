import { AiOutlineArrowLeft } from "react-icons/ai";
import { LiaShuttleVanSolid } from "react-icons/lia";
import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode'; // Import the jwt-decode library

import Header from '../Header';
import './index.css'

const AddToCard = () => {
    const [cartItems, setCartItems] = useState([]); // Initialize as an empty array
    const [totalPrice, setTotalPrice] = useState(0);
    const [mobile_num, setMobile_num] = useState("");

    useEffect(() => {
        // Retrieve cart items from local storage
        const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(cartItemsFromLocalStorage);

        // Access token from local storage
        const token = localStorage.getItem('token'); // Replace 'yourTokenKey' with your actual token key

        if (token) {
            // Decode the token to get user information
            const decodedToken = jwt_decode(token);
            const mobile_num = decodedToken.mobile_num;
            setMobile_num(mobile_num)
            // console.log("Decoded Mobile Number:", mobile_num);
        }

    }, []); // Empty dependency array to run the effect only once on mount

    useEffect(() => {
        // Calculate total price when cartItems change
        const calculateTotalPrice = () => {
            const total = cartItems.reduce((acc, item) => {
                const itemPrice = item.product_price - (item.product_price * item.discount / 100);
                return acc + itemPrice * (item.quantity > 0 ? item.quantity : 1);
            }, 0);
            setTotalPrice(total);
        };

        calculateTotalPrice();
    }, [cartItems]);

    const removeFromCart = (index, brand_name) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1); // Remove the item at the specified index
        setCartItems(updatedCartItems);
        // Update local storage
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
        alert(`${brand_name} deleted successfully !!`)
    };


    const updateQuantity = (index, newQuantity) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity = newQuantity;
        setCartItems(updatedCartItems);
        // Update local storage
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    };

    console.log("cart1", cartItems);
    console.log("mobile", mobile_num);
    return (
        <>
            <Header />
            {cartItems.length === 0 ? (
                <div className="empaty-container">
                    <div className="empaty-container-home">
                        <img style={{ width: "70%", height: "68vh" }} alt="addtocart" src="https://previews.123rf.com/images/agshinrajabov/agshinrajabov1811/agshinrajabov181100521/127618306-add-to-card-cyber-monday-vector-icon.jpg" />
                    </div>
                </div>
            ) : (
                <div className='add-card-main-container'>
                    <div className='add-card-home-container'>
                        <h2 className="main-heading" style={{ alignSelf: "flex-start", paddingLeft: "45px" }}><AiOutlineArrowLeft /> My Cart ({cartItems.length})</h2>
                        <div className="pincode-container">
                            <div className="input-con">
                                <h1><LiaShuttleVanSolid color="#cc5aae" /></h1>
                                <input className="input-item" type="text" placeholder="Enter Pincode" />
                            </div>
                            <div className="input-con">
                                <button onClick={() => alert("Check")} className="remove-button" style={{ fontSize: "19px", fontWeight: "600", color: "#6600FF" }}>Check</button>
                            </div>
                        </div>

                        <div className='add-to-cart-item'>
                            {cartItems.map((item, index) => (
                                <div key={index} className="item-container">
                                    <img className='cart-image' src={`http://localhost:8000/${item.product_thumnail_img}`} alt={`ImageItem ${item.product_id + 1}`} />
                                    <div className="item-details-con">
                                        <p className="offers-sub-description modifiy-des">{item.product_description}</p>
                                        <div className="price-details">
                                            <p className='price-item-desc' style={{ marginRight: "10px" }}>Rs.{(item.product_price - (item.product_price * item.discount / 100)) * (item.quantity > 0 ? item.quantity : 1)}</p>
                                            <p className='price-underline' style={{ marginRight: "10px" }}>{item.product_price}</p>
                                            <p className='price-green'>Save {item.discount}%off</p>
                                            {/* {updatePrice(item.product_price - (item.product_price * item.discount / 100))} */}
                                        </div>
                                        <div className="price-details">
                                            <button className="remove-button" onClick={() => removeFromCart(index, item.brand_name)}>remove</button>
                                            <button className="remove-button">Move to Wishlist</button>
                                            <div style={{ marginBottom: "10px" }}>
                                                Qty:
                                                <select
                                                    value={item.quantity}
                                                    onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                                                >
                                                    {[1, 2, 3, 4, 5].map((qty) => (
                                                        <option key={qty} value={qty}>
                                                            {qty}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="procec-to-pay">
                            <div className="total-price-container">
                                <p className="price">Total Price: Rs. <span style={{ color: "green" }}>{totalPrice.toFixed(2)}</span></p>
                                <button className="process-to-pay-btn"> Proceed To Pay</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default AddToCard;
