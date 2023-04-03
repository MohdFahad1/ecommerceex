import React from 'react'
import './Footer.css';
import { FaDiscord, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='footer'>
            <div className='four-column-footer'>
                <div>
                    <h3>Ecommercex</h3>
                    <p>Anything you want we got it right here</p>
                </div>
                <div>
                    <h3>Subscribe to get important updates</h3>
                    <form action='https://formspree.io/f/mbjeagak'>
                    <input type='email' required autoComplete='off' placeholder='YOUR E-MAIL' name='E-Mail'/>
                    <input type='submit' style={{ width:"70px", display:"flex", justifyContent:"center", cursor:"pointer"}}/>
                    </form>
                    </div>
                <div>
                    <h3>Follow Us</h3>
                    <div className='social-icons'>
                    <FaDiscord className='icon'/>
                    <FaInstagram className='icon'/>
                    <FaFacebook className='icon'/>
                    <FaTwitter className='icon'/>
                    </div>
                </div>
                <div>
                    <h3>Call Us</h3>
                    <p>+91 12345678978</p>
                </div>
            </div>
            <hr />
            <div>
                <p>@{new Date().getFullYear()}. All Rights Reserved </p>
                <p>
                    PRIVACY POLICY
                    <br />
                    TERMS & CONDITIONS
                </p>
            </div>
        </div>
    )
}

export default Footer