import style from './feesStructure.module.css'
import FeesCard from '../../components/feesCard/feesCard'
import { Fragment, useDebugValue, useEffect, useState } from 'react'
import { BiRightArrowAlt } from "react-icons/bi";
import { isLoginAtom } from '../../recoilStates';
import { useRecoilValue } from 'recoil';
// BiRightArrowAlt

export default function FeesStructure (){

    const isUserLoggedIn = useRecoilValue(isLoginAtom)
    const userData = JSON.parse(localStorage.getItem('userData'))
    const [subscribedPlan , setPlanSubscribed] = useState('')
    
    useEffect(()=> {
        const {
            planSubscribed
        } = userData?.subscriptionDetail || {}
        if(isUserLoggedIn && planSubscribed){
            setPlanSubscribed(planSubscribed)
        }
    },[])

    const plansWeOffer = [
        {
            passType : 'Day Pass',
            price : '60' ,
            benifits : [
                '1 day plan',
                'Free Gym Access',
                '10 Days Access'
            ],
            stylesData : {
                cardStyle : style.dayCard ,
                buttonStyle : style.dayCardBtn,
            },
            isActive : subscribedPlan === 'Day Pass'
        }
        ,{
            passType : 'Month Pass',
            price : '90',
            benifits : [
                '$90 joining fees',
                'No Contract',
                'Free Gym Access',
                'Free Gym Trainer',
                'Protin Program'
            ],
            stylesData : {
                cardStyle : style.monthCard ,
                buttonStyle : style.monthCardBtn ,
                tickStyle : style.monthCardTick
            },
            isActive : subscribedPlan === 'Month Pass'
        }

    ]

    // pricing plan benifits

    return(
        <section className={style.secWrapper} id = 'fees'>
            <h3 className={style.heading}>Choose Your Best plan</h3>
            <div className={style.mainWrapper}>

            <div className={style.leftSec}>
               {
                plansWeOffer.map(plan => (
                    <FeesCard plan = {plan} />
                ))
               }
            </div>
            <div className={style.rightSec}>
               <h2>
                    From punch pass to monthly or Annual
               </h2>
               <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
               </p>
               <h2>
                 Each Plan Includes
               </h2>
               {
                [...Array(5)].map(benifit => (
                    <div style={{
                        color:'white',
                        display : 'flex',
                        alignItems : 'flex-end',
                        marginBottom : '1rem'
                        
                        }}>
                        <BiRightArrowAlt 
                            style = {{
                                color : '#00b000',
                                fontSize : '1.3rem'
                            }}
                        />
                        Lorem Ipsum is simply dummy text'
                    </div>
                ))
               }

            </div>
          

            </div>
            

        </section>
      
    )
}