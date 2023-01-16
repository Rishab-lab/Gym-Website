import Header from "../components/header/header"
import RegisterForm from "../components/registerForm/registerForm"

export default function RegistrationPage (){

    return(
        <main>
            <Header 
                isButtonVisible = {false}
            />
            <RegisterForm/>
        </main>
    )
}