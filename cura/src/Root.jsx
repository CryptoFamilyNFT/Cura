import { BrowserRouter } from "react-router";
import App from './App.jsx'
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/store.js";

export default function Root() {

    return (
        <BrowserRouter>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    )
}