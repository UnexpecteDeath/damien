import styles from "./sections.module.css";
import right from "./pictures/left.svg";
import left from "./pictures/right.svg";
import Card from "./card/card";
import { useRef, useState } from "react";
import CardData from "./card/DataCard.json";
function ThreeSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slider = useRef<HTMLDivElement | null>(null);

  function goToSlide(index: number): void {
    if (!slider.current) return;
    const gap =
      window.innerWidth > 1440 ? 50 : window.innerWidth <= 1440 && window.innerWidth >= 670 ? 30 :  30 ;
    const cardSize = window.innerWidth > 1440 ? 499 : window.innerWidth <= 1440 && window.innerWidth >= 670 ? 406 : 358;
    const offset = -index * (cardSize + gap);
    slider.current.style.transform = `translateX(${offset}px)`;
    setCurrentIndex(index);
  }

  function goNext(): void {
    if (currentIndex >= CardData.length) return;
    goToSlide(currentIndex + 1);
  }

  function goPrev(): void {
    if (currentIndex === 0) return;
    goToSlide(currentIndex - 1);
  }

  return (
    <section className={styles.section}>
      <header className={styles.header3}>
        <div>
          <p className={styles.about}>PORTFOLIO</p>
          <p>EXPLORE MY PHOTOGRAPHY WORK.</p>
        </div>
        <button className={styles.sectionBtn3_1}>
          View All Works →
          </button>
        <div className={`${styles.btnContHeader2} ${styles.noMargin}`}>
          <div>
            <button onClick={goPrev}>
              <img src={left} alt=""></img>
            </button>
            <button onClick={goNext}>
              <img src={right} alt=""></img>
            </button>
          </div>
          <button className={styles.sectionBtn2}>View All Works →</button>
        </div>
      </header>
      <div className={styles.mainSection3} id="cards">
        <div ref={slider} className={styles.cardholder}>
          <Card />
        </div>
      </div>{" "}
      <div className={`${styles.btnContHeader2} ${styles.visible}`}>
      <div>
            <button onClick={goPrev}>
              <img src={left} alt=""></img>
            </button>
            <button onClick={goNext}>
              <img src={right} alt=""></img>
            </button>
          </div>
      </div>
    </section>
  );
}

export default ThreeSection;
