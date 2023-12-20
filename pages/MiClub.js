
import { useState, useEffect, useContext } from "react";

import Navigation from "../components/nav";
import Footer from "../components/footer";
import Options from "../components/options";
import { Clubs_Context } from "../context/Provider_clubs";

import Styles from "../styles/miclub/miclub.module.css"


export default function MiClub(){

    const contexto_club = useContext(Clubs_Context);

    const {Ask_for_clubData, Club_data} = contexto_club

    const [clubData, setClub_data] = useState(Club_data);
    const [Image, setImage] = useState();
    const [clubURL] = useState("http://127.0.0.1:8080/clubDB/");
    const [Loading, setLoading] = useState(false);
    const [SelectActivity, setSelectActivity] = useState("Noticias");

    useEffect(() => {

        console.log(clubData)

        if(clubData === undefined){

        fetch(clubURL + "/getClub", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + JSON.stringify(localStorage.getItem("JWT"))
            }
        })
        .then(async (res) => {
        
            let response = await res.json();
            console.log(response);

            Ask_for_clubData(response);
            setClub_data(response);

            //fetch: llamada para traer la imagen de perfil del club
            const image = await fetch(clubURL + "sendFiles/profilesPictures/" + response.profilePicture, {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + JSON.stringify(localStorage.getItem("JWT"))
                }
            })

            image.blob()

            .then(blob => {
                setImage(URL.createObjectURL(blob))
            })
            .catch(err => {
                console.log(err);
            })

            setLoading(true)

        })
        .catch((err) => {

            console.log(err)

        })
    }else{

        setLoading(true)

    }

    }, [])

    const showOptions = (e) => {

        if(e.target.textContent === "Canchas" ||  e.target.textContent === "Torneos"){

            
            setSelectActivity(e.target.textContent)
            
        }
        else{
            
            
            setSelectActivity("Noticias")

        }

    }

    if(Loading === true){

        return(

        <>

            <Navigation />

            <section className={Styles.MiClub_container}>

                <article className={Styles.MiClub_header}>
                    
                    <div className={Styles.ProfileImg}>
                        <img src={Image} className={Styles.img}></img>
                    </div>

                    <div className={Styles.nameContainer}>
                        <h1>{clubData.name}</h1>
                    </div>

                    <div className={Styles.headerButtons}>
                        <button>Editar perfil</button>
                    </div>

                </article>

                <article className={Styles.Activity_Section}>

                    <div className={Styles.Activity}>

                        <button onClick={showOptions}>Canchas</button>
                        <button onClick={showOptions}>Noticias</button>
                        <button onClick={showOptions}>Torneos</button>

                    </div>

                    {SelectActivity === "Canchas" || SelectActivity === "Torneos" ? <Options props={SelectActivity}/> : <></>}

                    <div className={Styles.Content_Section}>

                        {clubData.courts.length === 0 ? <h6>empty</h6> : <p>este array tiene elementos</p> }

                    </div>
                    

                </article>

            </section>

            <Footer />

        </>
    )
    }
    else{

        <>
            <Navigation />
            
            <Footer />
        </>
        

    }

    

}