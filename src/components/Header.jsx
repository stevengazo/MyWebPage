import React from 'react';
import aboutImage from '@icons/aboutImg.png';
import menuImage from '@icons/menu.png';
import blogImage from '@icons/blogImg.png';
import contactImage from '@icons/contactImg.png';
import projectImage from '@icons/projectImg.png';

import Style from '@styles/Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={Style.header}>
      <div className={Style.headerHomeContainer}>
        <h1 className={Style.headerTitle}>Home</h1>
        <Image src={menuImage} alt="MenuLogo" className={Style['menuLogo']} />
      </div>
      <div className={Style.headerBody}>
        <ul className={Style.navbarList}>
          <li className={Style.headerListItem}>
            <div className={Style.itemMenuContainer}>
              <Image src={aboutImage} alt="about-menu" className={Style.menuLogoItem} />
              <Link className={Style.navbarLink} href="/">
                About
              </Link>
            </div>
          </li>
          <li className={Style.headerListItem}>
            <div className={Style.itemMenuContainer}>
              <Image src={projectImage} alt="projects-menu" className={Style.menuLogoItem} />
              <Link className={Style.navbarLink} href="/">
                Projects
              </Link>
            </div>
          </li>
          <li className={Style.headerListItem}>
            <div className={Style.itemMenuContainer}>
              <Image src={blogImage} alt="Blog-menu" className={Style.menuLogoItem} />
              <Link className={Style.navbarLink} href="/">
                Blog
              </Link>
            </div>
          </li>
          <li className={Style.headerListItem}>
            <div className={Style.itemMenuContainer}>
              <Image src={contactImage} alt="Contact-Menu" className={Style.menuLogoItem} />
              <Link className={Style.navbarLink} href="/">
                Contact
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
