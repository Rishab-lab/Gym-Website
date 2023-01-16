import { Fragment } from 'react'
import style from './whyUs.module.css'
import ReactPlayer from 'react-player'


export default function WhyUs () {

    const benifitData = [
        {
            benifit : 'Consultation with Expert',
            explanation : `Contrary to popular belief, Lorem Ipsum is not simply random text. 
            It has roots in a piece of classical Latin literature from 45 BC, 
            making it over 2000 years old.`
        }
        ,{
            benifit : 'Best Work Facilities' ,
            explanation : `Contrary to popular belief, Lorem Ipsum is not simply random text. 
            It has roots in a piece of classical Latin literature from 45 BC, 
            making it over 2000 years old.`
        }
    ]
    return(
        <section className={style.wrapper} id='why'>
            <div className={style.leftSec}>
                <h3 className={style.heading}>Why Choose Us ?</h3>
                <ul className={style.list}>
                {
                    benifitData.map(({ benifit,explanation }) => (
                        <li className={style.listItem}>
                            <p className={style.benifit}>{benifit}</p>
                            <p className={style.explanation}>{explanation}</p>
                        </li>

                    ))
                }

                </ul>
                

            </div>
            <div className={style.rightSec}>

            <ReactPlayer 
                    url='https://youtu.be/X_9VoqR5ojM' 
                    width = '100%'
                    height = '100%'
                    controls = {true}
                    // className={style.video}
                />

            </div>
        </section>
    )
}