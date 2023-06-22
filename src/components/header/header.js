import styles from './header.module.css'
import logo from '../../images/gymLogo.png'
import { GoListUnordered } from "react-icons/go";
import { Fragment, useState } from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll';
import Button from '../button/button';
import { useNavigate } from 'react-router-dom';
import AppDrawer from './AppDrawer';


export default function Header({isButtonVisible = true}) {

    const [isShowingMenu, setIsShowingMenu] = useState(false)

   

    const nevigate = useNavigate()

    function handleClickJoinUsBtn () {
        nevigate('/register')
    }

    function GetMobileNavOptions () {
        return(
            <div className={styles.menuOption}>

            <div className={styles.closeBtnWrapper}>
                <AiFillCloseCircle 
                    fontSize='25' 
                    onClick={() => setIsShowingMenu(!isShowingMenu)}
                />
            </div>
            <AppDrawer/>
        </div>
        )
    }

    return (
        <Fragment>
            <header className={styles.headerWrapper}>

                <RouterLink to='/'>
                    <picture className={styles.logoWrapper} >
                        <img
                            src={logo}
                            className={styles.logo}
                            alt='logo'
                        >
                        </img>
                    </picture>
                </RouterLink>

                <nav className={styles.navBar}>
                   
                    <p  className={styles.navOptions}>
                        <RouterLink to='/aboutPage' className={styles.link}>
                            AboutUs &nbsp;
                        </RouterLink> 
                        <ScrollLink to='programsection' className={styles.link}>
                            Program &nbsp;
                        </ScrollLink>
                        <ScrollLink to='why' className={styles.link}>
                            Training &nbsp;
                        </ScrollLink>
                        <ScrollLink to='fees' className={styles.link}>
                        Pricing &nbsp;
                        </ScrollLink>
                    </p>
                </nav>
               {isButtonVisible && <Button 
                    buttonStyle = {styles.buttonStyle}
                    buttonText = 'Join Us'
                    handleClickButton={handleClickJoinUsBtn}
                />}

                <GoListUnordered
                    className={styles.menu}
                    onClick={() => setIsShowingMenu(!isShowingMenu)}
                />

            </header>

            { isShowingMenu && <GetMobileNavOptions/>  }

        </Fragment>

    )
}


