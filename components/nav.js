
import Image from "next/image";
import Style from "../styles/Navigation/Navigation.module.css";
import Link from "next/link";

export default function Navigation(){

    return(
        <article id="Nav_container" className={Style.nav}>

            <h1>Tu Club</h1>

            <ul id="Nav_options" className={Style.nav_options}>
                <li>Reservar canchas</li>
                <li>Clubes</li>
                <li>Quienes somos</li>
                <li>Como asociarme</li>
            </ul>

            <div id="Nav_menu" className={Style.nav_menu}>
                <div>
                    <Link href="/Home">
                        <Image
                            src="/images/Nav_icon/casa.png"
                            height={40}
                            width={40}
                            alt="casa"
                        />
                    </Link>
                       
                    <Link href="/Home/login">
                        <Image
                            src="/images/Nav_icon/acceso.png"
                            height={40}
                            width={40}
                            alt="login"
                        />
                    </Link>
                    <Link href="/CreateClub/data">
                        <button>Unir mi club</button>
                    </Link>
                    
                </div>
                <div>
                    <label>Home</label>
                    <label>Acceso</label>
                </div>
            </div>

        </article>
    )

}