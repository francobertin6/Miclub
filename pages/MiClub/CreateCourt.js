
import { useState } from "react";

import Navigation from "../../components/nav";
import Footer from "../../components/footer";

import Styles from "../../styles/miclub/CreateCourt/CreateCourt.module.css"


export default function CreateCourt(){

    return(
        <>
        
            <Navigation />

            <section className={Styles.CreateCourt_container}>

                <div className={Styles.CreateCourt}>

                    <div className={Styles.progress}>
                        <li>paso 1</li>
                        <li>paso 2</li>
                    </div>

                    <h1>Crear cancha</h1>

                    <form>
                        <input type="text" placeholder="Titulo"/>

                        <br />

                        <label name="courts"/> Disciplina:
                        <select>
                            <option value="Paddel">Paddel</option>
                            <option value="Tenis">Tenis</option>
                            <option value="Futbol 5">Futbol 5</option>
                            <option value="Futbol 7">Futbol 7</option>
                            <option value="Futbol 11">Futbol 11</option>
                        </select>

                        <br />

                        <input type="number" placeholder="Precio"/>

                        <br />

                        <label name="quantityCourts"/> Cantidad de canchas:
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>

                        <br />

                        <textarea name="textarea" rows="10" cols="150" placeholder="Crea una pequeña descripcion de tus canchas"></textarea>
                    </form>

                    <div className={Styles.btnContainer}>
                        <button>Cancelar</button>
                        <button>Siguiente</button>
                    </div>
                        
                </div>

            </section>


            <Footer />

        </>
    )



}