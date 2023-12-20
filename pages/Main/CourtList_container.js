
import Styles from "../../styles/main/CourtList_container.module.css"
import Image from "next/image"

import { Products_Context } from "../../context/Provider_products.js"

import { useEffect, useState, useContext } from "react"


export default function CourtList_container({props}){

    const contexto = useContext(Products_Context);

    const { images } = contexto;

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, 2000);
                
    }, [])
    
    if(loading === true){

        return(
            <>
        
            </>
        )
        
    }else{

        return(
            <>
            {props.map( (Element, idx) => {

                return(
                    <article className={Styles.CourtContainer}>
                        
                        <img src={images[idx].src} alt="images" className={Styles.images}/>
                    
                        <h3>{Element.title}</h3>

                        <p>Superficie: {Element.surface}</p>

                        <p>Precio: {Element.price}</p>

                    </article>
                )
                
            })}
            </>
        ) 
    }
   
}