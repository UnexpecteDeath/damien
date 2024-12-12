import sun from "./picture/Clip path group.svg"
import styles  from "./lenta.module.css"

function Lenta() {

    return (
        <div className={ styles.lenta }>
            <div><img src={ sun } alt=""></img>Event Photography</div>
            <div><img src={ sun } alt=""></img>Comercial Photography</div>
            <div><img src={ sun } alt=""></img>Product Photography</div>
            <div><img src={ sun } alt=""></img>Wedding Photography</div>
            <div><img src={ sun } alt=""></img>Landscape Photography</div>
            <div><img src={ sun } alt=""></img>Branding Photography</div>
            <div><img src={ sun } alt=""></img>Portrait  Photography</div>
        </div>
    );
}

export default Lenta;