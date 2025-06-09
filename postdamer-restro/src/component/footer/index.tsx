"use client";
import Image from "next/image";
import Link from "next/link";

import styles from "./footer.module.css";
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from "react-icons/fa";
import sparkImg from '../../../public/image/divider.png'
import { ContackBtn } from "@/component/contactBtn";
import { SocialMedia } from "@/component/socialMedia";



const FooterTwo = () => {


    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    <div className={styles.left}>
                        <div className={styles.location}>
                            <FaSearchLocation size={20} style={{ color: '#fff' }} />
                        </div>
                        <div className={styles.location}>
                            <p>123</p>
                            <h4>  Lorem ipsum dolor</h4>
                        </div>
                        <div className={styles.detailP_E}>
                            <FaPhone size={20} style={{ color: '#fff' }} />
                        </div>
                        <div className={styles.detailP}>
                            +915425323352
                        </div>
                        <div className={styles.detailP_E}>
                            <FaMailBulk size={20} style={{ color: '#fff' }} />
                        </div>
                        <div className={styles.detailP}>
                            abc@gmail.com
                        </div>

                    </div>
                    <div className={styles.right}>
                        <h4>About the company</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perspiciatis sit, ipsum repellendus
                            a adipisci corporis ea? Tempora laboriosam iusto inventore tenetur.</p>

                        <div className={styles.social}>
                            <FaFacebook size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                            <FaTwitter size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                            <FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
}
const Footer = () => {

    const Link={
        facebook:'https://www.facebook.com/',
        twitter:'https://www.twitter.com/',
        instagram:'https://www.instagram.com/',
        youtube:'https://www.youtube.com/',
        linkedIn:'https://www.linkedin.com/',
        whatsApp:'https://www.whatsapp.com/'

    }

    const data = {
        img: sparkImg,
        heading: 'Lets Eat',
        desc: 'We trust that we can offer a particular Indian feel with a brilliant, warm environment and our great and customary dishes. Relax with us, enjoy the concept, and experience Delhi.',
        linkTag: 'Contact Us',
        link:'/contact',
        copyWrite: 'Copyright © 2024 Saurabh| Credits',
        powerdby: 'Powered by Saurabh'


    }
    return (
        <>
            <footer className={styles.footerN}>

                <div className={styles.footerContainerN}>
                    <div className={styles.heading}>
                        {data.heading}
                    </div>
                    {/* <div className={styles.logo}><Image src={data.img} width={200} height={200} alt=''/></div> */}
                    <div className={styles.description}>
                        {data.desc}
                    </div>
<div className={styles.contactus}>
                    <ContackBtn  link={data.link} linkTag={data.linkTag}/>
</div>


                    <div className={styles.socialMedia}>
                        <SocialMedia socialMedia={Link}/>
                    </div>

                    <div>
                    </div>
                </div>
                <div className={styles.copyWrite}>
                    <div className={styles.copyWriteMsg}>{data.copyWrite}</div>
                    <div className={styles.powerdbyMsg}>{data.powerdby}</div>
                </div>

            </footer>
        </>
    );
};

export default Footer;