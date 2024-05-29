import React from 'react'
import HeaderImg from "../assets/f-logo.png"
import { RxTwitterLogo } from "react-icons/rx";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import FooterImg1 from "../assets/footer img1.png"
import FooterImg2 from "../assets/footer img2.png"
import FooterImg3 from "../assets/footer img3.png"
import FooterImg4 from "../assets/footer img4.png"



const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='end'>
                    <div className='end-icon'>
                        <div className='logo'>
                            <img src={HeaderImg} alt="" />
                            <p> Bistro Bliss</p>
                        </div>

                        <h5>In the new era of technology we look a <br /> in the future with certainty and pride to <br />  for our company and.</h5>
                        <div className='icons'>
                            <div><RxTwitterLogo /> </div>
                            <div> <LuFacebook /> </div>
                            <div> <FaInstagram /> </div>
                            <div> <FaGithub /> </div>
                        </div>
                    </div>
                    <div className='f-category'>
                        <div className='qqq'>
                            <p>Pages</p>
                            <ul>Home</ul>
                            <ul>About</ul>
                            <ul>Menu</ul>
                            <ul>Pricing</ul>
                            <ul>Blog</ul>
                            <ul>Contact</ul>
                            <ul>Delivery</ul>

                        </div>
                        <div className='www'>
                            <p>Utility Pages</p>
                            <ul>Start Here</ul>
                            <ul>Styleguide</ul>
                            <ul>Password Protected</ul>
                            <ul>404 Not Found</ul>
                            <ul>Licenses</ul>
                            <ul>Changelog</ul>
                            <ul>View More</ul>
                        </div>
                    </div>

                    <div className='rrr'>
                        <p>Follow Us On Instagram</p>
                        <div className='footer-img'>
                            <img src={FooterImg1} alt="" />
                            <img src={FooterImg2} alt="" />
                        </div>
                        <div className='footer-img '>
                            <img src={FooterImg3} alt="" />
                            <img src={FooterImg4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='liniya'></div>

            <p className='copyright'>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
        </div>
    )
}

export default Footer