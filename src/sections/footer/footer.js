import React from 'react';
import style from './footer.module.css';
import { FiFacebook, FiYoutube, FiTwitter, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  const pageLinks = [
    {
      icon: <FiFacebook />,
      url: 'https://www.facebook.com',
      text: 'Connect with us on Facebook',
    },
    {
      icon: <FiYoutube />,
      url: 'https://www.youtube.com',
      text: 'Subscribe to our YouTube channel',
    },
    {
      icon: <FiTwitter />,
      url: 'https://www.twitter.com',
      text: 'Follow us on Twitter',
    },
    {
      icon: <FiLinkedin />,
      url: 'https://www.linkedin.com',
      text: 'Connect with us on LinkedIn',
    },
  ];

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.socialLinks}>
          {pageLinks.map(({ icon, url, text }, index) => (
            <a href={url} target="_blank" key={index} className={style.link}>
              <div className={style.icon}>{icon}</div>
              <div className={style.linkText}>{text}</div>
            </a>
          ))}
        </div>
      </div>
      <div className={style.copyRight}>
        &copy; {new Date().getFullYear()} GYM Website. All rights reserved.
      </div>
    </footer>
  );
}
