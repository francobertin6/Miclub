
import Styles from "../styles/global.css"
import { Provider } from "react-redux";
import { store } from "../states/store";


export default function App({Component, pageProps}){

    return(

        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
            
             
    )

}