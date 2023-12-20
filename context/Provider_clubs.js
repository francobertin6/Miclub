
import { createContext, useState, useEffect } from "react";

export const Clubs_Context = createContext();

const { Provider } = Clubs_Context;

const Provider_clubs = ({children}) => {

    const [Club_data, setClub_data] = useState()

    // funcion que pregunta y setea los datos del club del usuario
    const Ask_for_clubData = (value) => {
        setClub_data(value);
    }

    const contextValue = {
        Club_data,
        Ask_for_clubData
    }

    return(
        <Provider value={contextValue}>
            {children}
        </Provider>
    )

}

export default Provider_clubs;