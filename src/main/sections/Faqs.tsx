import styles from "./sections.module.css";
import DataFaq from "./DataFaq.json";

function Faqs() {

  return (
    <>
      <section className={styles.section}>
        <header className={styles.headerFaq}>
          <div>
            <p className={styles.about}>FAQ’s</p>
            <p>Frequently Asked Questions</p>
          </div>
        </header>
        <div className={styles.mainSectionFaq}>
          {DataFaq.map((faq, index) => {
            return (
              <details key={index}>
                <summary><p className={styles.question}>{faq.question}</p></summary>
                <p className={styles.answer}>{faq.answer}</p>
              </details>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Faqs;
