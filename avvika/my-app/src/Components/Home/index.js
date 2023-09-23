import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios'; // Import Axios

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Header from "../Header";
import Footer from "../Footer";

import "./index.css";


const Home = () => {
  const [updatedData, setUpdatedData] = useState([]);

  useEffect(() => {
    // Fetch images from your API here
    axios.get('http://localhost:8000/api/carousel/all')
      .then((response) => {
        const data = response.data
        // console.log(data)
        setUpdatedData(data); // Assuming your API returns an array of image URLs
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);


  // ********** first crousel ****************** //
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  // ********** first crousel ****************** //

  // ************ crosusel featured ************* // 
  const imagesList4 = [
    'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/335470/cetaphil-gentle-skin-cleanser-125-ml-83_1_display_1681383019_4a50e5d9.jpg',
    'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/275248/alps-goodness-dragon-fruit-brightening-facial-kit-34-g-19_14_display_1685605217_7fb21401.jpg',
    'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/340771/dermdoc-2-5-percentage-benzoyl-peroxide-face-wash-70-ml_12_display_1693480461_2d17df25.jpg',
    'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/353232/good-vibes-serum-powered-beauty-de-tan-glow-day-cream-ubtan-50-g-25_11_display_1690807498_398a8a7d.jpg',
    'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/349638/engage-w1-perfume-spray-for-women-120-ml-19_1_display_1676376934_a74b9245.jpg',
    'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/344829/lotus-herbals-whiteglow-3-in-1-deep-cleansing-skin-whitening-facial-foam-100-g-12_3_display_1643970067_3ec4d4cf.jpg',
    'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/333323/facescanada-strobe-cream-i-hyaluronic-acid-i-shea-butter-i-instant-hydration-i-flawless-radiance-i-anti-ageing-i-alcohol-free-i-vegan-i-rose-gold-30-g_2_display_1666174391_b0a3f338.jpg',
    // Add more image URLs as needed
  ];
  const settings4 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  // ************ crosusel featured ************* // 

  // ********** second crousel2 BEST SELLERS****************** //
  const imagesList2 = [
    'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/344732/ny-bae-3-in-1-primer-foundation-serum-warm-cashew-03-30-ml-82_1_display_1691506174_2bd9c032.jpg',
    'https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1693545033_gv-ubtan-facewash-banner_web-1.jpg',
    'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/336581/ny-bae-pro-strobe-cream-pink-topaz-12gm-50_8_display_1694171768_dc569fc3.jpg',
    'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/351102/alps-goodness-powder-beetroot-50-g-91-17_1_display_1686221399_df9d5f1d.jpg',
    'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/342903/good-vibes-rosehip-hydrating-glow-face-cream-50-g_12_display_1691653254_8bac403c.jpg',
    'https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1694413874_sugar_long_lasting_makeup-2596x836.jpeg',
    'https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/349585/good-vibes-100-percentage-pure-insta-glow-powder-ubtan-150g-20-16_11_display_1691050514_a83ee079.jpg',
    // Add more image URLs as needed
  ];

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  // ********** second crousel2 BEST SELLERS****************** //

  // ********** third crousel3 ****************** //
  const imagesList3 = [
    'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1694440951_loreal-paris-1.jpg',
    'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1694505687_bella-vita-1.jpg',
    'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1694505687_bella-vita-1.jpg',
    'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1694505762_dermdoc-goodbye-pigmentation.jpg',
    'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1694499773_blue-heaven-1.jpg',
    'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1694505798_ny-bae-by-purplle.jpg',
    // Add more image URLs as needed
  ];

  const settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  // ********** third crousel3 ****************** //

  // ********** 5th crousel5 ****************** //
  const imagesList5 = [
    'https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1694177613_free-serum_web.jpg',
    'https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1694177668_appfirst-web-_999-3.jpg',
    // Add more image URLs as needed
  ];

  const settings5 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // ********** 5th crousel5 ****************** //

  // ********** 6th crousel6 ****************** //
  const settings6 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  // ********** 6th crousel6 ****************** //

  // ********** 7th crousel7 ****************** //
  const imagesList7 = [
    'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1694171730_mamaearth_ubtan_facewash-1476x1028.jpeg',
    'https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1694438493_lotus_herbals_uv_protection-1476x1028.jpeg',
    'https://media6.ppl-media.com/tr:w-640,ar-369-257,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1694171482_gv-ubtan-day-cream_app.jpg',
    'https://media6.ppl-media.com/tr:w-640,ar-369-257,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1694520956_738x514-copy.jpg',
    'https://media6.ppl-media.com/tr:w-640,ar-369-257,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1694171420_faces_hydra_matte-1476x1028.jpeg',
    'https://media6.ppl-media.com/tr:w-640,ar-369-257,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1694502655_exclusivestamp01_hpapp-20.jpg',
    'https://media6.ppl-media.com/tr:w-640,ar-369-257,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1694419277_swiss_beauty___b_for_base-1476x1028-1.jpeg',
    'https://media6.ppl-media.com/tr:w-640,ar-369-257,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1694516362_lakme_eyeconic-1476x1028-10.jpeg',
    // Add more image URLs as needed
  ];
  // ********** 7th crousel7 ****************** //

  return (
    <>
      <Header />
      <div className="home-main-container">
        <div className="home-item-container">

          {/* // ********** first crousel ****************** // */}
          <div className='carousel-main-container'>
            <Slider {...settings}>
              {updatedData.map((eachData, index) => (
                eachData.place === 'first'?(
                <div className="carousel-item1" key={index}>
                  <img className='carousel-image' src={`http://localhost:8000/uploads/${eachData.image_url}`} alt={`ImageItem ${index + 1}`} />
                </div>
                ):null
              ))}
            </Slider>
          </div>
          <img className='imag4' src='https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1693311014_sale-is-live-web.jpg' alt="img4" />
          {/* // ********** first crousel ****************** // */}

          {/* // ************ crosusel featured ************* // */}
          <h1 className='main-heading'>FEATURED</h1>
          <div className='carousel-main-container'>
            <Slider {...settings4}>
              {imagesList4.map((imageUrl, index) => (
                <div className="carousel-item2" key={index}>
                  <img className='carousel-image2' src={imageUrl} alt={`ImageItem ${index + 1}`} />
                  <p className='offers-description'> 3 offers</p>
                  <p className='offers-sub-description'> Alps Goodness Powder - Beetroot (50 g) | 100% Natural Powder | No Chemicals, No Preservatives, No Pesticides  </p>
                  <div className='crosusel-item2-lower-container'>
                    <h5 className='amount-heading'>Rs.119</h5>
                    <h5 className='amount-heading-underline'>Rs103</h5>
                    <h5 className='Amount-off'>30% off</h5>
                  </div>
                  <button className='add-to-cart-button' type='button'>Add to Cart</button>
                </div>
              ))}
            </Slider>
          </div>
          {/* // ************ crosusel featured ************* // */}

          {/* // ********** second crousel2 BEST SELLERS****************** // */}
          <h1 className='main-heading'>BEST SELLERS</h1>
          <div className='carousel-main-container'>
            <Slider {...settings2}>
              {imagesList2.map((imageUrl, index) => (
                <div className="carousel-item2" key={index}>
                  <img className='carousel-image2' src={imageUrl} alt={`ImageItem ${index + 1}`} />
                  <p className='offers-description'> 3 offers</p>
                  <p className='offers-sub-description'> Alps Goodness Powder - Beetroot (50 g) | 100% Natural Powder | No Chemicals, No Preservatives, No Pesticides  </p>
                  <div className='crosusel-item2-lower-container'>
                    <h5 className='amount-heading'>Rs.170</h5>
                    <h5 className='amount-heading-underline'>Rs265</h5>
                    <h5 className='Amount-off'>30% off</h5>
                  </div>
                  <button className='add-to-cart-button' type='button'>Add to Cart</button>
                </div>
              ))}
            </Slider>
          </div>
          <img className='imag4' alt='imag4' src='https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1694441445_thin-strip-web.png' />
          {/* // ********** second crousel2 BEST SELLERS****************** // */}

          {/* // ********** third crousel3 ****************** // */}
          <img className='imag5' alt='imag4' src='https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1694383551_lowest-prices-ever_web.jpg' />
          <div className='carousel-main-container'>
            <Slider {...settings3}>
              {imagesList3.map((imageUrl, index) => (
                <div className="carousel-item3" key={index}>
                  <img className='carousel-image3' src={imageUrl} alt={`ImageItem ${index + 1}`} />

                </div>
              ))}
            </Slider>
          </div>
          {/* // ********** third crousel3 ****************** // */}

          {/* // ********** 5th crousel5 ****************** // */}
          <div className='carousel-main-container'>
            <Slider {...settings5}>
              {imagesList5.map((imageUrl, index) => (
                <div className="carousel-item1" key={index}>
                  <img className='carousel-image-mini' src={imageUrl} alt={`ImageItem ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
          {/* // ********** 5th crousel5 ****************** // */}

          {/* // ********** 6th crousel6 ****************** // */}
          <div className='carousel-main-container'>
            <Slider {...settings6}>
            {updatedData.map((eachData, index) => (
                eachData.place === 'third'?(
                <div className="carousel-item1" key={index}>
                  <img className='carousel-image' src={`http://localhost:8000/uploads/${eachData.image_url}`} alt={`ImageItem ${index + 1}`} />
                </div>
                ):null
              ))}
            </Slider>
          </div>
          {/* // ********** 6th crousel6 ****************** // */}

          {/* // ********** 7th crousel7 ****************** // */}
          <div className='seven-crousel'>
            {imagesList7.map((imageUrl, index) => (
              <div className="seven-crousel-item" key={index}>
                <img className='seven-carousel-image-mini' src={imageUrl} alt={`ImageItem ${index + 1}`} />
              </div>
            ))}
            <img alt='imag4' src='https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1694207290_artboard-1.jpg'/>
          </div>

          {/* // ********** 7th crousel7 ****************** // */}
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Home;
