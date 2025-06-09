import './socialMedia.css';
import '@fortawesome/fontawesome-free/css/all.css';

export const SocialMedia = (props:any) => {
    const data = props.socialMedia;
    return (
        <div className="rounded-social-buttons">
            <a className="social-button facebook aLogo" href={data.facebook} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a className="social-button twitter aLogo" href={data.twitter} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
            </a>
            <a className="social-button linkedin aLogo" href={data.linkedIn} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
            </a>
            <a className="social-button youtube aLogo" href={data.youtube} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
            </a>
            <a className="social-button instagram aLogo" href={data.instagram} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
            </a>
            <a className="social-button whatsapp aLogo" href={data.whatsApp} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
            </a>
        </div>
    );
}
