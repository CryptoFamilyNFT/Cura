import Page1 from './Page1.jsx'
import Page2 from './Page2.jsx'
import Page3 from './Page3.jsx'

export default function LandingPage() {
    return(
        <div className=' flex flex-col'>
            <div>
            <Page1/>
            </div>
            <div>
            <Page2/>
            </div>
            <div>
            <Page3/>
            </div>
        </div>
    )
}