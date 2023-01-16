import { Fragment, useRef, useState } from 'react'
import style from './trainer.module.css'
import { BsFillArrowRightCircleFill , BsFillArrowLeftCircleFill} from "react-icons/bs";


export default function Trainer () {
    const scrollRef = useRef(null)
    const scrollBy = useRef(null)



    function GetTrainerCard ({num}) {
        return(
            <div className={style.card} >
                <div className={style.imageWrapper}> 
                    <img 
                        src='https://images.pexels.com/photos/5409506/pexels-photo-5409506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        width='100%'
                        height='100%'
                    />
                </div>
                <p className={style.trainerName}>
                   Baburao Apte
                </p>
                

            </div>
        )
    }


    function handleClickLeftArrow () {
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 300
    }
    function handleClickRightArrow () {
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 300
    }




    return (
        <Fragment>
            <h3 className={style.primaryHeading}> We have experienced trainer </h3>
            <h4 className={style.secondaryHeading}> To train you like professionals</h4>
            <div className={style.wrapper}>

            <div className={style.scrollContainer} ref = {scrollRef} id = "slider">

                {
                    [1,2,3,4,5,6,7,8,9].map(ele => (
                        <GetTrainerCard num = {ele}/>
                    ))
                }
            </div>

                <BsFillArrowRightCircleFill 
                    style={{fontSize : '3rem'}} 
                    onClick = {handleClickRightArrow}
                    className={style.rightArrow}
                    />
                <BsFillArrowLeftCircleFill 
                    style={{fontSize : '3rem'}} 
                    onClick = {handleClickLeftArrow}
                    className={style.leftArrow}
                    />

            </div>

               
               

        </Fragment>
      
    )
}