import React from 'react';
import aboutImage from '../assets/icons/aboutImg.png';
import menuImage from '../assets/icons/menu.png';
import blogImage from '../assets/icons/blogImg.png';
import contactImage from '../assets/icons/contactImg.png';
import projectImage from '../assets/icons/projectImg.png';

import styles from '../styles/Layout.module.scss';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles['header']}>
      <div>
        <h1 className="header-title">Home</h1>
      </div>
      <div>
        <Image src={menuImage} alt="MenuLogo" className={styles['menu-logo']} />
        <ul className={styles['navbar-list']}>
          <li className={styles['header-list-item']}>
            <div className={styles['item-menu-container']}>
              <Image src={aboutImage} alt="about-menu" className={styles['menu-logo-item']} />             <a className={styles['navbar-link']} href="/">
                About
              </a>
            </div>
          </li>
          <li className={styles['header-list-item']}>
          <div className={styles['item-menu-container']}>
              <Image src={projectImage} alt="projects-menu" className={styles['menu-logo-item logos-desktop']} />
              <a className={styles['navbar-link']} href="/">
                Projects
              </a>
            </div>
          </li>
          <li className={styles['header-list-item']}>
          <div className={styles['item-menu-container']}>
              <Image src={blogImage} alt="Blog-menu" className={styles['menu-logo-item']} />
              <a className={styles['navbar-link']} href="/">
                Blog
              </a>
            </div>
          </li>
          <li className={styles['header-list-item']}>
            <div className={styles['item-menu-container']}>
              <Image src={contactImage} alt="Contact-Menu" className={styles['menu-logo-item']} />
              <a className={styles['navbar-link']} href="/">
                Contact
              </a>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
