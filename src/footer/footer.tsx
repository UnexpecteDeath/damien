import Lenta from "../lenta/lenta";
import styles from "./footer.module.css"
import vector from "./picture/Vector 431 (Stroke).svg"
import x from  "./picture/x.svg"
import inIcon from  "./picture/in.svg"
import facebook from  "./picture/facebook.svg"
import leftFooterImg  from "./picture/footerLeft.svg"
import rightFooterImg  from "./picture/footerRight.svg"

function Footer() {

    return (
        <>
        <Lenta/>
        <footer className={ styles.footer }>
        <img className={styles.borderImg} src={ leftFooterImg }></img>
            <div className={styles.leftFoot}>
                <p>A more meaningful home for photography</p>
                <div className={ styles.rightCont }>
                    <div className={styles.contBtn}>
                    LET’S
                <button><img src={ vector } alt=""></img></button>
                    </div>
                <p>WORK TOGETHER</p>
            </div>
            </div>
            <div className={styles.rightFoot}>
                <div>
                    <p>Home</p>
                    <a href="#">About me</a>
                    <a href="#">me works</a>
                    <a href="#">Testimonials</a>
                </div>
                <div>
                    <p>Clients</p>
                    <a href="#">Klovesto</a>
                    <a href="#">Nukeway</a>
                    <a href="#">Cloven’s</a>
                    <a href="#">MenVol</a>
                </div>
                <div>
                    <p>Portfolio</p>
                    <a href="#">Events</a>
                    <a href="#">Portrait</a>
                    <a href="#">Branding</a>
                    <a href="#">Commerciale</a>
                    <a href="#">Wedding</a>
                </div>
                <div>
                    <p>Services</p>
                    <a href="#">Portraits</a>
                    <a href="#">Events</a>
                    <a href="#">Commercial</a>
                </div>
            </div>
        <img className={styles.borderImgRight } src={ rightFooterImg }></img>
        </footer>
        <div  className={ styles.lenta }>
            <p>Terms & Conditions | Privacy Policy</p>
            <div className={ styles.btnContSocNav }>
                                <button><img src={ facebook } alt=""></img></button>
                                <button><img src={ x } alt=""></img></button>
                                <button><img src={ inIcon } alt=""></img></button>
                            </div>
            <p>© 2024 Damien Braun Photography. All rights reserved.</p>
        </div>
        </>
    );
}

export default Footer;