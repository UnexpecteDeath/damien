import styles from "./sections.module.css"
import image2 from "./pictures/Image (1).svg"
import vector from "./pictures/Vector 431 (Stroke).svg"
import right from "./pictures/left.svg"
import left from "./pictures/right.svg"
import star from "./pictures/Clip path group.svg"

function SecondSection() {
    return (
        <section className={ styles.section }>
        <header className={ styles.header3 }>
            <div>
                <p className={ styles.about }>SERVICES</p>
                <p>MY PHOTOGRAPHY SERVICES</p>
            </div>
            <div className={ styles.btnContHeader }>
                <div>
                    <button><img src={ left } alt=""></img></button>
                    <button><img src={ right } alt=""></img></button>
                </div>
                <button className={ styles.sectionBtn2 }>View All Services →</button>
            </div>
        </header>
        <div className={ styles.mainSection2 }>
            <div className={ styles.mainSectionContTop2 }>
                <div className={styles.headerMainSection2 }>
                    <p className={styles.logoMainParam2 }>EVENTS <button className={ styles.eventsBtn }><img src={ vector } alt=""></img></button></p>
                    <p>Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.</p>
                </div>
                <div className={styles.footerMainSection2 }>
                    <p className={styles.NameMainParam }>Service Highlights</p>
                    <div className={styles.services}>
                        <div><img className={ styles.star } src={ star } alt=""></img>Coverage for weddings, parties, corporate functions, and more.</div>
                        <div><img className={ styles.star } src={ star } alt=""></img>Skilled photographers who know how to seize the moment.</div>
                        <div><img className={ styles.star } src={ star } alt=""></img>A mix of candid and posed shots for a comprehensive story.</div>
                        <div><img className={ styles.star } src={ star } alt=""></img>Quick turnaround for you to relive the day's highlights.</div>
                    </div>
                </div>
            </div>
                <img className={ styles.imageSection2 } src={ image2 } alt=""></img>
        </div>
    </section>
    )
}

export default SecondSection;