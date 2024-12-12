import styles from "./main.module.css"
import Faqs from "./sections/Faqs";
import FirstSection from "./sections/fitstSection"
import FourthSecond from "./sections/fourthSecond";
import SecondSection from "./sections/secondSection";
import ThreeSection from "./sections/threesSection";

function  Main() {

    return (
        <main className={ styles.main }>
           <FirstSection />
           <SecondSection />
           <ThreeSection />
           <Faqs />
           <FourthSecond />
        </main>
    )
}

export default Main;