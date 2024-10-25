import React from 'react';
import styles from './Reliability.module.css';

export default function Reliability() {
  return (
    <section className={`${styles.reliabilitySection}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.titleText}>
            みなさまに
            <br />
            選ばれて
          </span>
          <strong className={styles.titleHighlight}>
            No.1
          </strong>
        </h2>

        <div className={styles.contentWrapper}>
          <div className={styles.awardItem}>
            <img
              src="/images/oricon_2024.png"
              alt="第1位 オリコン顧客満足度 暗号資産取引所2024"
              className={styles.awardImage}
            />
            {/* <span className={styles.footnote}>※1</span> */}
          </div>

          {/* <div className={`${styles.awardItem} ${styles.fullWidth}`}>
            <img
              src="https://sbisec.akamaized.net/sbisec/images/visitor/common/info/top/award_img_01_240410.png"
              alt="SBIグループ 総合口座開設数 1,200万超 ※3"
              className={styles.bannerImage}
            />
          </div> */}

          <div className={styles.badgeContainer}>
            {/* <div className={styles.badgeItem}>
              <img
                src="https://sbisec.akamaized.net/sbisec/images/visitor/common/info/top/award_img_01_240410.png"
                alt="SBIグループ総合口座開設数 1,200万口座"
                className={styles.badgeImage}
              />
            </div> */}
            <div className={styles.badgeItem}>
              <img
                src="/images/new-account.png"
                alt="新規口座開設数300万人"
                className={styles.badgeImage}
              />
            </div>
            <div className={styles.badgeItem}>
              <img
                src="/images/satisfaction.png"
                alt="お客様満足度92.3%"
                className={styles.badgeImage}
              />
            </div>
          </div>

          <div className={styles.noteList}>
            <p className={styles.noteItem}>
              Bybitの革新的なサービスと使いやすいプラットフォームは、多くのユーザーから支持を得ており、2023年10月には新規口座開設数が300万人を突破するという大きな節目を迎えました。この急速な成長は、Bybitが提供する優れた取引環境と豊富な機能が、幅広いユーザーのニーズに応えていることの証です。
            </p>
            <p className={styles.noteItem}>
              お客様の満足度については、驚異の92.3%という高い数値を達成しています。これは、Bybitのカスタマーサポート、取引ツールの使いやすさ、セキュリティ対策など、あらゆる面でお客様の期待を上回るサービスを提供していることの表れです。
            </p >
            <p className={styles.noteItem}>
              Bybitは、これらの成果に満足することなく、今後もお客様のニーズに耳を傾け、より一層のサービス向上に努めてまいります。安全性、利便性、そして革新性を追求し続けることで、暗号資産取引の新たな基準を築き上げていきます。
            </p >
            <p className={styles.noteItem}>
              Bybitを選んでいただいたお客様に心から感謝申し上げるとともに、これからもお客様と共に成長し、暗号資産の未来を切り開いていく所存です。皆様の信頼に応え、最高の取引体験を提供し続けることをお約束いたします。
            </p >
          </div>
        </div>
      </div>
    </section>
  );
}