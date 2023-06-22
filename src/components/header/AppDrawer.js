import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; 
import styles from './header.module.css'

const AppDrawer = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <p className={styles.navOptions}>    
          <RouterLink to='/aboutPage' className={styles.link}>
            AboutUs &nbsp;
          </RouterLink>
          &nbsp;
          &nbsp;
          <ScrollLink to='programsection' className={styles.link}>
            Program &nbsp;
          </ScrollLink>
          &nbsp;
          &nbsp;
          <ScrollLink to='why' className={styles.link}>
            Training &nbsp;
          </ScrollLink>
          &nbsp;
          &nbsp;
          <ScrollLink to='fees' className={styles.link}>
            Pricing &nbsp;
          </ScrollLink>
        </p>
      </li>
    </ul>
  );
};

export default AppDrawer;
