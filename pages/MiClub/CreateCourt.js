
import { useState } from "react";

import Navigation from "../../components/nav";
import Footer from "../../components/footer";

import Styles from "../../styles/miclub/CreateCourt/CreateCourt.module.css"
import Link from "next/link";

export default function CreateCourt(){

    // esto maneja los pasos que se manejaran para la creacion del producto
    const [Steps, setSteps] = useState(1);
    // Guarda la disciplina 
    const [Discipline, setDiscipline] = useState();
    // Cantidad de canchas 
    const [CourtQuantity, setCourtQuantity] = useState();
    // titulo de canchas
    const [CourtName, setCourtName] = useState();
    // precio de cancha
    const [CourtPrice, setCourtPrice] = useState();
    // descripcion de cancha opcional
    const [CourtDescription, setCourtDescription] = useState()
    // manejar division de horarios
    const [Schedules, setSchedules] = useState(1)


    // Handle inputs para informacion de los productos

    const HandleSteps = (e) => {

        let id = e.target.id;

        if(id === "step1"){
            setDiscipline(document.getElementById("discipline").value);
            setCourtQuantity(document.getElementById("quantity").value);
            setSteps(2)
        }
        else if(id === "step2"){
            setSteps(3)
        }
        else if(e.target.className === "back"){
            setSteps(1)
        }
    }

    const HandleDiscipline = (e) => {

        console.log(e.target.value);
        setDiscipline(e.target.value);
    }

    const HandleQuantity = (e) => {

        console.log(e.target.value);
        setCourtQuantity(Number(e.target.value))
    }

    const HandleTitle = (e) => {

        console.log(e.target.value)
        setCourtName(e.target.value);
    }

    const HandlePrice = (e) => {

        console.log(e.target.value);
        setCourtPrice(e.target.value);
    }

    const HandleDescription = (e) => {

        console.log(e.target.value);
        setCourtDescription(e.target.value)
    }

    const HandleSchedules = (e) => {

        const schedules = e.target.value;
        console.log(e.target.value)

        setSchedules(schedules);

    }



    // Funcion necesaria para armar el form del paso 2

    const HandleForm_Step2 = ({props}) => {

        console.log(props)

        let TypeImg = () =>{
                            
                            if(Discipline === "Paddel"){
                                return(
                                    <img className={Styles.CourtImage} src="/images/courtsImg/court_pitch_field_sport_padel_crystal_wall_icon_141863.png"/>
                                )
                            }
                            else if(Discipline === "Tenis"){
                                return(
                                    <img className={Styles.CourtImage} src="/images/courtsImg/pista-de-tenis.png"/>
                                )
                            }
                            else if(Discipline === "Futbol 5" || Discipline === "Futbol 7" || Discipline === "Futbol 11"){
                                return(
                                    <img className={Styles.CourtImage} src="/images/courtsImg/cancha-de-futbol.png"/>
                                )
                            }

        }

        let Surface = () =>{

            if(Discipline === "Paddel"){
                return(
                    <select>
                        <option>cemento</option>
                        <option>cesped</option>
                        <option>cesped sintetico</option>
                    </select>
                )
            }
            else if(Discipline === "Tenis"){
                return(
                    <select>
                        <option>cemento</option>
                        <option>arcilla</option>
                        <option>cesped</option>
                    </select>
                )
            }
            else if(Discipline === "Futbol 5" || Discipline === "Futbol 7" || Discipline === "Futbol 11"){
                return(
                    <select>
                        <option>cesped</option>
                        <option>cesped sintetico</option>
                        <option>cemento</option>
                    </select>
                )
            }
        }

        let articles = [];

        for (let index = 0; index < CourtQuantity; index++) {
            
            articles.push(
                <article className={Styles.Courts}>
                    <div className={Styles.ImgDiv}>
                        <TypeImg />          
                    </div>
                    <div className={Styles.inputsDiv}>

                        <div>
                            <input type="text" placeholder="Nombre de la cancha"/>
                        </div>
                        <br />
                        <div className={Styles.schedules}>
                            <label name="schedules"/>horarios de atencion
                            <select onChange={HandleSchedules}>
                                <option>1</option>
                                <option>2</option>
                            </select>
                            {props <= 1 ? 
                                <div>
                                    <input type="number" placeholder="hs"/>
                                    <input type="number" placeholder="hs"/>
                                </div>                 
                                :
                                <>
                                <div>
                                    <input type="number" placeholder="hs"/>
                                    <input type="number" placeholder="hs"/>
                                </div> 
                                <div>
                                    <input type="number" placeholder="hs"/>
                                    <input type="number" placeholder="hs"/>
                                </div>
                                </>        
                            }
                        </div>
                        
                        <br />
                            <div>
                                <label />Duracion de turno
                                <input type="number" placeholder="hs"/>
                            </div>
                        <br />
                            <div>
                                <label /> Superficie de terreno
                                <Surface />
                            </div>

                    </div>
                </article>
            )
            
        }
        
        return <>{articles}</>
                
            
    }



    if(Steps === 1){
    return(
        <>
        
            <Navigation />

            <section className={Styles.CreateCourt_container}>

                <div className={Styles.CreateCourt} style={{height: "80vh"}}>

                    <div className={Styles.progress}>
                        <button style={{backgroundColor: "chartreuse"}}><li>paso 1</li></button>
                        <img src="/images/flecha-correcta.png"/>
                        <button><li>paso 2</li></button>
                        <img src="/images/flecha-correcta.png"/>
                        <button><li>Finalizar</li></button>
                    </div>

                    <h1>Crear cancha</h1>

                    <form className={Styles.form1}>
                        <input type="text" placeholder="Titulo" onChange={HandleTitle}/>

                        <br />

                        <div>
                        <label name="courts"/> Disciplina: <br />
                        <select onChange={HandleDiscipline} id="discipline">
                            <option value="Paddel">Paddel</option>
                            <option value="Tenis">Tenis</option>
                            <option value="Futbol 5">Futbol 5</option>
                            <option value="Futbol 7">Futbol 7</option>
                            <option value="Futbol 11">Futbol 11</option>
                        </select>
                        </div>

                        <br />

                        <input type="number" placeholder="Precio" onChange={HandlePrice}/>

                        <br />

                        <div>
                        <label name="quantityCourts"/> Cantidad de canchas: <br />
                        <select onChange={HandleQuantity} id="quantity">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                        </div>
                        <br />

                        <textarea name="textarea" rows="10" cols="150" placeholder="Crea una pequeña descripcion de tus canchas" onChange={HandleDescription}></textarea>
                    </form>

                    <div className={Styles.btnContainer}>
                        <Link href={"/MiClub"}><button>Cancelar</button></Link>
                        <button id="step1" onClick={HandleSteps}>Siguiente</button>
                    </div>
                        
                </div>

            </section>


            <Footer />

        </>
    )}
    else if(Steps === 2){
        return(
            <>
            
                <Navigation />

                <section className={Styles.CreateCourt_container}>

                <div className={Styles.CreateCourt}>

                    <div className={Styles.progress}>
                        <button><li>paso 1</li></button>
                        <img src="/images/flecha-correcta.png"/>
                        <button style={{backgroundColor: "chartreuse"}}><li>paso 2</li></button>
                        <img src="/images/flecha-correcta.png"/>
                        <button><li>Finalizar</li></button>
                    </div>

                    <h1>Crear cancha</h1>

                    <form className={Styles.form2}>
                        <HandleForm_Step2 props={Schedules}/>
                    </form>

                    <div className={Styles.btnContainer2}>
                        <button className="back" onClick={HandleSteps}>Volver</button>
                        <button id="step2" onClick={HandleSteps}>Siguiente</button>
                    </div>
                        
                </div>

            </section>


                <Footer />
            
            </>
        )
    }


}