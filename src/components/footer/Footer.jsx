import React from 'react';
import { IoLogoReact } from 'react-icons/io5';
import { TbApi } from 'react-icons/tb';
import { RxFramerLogo } from 'react-icons/rx';
import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h2 className="footer__title">Anime[In'yō]</h2>
			<p className="footer__subtitle1">Crafted by <a href="https://github.com/kmaalig" className="footer__link" target="_blank" rel="noreferrer">CyphrSylph</a></p>
			<p className="footer__subtitle2">Powered by these amazing tools:</p>
			<div className="footer__social">
                <a href="https://beta.reactjs.org/" className="footer__social-icon" target="_blank" rel="noreferrer">
                    <IoLogoReact />
                </a>
				<a href="https://animechan.vercel.app/" className="footer__social-icon" target="_blank" rel="noreferrer">
                    <TbApi />
                </a>
				<a href="https://www.framer.com/motion/" className="footer__social-icon" target="_blank" rel="noreferrer">
                    <RxFramerLogo />
                </a>

            </div>
            <span className="footer__copy"></span>
        </div>
    </footer>
  );
}

export default Footer;
