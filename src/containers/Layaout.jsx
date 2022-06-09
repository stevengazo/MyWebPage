import React from 'react';
import Header from '../components/Header';
import Aside from '../components/Aside';
import Styles from '../styles/Layout.module.css';
const Layout = ({ children }) => {
  return (
      <>
        <Header/>  
        <div className={Styles.gridTemplate}>
                    
            <Aside/>
            <div className={Styles.renderSide}>
              body
            </div>
        </div>      
      </>
    );
  };    
export default Layout;
  
