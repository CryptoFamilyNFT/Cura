import { BrowserRouter } from "react-router";
import App from './App.jsx'

export default function Root() {

    return(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    )
}