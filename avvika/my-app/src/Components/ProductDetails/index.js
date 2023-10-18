import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LiaShuttleVanSolid } from "react-icons/lia";
import { FaUniregistry, FaDyalog } from "react-icons/fa";
import { TbWallet } from "react-icons/tb";
import axios from 'axios'; // Import Axios

import { ColorRing } from 'react-loader-spinner';

import './index.css'
import Header from '../Header';
import Footer from '../Footer';

const ProductDetails = () => {
    const [item, setItem] = useState({});
    // const [price, setPrice] = useState("")
    const [loading, setLoading] = useState(true);
    const { product_id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // First API call
                const response1 = await axios.get(`http://localhost:8000/product/productdetail/${product_id}`);
                console.log(response1.data)
                setItem(response1.data);
                setLoading(false);

                // Second API call or any other logic can be placed here

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [product_id]); // Add product_id as a dependency to useEffect

    // const addToCart = async (item) => {
    //     try {
    //         // Make an API call to add the item to the cart
    //         const response = await axios.post('http://your-api-endpoint/add-to-cart', { item });
    //         console.log(response.data);

    //         alert(`${item.result.product_categories} added to cart successfully!!`);
    //     } catch (error) {
    //         console.error('Error adding to cart:', error);
    //     }
    // };


    const addToCart = (item) => {
        // Get existing cart items from local storage
        const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = [...existingCartItems, item.result];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        alert(`${item.result.product_categories} Add Successfully!!`);
    };

    return (
        <>
            <Header />
            <div className='product-details-container'>
                <div className='product-details-home-container'>
                    {loading ? (
                        <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                        />
                    ) : (
                        <>
                            <div className='product-left-container'>
                                <div className='image-cont'>
                                    <div className='image-cont-collum'>
                                        <img className='mini-image' src={`http://localhost:8000/${item.result.product_thumnail_img}`} alt={`ImageItem ${product_id + 1}`} />
                                        <img className='mini-image' src={`http://localhost:8000/${item.result.product_thumnail_img}`} alt={`ImageItem ${product_id + 1}`} />
                                        <img className='mini-image' src={`http://localhost:8000/${item.result.product_thumnail_img}`} alt={`ImageItem ${product_id + 1}`} />
                                        <img className='mini-image' src={`http://localhost:8000/${item.result.product_thumnail_img}`} alt={`ImageItem ${product_id + 1}`} />
                                    </div>
                                    <img className='larg-image' src={`http://localhost:8000/${item.result.product_thumnail_img}`} alt={`ImageItem ${product_id + 1}`} />
                                </div>
                            </div>
                            <div className='product-rigth-container'>
                                <div className='product-items'>
                                    <p className='product-item-description'>{item.result.product_description.slice(0, 80)}</p>
                                    <p className='item-description'>xxx (2613 Ratings || 1189 Review)</p>
                                    <div className='price-design'>
                                        <p className='price-item-desc' style={{ marginRight: "10px" }}>Rs.{item.result.product_price - (item.result.product_price * item.result.discount / 100)}</p>
                                        <p className='price-underline' style={{ marginRight: "10px" }}>{item.result.product_price}</p>
                                        <p className='price-green'>Save {item.result.discount}%off</p>
                                    </div>
                                    <div className='best-seller-container'>
                                        <p className='item-color-descrp'><span className='pink-background'>#{item.result.offer}Best Seller in </span>{item.result.highlights}</p>
                                    </div>
                                    <div className='buttom-container'>
                                        <button className='addtocart bluebackground' onClick={() => addToCart(item)}>Add To Cart</button>
                                        <button className='addtocart blackbackground'>Wishlist</button>
                                    </div>

                                    <div className="pincode-container" style={{marginTop:"20px", width:"90%"}}>
                                        <div className="input-con">
                                            <h1><LiaShuttleVanSolid color="#cc5aae" /></h1>
                                            <input className="input-item" type="text" placeholder="Enter Pincode" style={{width:"220px"}}/>
                                        </div>
                                        <div className="input-con">
                                            <button onClick={() => alert("Check")} className="remove-button" style={{ fontSize: "15px", fontWeight: "600", color: "#6600FF" }}>chenge </button>
                                        </div>
                                    </div>

                                    <div className="garenty-container" style={{marginTop:"20px"}}>
                                        <div className='pincode-dis-con'>
                                            <h1><FaUniregistry color="#cc5aae" size={30} style={{marginBottom:"0", paddingBottom:"0"}}/></h1>
                                            <p className='pincode-dis'>100% Genuine Products</p>
                                        </div>
                                        <div className='pincode-dis-con'>
                                            <h1><FaDyalog color="#cc5aae" size={30} style={{marginBottom:"0", paddingBottom:"0"}}/></h1>
                                            <p className='pincode-dis'> Return in 15 Days</p>
                                        </div>
                                        <div className='pincode-dis-con'>
                                            <h1><LiaShuttleVanSolid color="#cc5aae" size={30} style={{marginBottom:"0", paddingBottom:"0"}} /></h1>
                                            <p className='pincode-dis'> Free Delivery above ₹499 </p>
                                        </div>
                                        <div className='pincode-dis-con'>
                                            <h1><TbWallet color="#cc5aae" size={30} style={{marginBottom:"0", paddingBottom:"0"}}/></h1>
                                            <p className='pincode-dis'> Free COD above ₹500 </p>
                                        </div>
                                    </div>

                                    <img style={{width:"95%", height:"100px", marginTop:"20px"}} src='https://media6.ppl-media.com/mediafiles/ecomm/misc/1680602964_1280x272-web.jpg' alt='mobile-notification'/>

                                </div>
                            </div>
                        </>
                    )}
                </div>

            </div>
            <Footer />
        </>
    )
}

export default ProductDetails