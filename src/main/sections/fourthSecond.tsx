import styles from "./sections.module.css";
import right from "./pictures/left.svg";
import left from "./pictures/right.svg";
import x from "./pictures/x.svg";
import inIcon from "./pictures/in.svg";
import facebook from "./pictures/facebook.svg";
import shape from "./pictures/Shape.svg";
import shapeRate from "./pictures/ShapeRate.svg";

import CommentData from "./CommentData.json";
import { useRef, useState } from "react";

function FourthSecond() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slider = useRef<HTMLDivElement | null>(null);

  function goToSlide(index: number): void {
    if (!slider.current) return;
    const gap =
      window.innerWidth > 1440 ? 30 : window.innerWidth <= 1440 && window.innerWidth >= 670 ? 20 :  20 ;
    const commentSize = window.innerWidth > 1440 ? 512 : window.innerWidth <= 1440 && window.innerWidth >= 670 ? 408 : 358;
    const offset = -index * (commentSize + gap);
    slider.current.style.transform = `translateX(${offset}px)`;
    setCurrentIndex(index);
  }

  function goNext(): void {
    if (currentIndex >= CommentData.length) return;
    goToSlide(currentIndex + 1);
  }

  function goPrev(): void {
    if (currentIndex === 0) return;
    goToSlide(currentIndex - 1);
  }
  return (
    <section className={styles.section}>
      <header className={styles.header2}>
        <div>
          <p className={styles.about}>Testimonials</p>
          <p>What My Clients Say</p>
          <button className={styles.sectionBtn3_2}>
            View All Testimonials →
          </button>
          <p className={styles.total}>Total Reviews</p>
          <p className={styles.countCom}>323</p>
        </div>
        <div className={styles.btnContHeader2}>
          <div>
            <button onClick={goPrev}>
              <img src={left} alt=""></img>
            </button>
            <button onClick={goNext}>
              <img src={right} alt=""></img>
            </button>
          </div>
          <button className={styles.sectionBtn3}>
            View All Testimonials →
          </button>
        </div>
      </header>
      <div className={`${styles.mainSection} ${styles.normal}`}>
        <div ref={slider} className={ styles.comHolder}>
        {CommentData.map((comment, index) => {
          return (
            <div key={index} className={styles.comment}>
              <div className={styles.headerCom}>
                <div>
                  <p>{comment.name}</p>
                  <p className={styles.addresCom}>{comment.addres}</p>
                </div>
                <div className={styles.btnContSocNav}>
                  <button>
                    <img src={facebook} alt=""></img>
                  </button>
                  <button>
                    <img src={x} alt=""></img>
                  </button>
                  <button>
                    <img src={inIcon} alt=""></img>
                  </button>
                </div>
              </div>
              <div className={styles.rate}>
                <img src={ comment.rate >= 1 ? shape : shapeRate} alt=""></img>
                <img src={ comment.rate >= 2 ? shape : shapeRate} alt=""></img>
                <img src={ comment.rate >= 3 ? shape : shapeRate} alt=""></img>
                <img src={ comment.rate >= 4 ? shape : shapeRate} alt=""></img>
                <img src={ comment.rate >= 5 ? shape : shapeRate} alt=""></img>
              </div>
              <p>{comment.text}</p>
            </div>
          );
        })}
        </div>
      </div>
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

export default FourthSecond;
