import React from "react";
import styles from "./AccountOpeningSteps.module.css";

const steps = [
  { number: "❶", title: "口座開設の申し込み", image: "/images/step_img_01.png", alt: "Bybit(バイビット)の口座開設の申し込みの画像" },
  { number: "❷", title: "本人確認書類の提出", image: "/images/step_img_02.png", alt: "Bybit(バイビット)の本人確認書類の提出の画像" },
  { number: "❸", title: "完了通知の受取り", image: "/images/step_img_03.png", alt: "Bybit(バイビット)の完了通知の受取りの画像" },
  { number: "❹", title: "初期設定", image: "/images/step_img_04.png", alt: "Bybit(バイビット)の初期設定の画像" },
];

export default function AccountOpeningSteps() {
  return (
    <section className={`container ${styles.accountOpeningSteps}`}>
      <h2 className={styles.title}>
        <small className={styles.subtitle}>口座開設も</small>
        <strong className={styles.highlightedTitle}>
          スマホで簡単4ステップ！
        </strong>
      </h2>

      <ol className={`vertical-list ${styles.stepList}`}>
        {steps.map((step, index) => (
          <li key={index} className={`card ${styles.stepCard}`}>
            <div className={styles.stepCardBorder}></div>
            <div className={styles.stepContent}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNumber}>{step.number}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
              </div>
              <div className={styles.stepImageContainer}>
              <img
                src={`${step.image}`}
                alt={step.alt}
                className={styles.stepImage}
              />
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className={styles.stepArrow}>
                <span>↓</span>
              </div>
            )}
          </li>
        ))}
      </ol>

      <div className={styles.ctaContainer}>
        <a
          href="https://go.sbisec.co.jp/account/sogoflow_01.html"
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-primary ${styles.ctaButton}`}
        >
          詳しく見る
          <i className={styles.ctaArrow}>→</i>
        </a>
      </div>
    </section>
  );
}