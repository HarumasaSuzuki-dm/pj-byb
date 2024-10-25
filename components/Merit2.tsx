import React from 'react';
import Image from 'next/image';
import styles from './Merit2.module.css';

const Merit2 = () => {
  const merits = [
    {
      number: 1,
      title: "充実した取引環境",
      note: "",
      image: "/images/icon3.png",
      description: "高い流動性と100,000TPSの高度なマッチングエンジンを備え、スムーズな取引を提供します",
    },
    {
      number: 2,
      title: "安心安全のセキュリティ体制",
      image: "/images/icon4.png",
      description: "Bybitはコールドウォレットやマルチシグネチャを採用し、資産を安全に管理しています",
    },
    {
      number: 3,
      title: "年中無休の日本語サポート",
      note: "",
      image: "/images/icon5.png",
      description: "Bybitは24時間365日、日本語でのライブチャットサポートを提供しています",
    },
  ];

  return (
    <section id="merit" className={styles.meritSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <strong className={styles.highlightedText}>
            Bybit<small className={styles.smallText}>で</small>
            仮想通貨取引
            <br className={styles.mobileBreak} />
            をしていただくメリット
          </strong>
        </h2>

        <ol className={styles.meritList}>
          {merits.map((merit, index) => (
            <li key={index} className={styles.meritItem}>
              <div className={styles.meritHeader}>
                <div className={styles.meritNumber}>
                  <span className={styles.meritLabel}>メリット</span>
                  {merit.number}
                </div>
                <span className={styles.meritTitle}>
                  {merit.title}
                  {merit.note && <small className={styles.noteText}>{merit.note}</small>}
                </span>
              </div>
              <div className={styles.meritImageContainer}>
                <Image 
                  src={merit.image} 
                  alt={merit.title} 
                  width={130} 
                  height={130} 
                  className={styles.meritImage}
                />
              </div>
              <p className={styles.meritDescription}>{merit.description}</p>
            </li>
          ))}
        </ol>
        <div className={styles.notes}>
          <p className={styles.note}>
            現物取引、デリバティブ取引、オプション取引など多様な取引タイプが含まれます。また、レバレッジ取引や追証なしのゼロカットシステムなど、トレーダーのニーズに応じた機能が用意されています。取引可能な仮想通貨の種類も豊富で、ビットコイン、イーサリアムなどのメジャーコインから新興のアルトコインまで幅広く取り扱っています。
          </p>
          <p className={styles.note}>
            Bybitは多層防御システムを採用しています。これには、コールドウォレットでの資産保管、二段階認証（2FA）、アンチフィッシング対策などが含まれます。また、定期的なセキュリティ監査を実施し、最新の脅威に対応しています。ユーザーの資産保護を最優先事項とし、業界最高水準のセキュリティ対策を講じています。
          </p>
          <p className={styles.note}>
            ライブチャットやメールを通じて提供されています。日本語に堪能なカスタマーサポートスタッフが、取引に関する質問から技術的な問題まで、幅広い内容に対応します。サポート時間に制限がないため、緊急時でも迅速な対応が可能です。また、初心者向けのガイドや、よくある質問（FAQ）なども日本語で充実しており、自己解決のサポートも行っています。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Merit2;