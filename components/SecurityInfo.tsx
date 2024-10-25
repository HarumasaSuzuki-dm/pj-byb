import React from "react";
import { Shield, MessageCircle, Users ,ChevronRight} from "lucide-react";
import styles from "./SecurityInfo.module.css";

// ... 既存のコード ...

const SecurityInfo: React.FC = () => {
  const items = [
    {
      imageSrc: "/images/icon4.png", // 画像のパスを指定
      title: "Bybitの安全性への取り組み",
      description: "Bybitは、ユーザーの資産を守るために多層的なセキュリティ対策を講じています。コールドウォレットやマルチシグネチャ技術を採用し、資産の安全性を高めています。",
      buttonText: "セキュリティ対策を見る",
      href: "https://www.bybitglobal.com/ja-JP/promo/global/user-protection"
    },
    {
      imageSrc: "/images/icon6.png", // 画像のパスを指定
      title: "ユーザーの声を大切に",
      description: "Bybitは、ユーザーからのフィードバックを重視し、サービス改善に努めています。日本語対応のカスタマーサポートも充実しており、安心してご利用いただけます。",
      buttonText: "フィードバックを見る",
      href: "https://learn.bybit.com/ja/"
    },
    {
      imageSrc: "/images/icon7.png", // 画像のパスを指定
      title: "ユーザー中心のサービス運営",
      description: "Bybitは、ユーザーの利益を最優先に考えた運営方針を採用しています。ゼロカットシステムにより、ユーザーの損失が証拠金を超えないように配慮しています。",
      buttonText: "運営方針の詳細を見る",
      href: "https://www.bybit.com/ja-JP/promo/global/aboutus"
    },
    {
      imageSrc: "/images/icon8.png", // 画像のパスを指定
      title: "よくあるご質問",
      description: "口座開設や入出金・お取引に関するよくあるご質問は下記よりご確認いただけます。",
      buttonText: "よくあるご質問",
      href: "https://www.bybit.com/ja-JP/help-center/"
    },
    {
      imageSrc: "/images/icon9.png", // 画像のパスを指定
      title: "Bybitアカデミー",
      description: "Bybitは、ユーザーの利益を最優先に考えた運営方針を採用しています。ゼロカットシステムにより、ユーザーの損失が証拠金を超えないように配慮しています。",
      buttonText: "Bybitアカデミー",
      href: "https://learn.bybit.com/ja/"
    },
    {
      imageSrc: "/images/icon10.png", // 画像のパスを指定
      title: "サポートデスク",
      description: "24時間日本語でのお電話でのサポートを行っております。お困りのことがありましたらお気軽にご相談ください。",
      buttonText: "その他のお問い合わせ",
      href: "https://www.bybit.com/ja-JP/help-center/s/webform"
    },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Bybitのお客様サポート</h2>
      <div className={styles.verticalList}>
        {items.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.iconWrapper}>
                <img src={item.imageSrc} alt={item.title} className={styles.icon} />
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
              <div className={styles.buttonWrapper}>
                <a href={item.href} target="_blank" className={styles.btnSecondary}>
                  {item.buttonText}<ChevronRight className={styles.btnIcon} />
                  
                </a>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

// ... 既存のコード ...

export default SecurityInfo;