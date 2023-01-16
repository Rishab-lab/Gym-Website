import Header from "../components/header/header"


export default function ActivityPage () {

    const userData = JSON.parse( localStorage.getItem('userData') )

    const {
        subscriptionDetail = {}
    } = userData || {}




    return(
        <main >
            <Header isButtonVisible = {false}/>
            <div style={{textAlign : 'center'}}>
                <h2>Welcome to Activity page</h2>
                <h1>showing activity for {subscriptionDetail.planSubscribed}</h1>
            </div> 
        </main>
        
    )
}