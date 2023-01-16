import style from './about.module.css'
import Button from '../../components/button/button'
import motivator from '../../../src/images/motivator.png'
import ReactPlayer from 'react-player/lazy'


// flexOne from '../../../src/commonStyle.module.css';

export default function About () {

    return(
        <section className={style.wrapper} id='abo'>

            <div className={style.leftSec} >
                <ReactPlayer 
                    url='https://youtu.be/CwM5H1k02RI' 
                    width = '100%'
                    height = '100%'
                    controls = {true}
                    // className={style.video}
                />
            </div>
            
            <div className={style.rightSec}>
                <h3 className={style.heading}>About Us</h3>
                <p className={style.aboutUsText}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <Button 
                    buttonStyle={style.buttonStyle}
                    buttonText = 'Learn More'
                />

            </div>
            
        </section>
    )
}