import Link from 'next/link';
import './socialMedia.css';
import '@fortawesome/fontawesome-free/css/all.css';

export const SocialMedia = (props: any) => {
  const data = props.socialMedia;
  return (
    <div className='rounded-social-buttons'>
      {/* <Link className="social-button twitter aLogo" href={data.twitter} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-x-twitter"></i>
                        </Link> */}
      <Link
        className='social-button facebook aLogo'
        href={data.facebook}
        target='_blank'
        rel='noopener  nofollow noreferrer'
      >
        <i className='fab fa-facebook-f'></i>
      </Link>
      <Link
        className='social-button instagram aLogo'
        href={data.instagram}
        target='_blank'
        rel='noopener  nofollow noreferrer'
      >
        <i className='fab fa-instagram'></i>
      </Link>
      <Link
        className='social-button whatsapp aLogo'
        href={data.whatsApp}
        target='_blank'
        rel='noopener  nofollow noreferrer'
      >
        <i className='fab fa-whatsapp'></i>
      </Link>
    </div>
  );
};
