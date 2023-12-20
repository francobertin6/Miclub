
import Styles from "../styles/components/options/options.module.css"
import Link from "next/link"

export default function Options({props}){

    
    if(props === "Canchas"){

        return(
            <>
                <section className={Styles.Options}>
                    <Link href="/MiClub/CreateCourt">
                        <button>
                            Nueva cancha
                        </button>
                    </Link>
                    <button>
                        Modificar
                    </button>
                    <button>
                        Borrar
                    </button>
                </section>

        </>
        )
    }
    else if(props === "Torneos"){

        return(
            <>
                <section className={Styles.Options}>
                    <button>
                        Crear torneo
                    </button>
                    <button>
                        Borrar
                    </button>
                </section>
            </>
        )
    }
    
   
}