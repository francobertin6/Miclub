
import Styles from "../../styles/main/CourtList_container.module.css"
import Image from "next/image"


import { useEffect, useState } from "react"


export default function CourtList_container({props}){

    console.log(props)

    const [ThumbnailURl] = useState("http://127.0.0.1:8080/");
    const [images] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        props.map( (element) => {

            element.Thumbnail.map( async (image) => {

                const products = await fetch(ThumbnailURl + "productsDB/sendFiles/products/" + image.name)

                products.blob()
                
                .then(blob => {
                    images.push({src: URL.createObjectURL(blob)})
                })

                setTimeout(() => {
                    setLoading(false);
                }, 2000);
                
            })               
        })
        
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