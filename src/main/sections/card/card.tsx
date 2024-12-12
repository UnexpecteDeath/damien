import styles from "./stylesCard.module.css";
import vector from ".././pictures/Vector 431 (Stroke).svg";
import CardData from "./DataCard.json";

function Card() {

  return (
    <>
      {CardData.map((card, index) => {
        return (
          <div className={styles.card} key={index} id="card">
            <img src={card.image}></img>
            <div className={styles.cardInfo}>
              <div>
                <p>{card.name}</p>
                <p className={styles.cardDate}>{card.Date}</p>
              </div>
              <a href={card.link}>
                View Project <img src={vector} alt=""></img>
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
