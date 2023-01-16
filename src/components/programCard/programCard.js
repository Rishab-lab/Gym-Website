import style from './programCard.module.css'


export default function ProgramCard ({cardData}) {

    const {
        pic ,
        cardHead ,
        programInfo 
    } = cardData || {}
    return(
        <div className={style.wrapper} id='pr'>
            <div className={style.imageWrapper}>
                <img
                    src={pic}
                    alt = 'fdhjkds'
                    height='100%'
                    width = '100%'
                />
            </div>
            
            <div>
                <h4 className={style.heading}>{cardHead}</h4>
                <p className={style.cardInfo}>
                    {programInfo}
                </p>
            </div>
 

        </div>
    )
}