import React from 'react';
import Image from 'next/image';
import Styles from '../styles/Aside.module.scss';
import Linkedin from '@img/aside/linkedin.png';
import userIMG from '@img/aside/userImg.jpg';
import Instagram from '@img/aside/instagram.png';
import GitHub from '@img/aside/github.png';
import Stack from '@img/aside/stackoverflow.png';
import twitter from '@img/aside/twitter.png';

const Aside = () => {
  return (
    <aside className={Styles['side-bar']}>
      <div className="top-info">
        <div className="container-img">        
          <Image alt="img" src={userIMG} className={Styles['img-user']} layout="responsive" />
        </div>
        <div className={Styles['container-top-info']}>
          <h2 className={Styles['subtitle']}>Steven Gazo</h2>
          <div>
            <p>IT Support Technician</p>
            <p>Student of Informatic Enginner</p>
          </div>
        </div>
      </div>
      <div>
        <ul className={Styles['list-accounts']}>
          <li>
            <Image alt="img" src={Instagram} className={Styles['logo-account']} />
          </li>
          <li>
            <Image alt="img" src={twitter} className={Styles['logo-account']} />
          </li>
          <li>
            <Image alt="img" src={Stack} className={Styles['logo-account']} />
          </li>
          <li>
            <Image alt="img" src={GitHub} className={Styles['logo-account']} />
          </li>
          <li>
            <Image alt="img" src={Linkedin} className={Styles['logo-account']}  />
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
