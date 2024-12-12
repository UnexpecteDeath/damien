import styles from "./article.module.css"
import image from "./pictures/Abstract Design.svg"
import vector from "./pictures/Vector 431 (Stroke).svg"
import imgContainer from "./pictures/Images Container.svg"
import Lenta from "../lenta/lenta";

function Article() {
    return (
        <>
                <article className={ styles.article }>
            <div className={ styles.leftCont }>
                <p>STUNNING PHOTOGRAPHY BY</p>
                <p className={styles.text}>DAMIEN BRAUN</p>
            </div>
            <img className={ styles.centerImage} src={ image }></img>
            <div className={ styles.rightCont }>
                    <div className={styles.contBtn}>
                    LET’S
                <button><img src={ vector } alt=""></img></button>
                    </div>
                <p>WORK TOGETHER</p>
            </div>
        </article>
            <Lenta />
        <div className={ styles.imgContainer }>
            <img src={ imgContainer } alt=""></img>
        </div>
        </>
    );
}


export default  Article;