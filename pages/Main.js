
import { useState, useEffect } from "react";

import Navigation from "../components/nav";
import CourtList_container from "./Main/CourtList_container";

import Styles from "../styles/main/Main.module.css"


export default function Main (){

    const [Courts, setCourts] = useState();
    const [MainURL] = useState("http://127.0.0.1:8080/");
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        fetch(MainURL + "productsDB/Get_dbproduct", {
            method: "GET",
            headers:  {
                "Authorization": "Bearer " + JSON.stringify(localStorage.getItem("JWT"))
            }
        })
        .then((res) => {
            
            res.json().then((res)=>{
                console.log(res);
                setCourts(res);
                setLoading(true);
            })
            
        })
        .catch((err) => {
            console.log(err);
        })

    }, [])

    
    return(
        <>
            <Navigation />

            <article className={Styles.navOptions}>
                <button>
                    Canchas
                </button>
                <button>
                    Anuncios
                </button>
                <button>
                    Clubes
                </button>
            </article>

            <section className={Styles.MainContainer}>
                
                {loading === true ? <CourtList_container props={Courts} /> : <></>}

            </section>
        
        </>
    )

}