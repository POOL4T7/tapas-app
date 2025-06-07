'use client';
import Image from 'next/image';
import styles from './footer.module.css';
import sparkImg from '@/public/image/divider.png';
import { Contactbtn } from '../contactBtn';
import { SocialMedia } from '../socialMedia';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = (props: any) => {
  const langData = props.langData;
  const LinkT = {
    facebook: 'https://www.facebook.com/people/Mundo-Tapas-Berlin/61572797815481/',
    twitter: 'https://www.twitter.com/',
    instagram: 'https://www.instagram.com/mundo.berlin',
    youtube: 'https://www.youtube.com/',
    linkedIn: 'https://www.linkedin.com/',
    whatsApp:
      'https://wa.me/+493025294284?text=Hallo%20Tapas%20-%20Mundo%20-%20Alt-Mariendorf%20Team&utm_source=website&utm_medium=button&utm_campaign=tapas_mundo&utm_content=whatsapp_button',
  };
  const pathname = usePathname();
  const language = pathname.split("/").filter(Boolean); // Remove empty strings
  const firstSegment = language.find((segment) => ["en", "de", "es"].includes(segment)) || "de";

  const data = {
    img: sparkImg,
    heading: langData.heading,
    heading1: langData.heading1,
    desc: langData.desc,
    linkTag: langData.linkTag,
    link: `${firstSegment}/kontakt`,
    copyWrite: langData.copyWrite,
    powerdby: langData.powerdby,
    imprint:langData.imprint,
    Privacy:langData.Privacy
  };
  return (
    <>
      <footer className={styles.footerN}>
        <div className={styles.footerContainerN}>
          <div className={styles.heading}>{data.heading1}</div>
          <div className={styles.heading}>{data.heading}</div>
          <div className={styles.logo}>
            <Image
              src={data.img}
              width={200}
              height={200}
              alt='Image'
              loading='lazy'
            />
          </div>
          <div className={styles.description}>{data.desc}</div>
          <div className={styles.contactus}>
            <Contactbtn link={''} linkTag={data.linkTag} />
          </div>

          <div className={styles.socialMedia}>
            <SocialMedia socialMedia={LinkT} />
          </div>

          <div className={styles.description}>
            <Link  href={`/${firstSegment ? firstSegment + '/' : ''}impressum`}> {data.imprint} </Link> |{' '}
            <Link  href={`/${firstSegment ? firstSegment + '/' : ''}datenschutzrichtlinie`}> {data.Privacy} </Link>
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
