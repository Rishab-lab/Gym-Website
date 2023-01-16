import style from './registerForm.module.css'
import Button from '../button/button'
import { useState } from 'react'
import { InputTwoTone } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';
import { isLoginAtom } from '../../recoilStates';
import { useSetRecoilState } from 'recoil';

export default function RegisterForm () {
    const [isRequestForLogin , setIsRequestFoLogin] = useState(false)
    const [isError , setIsError] = useState(false)
    const [name , setName] = useState('')
    const [mobile , setMobile] = useState('')
    const [password,setPassWord] = useState('')
    const [isHomeBtnVisible , setIsHomeBtnVisible] = useState(false)

    const nevigate = useNavigate()
    const setLoginStatus = useSetRecoilState(isLoginAtom)
    const userData = JSON.parse( localStorage.getItem('userData') )

    function handleRequest () {
        setIsRequestFoLogin(!isRequestForLogin)
    }
    function handleChange (key,value) {
        setIsError(false)
        if(key === 'name'){
            setName(value)
        }
        if(key === 'mobile'){
            setMobile(value)
        }
        if(key === 'password'){
            setPassWord(value)
        }
    }

    function submitDetail(){

        const inputData = {
            ...(name && {name}),
           ...( mobile && { mobile}),
            ...(password && {password}),
            subscriptionDetail :{
                isSubscribed : false ,
                planSubscribed : ''
            }
        }
        const noOfInputValue = Object.keys(inputData).length

        const {
            mobile : savedMobile,
            password : savedPassWord
        } = userData  || {}

        if(isRequestForLogin){
            if(noOfInputValue !==3){
                setIsError(true)
                return
            }
            if(mobile !== savedMobile || password !== savedPassWord){
                alert('invalid attempt')
                return
            }
            setLoginStatus(true)
            nevigate('/activityPage')
            return
        }

        if(noOfInputValue !== 4){
            setIsError(true)
            return
        }

        if(mobile === savedMobile){
            alert('user Already Exist !! please login to continue')
            return
        }

        localStorage.setItem('userData',JSON.stringify(inputData))
        alert('Registration Successful !!')
        setLoginStatus(true)
        setIsHomeBtnVisible(true)

    }


    if(isHomeBtnVisible){
        return(
            <div className={style.redirectContainer}>
                <p> Please Subscribe our plan from pricing section</p>
                <Button
                    buttonText = 'Go Home'
                    handleClickButton = {
                        ( ) => nevigate('/')
                    }
                />
            </div>
        )
    }
    return(
        <div className={style.wrapper}>

        <div className={style.form}>
            { !isRequestForLogin && <input 
                className={style.inputField}
                placeholder = 'Enter your name'
                value={name}
                onChange={(e) => handleChange('name',e.target.value)}
            />}
            <input
                className={style.inputField}
                placeholder = 'Enter your mobile'
                value={mobile}
                type = 'tel'
                maxLength='10'
                minLength='10'
                onChange={(e) => handleChange('mobile',e.target.value)}
            />
            <input
                className={style.inputField}
                placeholder = 'Enter password'
                type='password'
                value={password}
                minLength='10'
                onChange={(e) => handleChange('password',e.target.value)}
            />
            <p onClick = {handleRequest}>
                Click here to 
                <span style={{
                    color : '#ff0000',
                    marginLeft : '0.5rem',
                    fontWeight : 900 ,
                    cursor : 'pointer'
                    }}>
                    {isRequestForLogin ? 'Register' : 'Login'}
                </span>
            </p>
            { isError && <p className={style.errorText}>
                All the fields are mandetory
            </p>}
            <Button
                buttonStyle={style.submitBtn}
                buttonText = 'Submit'
                handleClickButton={submitDetail}
            />
            

        </div>

        </div>
        
    )
}