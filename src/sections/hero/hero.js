import styles from './hero.module.css'
import bodyBuilder from '../../images/bodyBuilder.png'
import Button from '../../components/button/button'
import { isLoginAtom } from '../../recoilStates'
import { useRecoilValue } from 'recoil'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function HeroSection () {
    const isUserLoggedIn = useRecoilValue(isLoginAtom)
    const userData = JSON.parse(localStorage.getItem('userData'))
    const isSubscribed = userData?.subscriptionDetail?.isSubscribed
    
    const [buttonData , setButtonData] = useState({
        buttonText : 'Join Us',
        page : '/register'
    })

    const nevigate = useNavigate()

    useEffect( () => {
        
        if(isUserLoggedIn && isSubscribed){
            setButtonData({
                buttonText : 'Get Started' ,
                page : '/activityPage'
            })
        }

        if(isUserLoggedIn && !isSubscribed){
            setButtonData({
                buttonText : 'Subscribe Now',
                page : ''
            })
        }

    },[])

    function handleClickButton () {

        if(buttonData.page){
            nevigate(buttonData.page)
            return
        }
        // else scroll to pricing section
        alert('Scroll to Pricing section')
        //  add login to scroll t the pricing section 

    }




    return (
        <div className={styles.wrapper}>
            <img 
                src={'https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5004.jpg?w=740&t=st=1673882319~exp=1673882919~hmac=70db45e80d318f84d0080703c48a2d7900ae3b6a76a6d27ce1634273bb0817a0'} 
                height ='100%'
                width = '100%'
            />

            <div className={styles.btnContainer}>
                <p className={styles.para}>
                    "Take care of your  
                    <span className={styles.highlightText}> body . </span> 
                    It is the only place you have to  
                    <span className={styles.highlightText}> live</span>."
                </p>
                <Button 
                    buttonStyle={styles.buttonStyle}
                    buttonText = {buttonData.buttonText}
                    handleClickButton = {handleClickButton}
                />
            </div>
        </div>
    )
}