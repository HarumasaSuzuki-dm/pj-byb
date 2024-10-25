import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./app-features.module.css";

export default function AppFeatures() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLUListElement>(null);

  const apps = [
    {
      image: "/images/app-bybit.png",
      logo: "/images/app-bybit-logo.png",
      title: "Bybit：仮想通貨の取引、購入、コピートレード、Web3",
      description: "Bybitアプリで、ビットコインやイーサリアムなどの暗号資産を簡単・安全に取引。多様な現物やデリバティブ取引、ステーキング、NFT取引、コピートレード機能を備え、初心者から上級者まで幅広くサポート。使いやすさと透明性を追求したアプリ"
    },
   
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollPosition = carouselRef.current.scrollLeft;
        const itemWidth = carouselRef.current.offsetWidth;
        const newSlide = Math.round(scrollPosition / itemWidth);
        setCurrentSlide(newSlide);
      }
    };

    carouselRef.current?.addEventListener('scroll', handleScroll);
    return () => carouselRef.current?.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * carouselRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  const handlePrevious = () => {
    const newSlide = Math.max(currentSlide - 1, 0);
    scrollToSlide(newSlide);
  };

  const handleNext = () => {
    const newSlide = Math.min(currentSlide + 1, apps.length - 1);
    scrollToSlide(newSlide);
  };

  return (
    <section className={`${styles.container} ${styles.section}`}>
      <h2 className={styles.title}>
        <strong className={styles.titleStrong}>
          使いやすいスマホアプリ
        </strong>
        <small className={styles.titleSmall}>
          でらくらくお取引！
        </small>
      </h2>

      <div className={styles.carouselWrapper}>
        <ul ref={carouselRef} className={styles.carousel}>
          {apps.map((app, index) => (
            <li key={index} className={styles.carouselItem}>
              <div className={styles.imageWrapper}>
                <Image
                  src={app.image}
                  alt=""
                  width={200}
                  height={380}
                  className={styles.appImage}
                />
              </div>

              <div className={styles.appInfo}>
                <Image
                  src={app.logo}
                  alt=""
                  width={72}
                  height={72}
                  className={styles.appLogo}
                />
                <div>
                  
                  <h3 className={styles.appTitle}>{app.title}</h3>
                </div>
              </div>

              <p className={styles.appDescription}>{app.description}</p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}