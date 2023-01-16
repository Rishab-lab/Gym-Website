import { Fragment, useRef, useState } from 'react'
import style from './progrm.module.css'
import { BsFillArrowRightCircleFill , BsFillArrowLeftCircleFill} from "react-icons/bs";


export default function ProgramSec () {



    function GetTrainerCard ({data}) {
        
        return(
            <div className={style.card} id='pro'>
                <div className={style.imageWrapper}> 
                    <img 
                        width='100%'
                        height='100%'
                        alt='fgf'
                        src={data.programPic}
                    />
                </div>
                <p className={style.programName}>{data.progamName}</p>
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

    const programData = [
        {
            programPic : 'https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            progamName : 'Yoga'
        },
        {
            programPic : 'https://images.pexels.com/photos/1638324/pexels-photo-1638324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            progamName : 'Body Building'
        },
        {
            programPic : 'https://images.pexels.com/photos/6455784/pexels-photo-6455784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            progamName : 'Aeobic'
        },
        {
            programPic : 'https://images.pexels.com/photos/3820441/pexels-photo-3820441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            progamName : 'Flexibility'
        },
        {
            programPic : 'https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            progamName : 'Yoga'
        },
        {
            programPic : 'https://images.pexels.com/photos/1638324/pexels-photo-1638324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            progamName : 'Body Building'
        },
        {
            programPic : 'https://images.pexels.com/photos/6455784/pexels-photo-6455784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            progamName : 'Aeobic'
        },
        {
            programPic : 'https://images.pexels.com/photos/3820441/pexels-photo-3820441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            progamName : 'Flexibility'
        },
        
    ]


    return (
        <section id = 'programsection'>
            <h3 className={style.primaryHeading}> Training Program </h3>
            <h4 className={style.secondaryHeading}> To train you like professionals</h4>
            <div className={style.wrapper}>

            <div className={style.scrollContainer}  id = "slider">
                {
                    programData.map((data,index) => (
                        <GetTrainerCard 
                            data = {data}
                            key = {index}
                        />
                    ))
                }
            </div>

                <BsFillArrowRightCircleFill 
                    style={{fontSize : '2rem'}} 
                    onClick = {handleClickRightArrow}
                    className={style.rightArrow}
                    />
                <BsFillArrowLeftCircleFill 
                    style={{fontSize : '2rem'}} 
                    onClick = {handleClickLeftArrow}
                    className={style.leftArrow}
                    />

            </div>

               
               

        </section>
      
    )
}