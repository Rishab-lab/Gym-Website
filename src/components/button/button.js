import style from './button.module.css'


export default function Button ({buttonText,buttonStyle,handleClickButton}) {


    return(
        <button 
            className={`${style.button} ${buttonStyle}`}
             onClick = {handleClickButton}
        >
            {buttonText || 'Get Started'}
        </button>
    )
}