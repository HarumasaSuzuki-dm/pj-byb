import React from "react";
import Image from "next/image";
import styles from './Services.module.css';

const services = [
  { name: "BTC", icon: "/images/BTC.png", link: "/ja-JP/trade/spot/BTC/USDT/" },
  { name: "ETH", icon: "/images/ETH.png", link: "/ja-JP/trade/spot/ETH/USDT/" },
  { name: "SOL", icon: "/images/SOL.png", link: "/ja-JP/trade/spot/SOL/USDT/" },
  { name: "DEEP", icon: "/images/DEEP.png", link: "/ja-JP/trade/spot/DEEP/USDT/" },
  { name: "SUI", icon: "/images/SUI.png", link: "/ja-JP/trade/spot/SUI/USDT/" },
  { name: "DOGE", icon: "/images/DOGE.png", link: "/ja-JP/trade/spot/DOGE/USDT/" },
  
];

const BankingServices: React.FC = () => {
  return (
    <section id="top-service" className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>商品・サービス</h2>
        <p className={styles.subtitle}>よくご利用される商品サービス</p>
      </header>
      <div className={styles.cardContainer}>
        <div className={styles.gridContainer}>
          {services.map((service, index) => (
            <a 
              key={index} 
              href={service.link} 
              className={styles.serviceItem}
            >
              <Image
                src={`${service.icon}`}
                alt={service.name}
                width={70}
                height={70}
                className={styles.icon}
              />
              <div className={styles.serviceName}>{service.name}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BankingServices;