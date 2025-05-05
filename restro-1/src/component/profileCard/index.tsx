import { BsInstagram, BsTwitter } from 'react-icons/bs';
import './profileCard.css';
import { FaFacebook } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
export const ProfileCard = () => {
  return (
    <div className='profile-card'>
      <header>
        <Link href='/#'>
          <Image
            alt='img'
            width={10}
            height={10}
            src='https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
        </Link>

        <h1>Arthur Lee​</h1>
        <h2>Founder / Lead Chef​</h2>
      </header>

      <div className='profile-bio'>
        <p>
          Terence is an avid reader of science fiction, especially anything to
          do with aliens and tweed jackets. Most weekends, he can be found
          cataloguing his collection of rodent skeletons.
        </p>
      </div>

      <ul className='profile-social-links'>
        <li>
          <Link href='https://twitter.com/'>
            <BsTwitter size={25} />
          </Link>
        </li>

        <li>
          <Link href='https://instagram.com/'>
            <BsInstagram size={25} />
          </Link>
        </li>

        <li>
          <Link href='https://facebook.com'>
            <FaFacebook size={25} />
          </Link>
        </li>
      </ul>
    </div>
  );
};
