import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import Styles from '../style/footer.module.css'

const Footer = () =>{

    const footerUpperBox ={
        backgroundColor:'#C4C4C4',
        height:'150px',
        weight:'100px',
    }
    const footerBottomBox ={
        backgroundColor:'#A9A5A5',
        height:'40px',
        weight:'100px',
    }
    const footerBottomText ={
        position: "relative",
        color:'white',
        fontsize:'18px',
        fontWeight:"bold",
        top: '22%',
    }
    const socialMediaIcons={
        position: "relative",
        color:'#FFFFFF',
        fontSize:'50px',
        marginRight:'30px',
        top:'30%',

    }


    return(
        <div >
            <div style={footerUpperBox}>
                <a href="https://twitter.com/?lang=en"><FontAwesomeIcon style={socialMediaIcons} icon={faTwitter} /></a>
                <a href="https://www.facebook.com/"><FontAwesomeIcon style={socialMediaIcons} icon={faFacebook} /></a>
                <a href="https://www.instagram.com/?hl=en"><FontAwesomeIcon style={socialMediaIcons} icon={faInstagram} /></a>
            </div>
            <div style={footerBottomBox}>
                <span style={footerBottomText}>Copyright ©2022 SecureATM - All rights reserved</span>
            </div>
        </div>
    )
}
export default  Footer