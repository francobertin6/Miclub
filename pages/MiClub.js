
import { useState, useEffect } from "react";

import Navigation from "../components/nav";


export default function MiClub(){


    const [clubURL] = useState("http://127.0.0.1:8080/clubDB/");


    return(

        <>

            <Navigation />


        </>
    )

}