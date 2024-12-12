import image from "./pictures/Image.svg"
import star from "./pictures/Star.svg"
import x from "./pictures/x.svg"
import inIcon from "./pictures/in.svg"
import facebook from "./pictures/facebook.svg"
import styles from "./sections.module.css"

function FirstSection() {
    return (
        <section className={ styles.section }>
        <header className={ styles.header }>
            <div>
                <p className={ styles.about }>ABOUT</p>
                <p>I AM DAMIEN</p>
            </div>
            <button className={ styles.sectionBtn }>Know More → </button>
        </header>
        <div className={ styles.mainSection }>
            <img className={ styles.imageSection} src={ image } alt=""></img>
            <div className={ styles.mainSectionContTop }>
                <div className={styles.headerMainSection }>
                    <p className={styles.logoMainParam }><img src={star} alt=""></img>Introduction</p>
                    <p>My journey as a photographer has been a lifelong quest to capture the extraordinary in the ordinary, to freeze fleeting moments in time, and to share the world's beauty as I see it. Based in the enchanting landscapes of the USA, I find inspiration in every corner of this diverse and vibrant country. Join me as we embark on a visual odyssey, where each photograph tells a story, and every frame is a piece of my heart.</p>
                </div>
                <div className={styles.footerMainSection }>
                    <p className={styles.logoMainParam }><img src={star} alt=""></img>Contact Information</p>
                    <div className={ styles.contacts }>
                        <div>
                            <p>Email</p>
                            <p className={ styles.req }>damienbraun@gmail.com</p>
                        </div>
                        <div>
                            <p>Phone Number</p>
                            <p className={ styles.req }>+00 000000000</p>
                        </div>
                    </div>
                    <div className={ styles.btnCont }>
                            <div className={ styles.btnContSocNav }>
                                <button><img src={ facebook } alt=""></img></button>
                                <button><img src={ x } alt=""></img></button>
                                <button><img src={ inIcon } alt=""></img></button>
                            </div>
                            <div className={ styles.otherBtnCont}>
                                <button>Let’s Work</button>
                                <button>Download CV</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default FirstSection;