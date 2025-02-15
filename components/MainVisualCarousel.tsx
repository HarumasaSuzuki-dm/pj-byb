'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import styles from './MainVisualCarousel.module.css'
import LayoutSection from './LayoutSection'

const images = [
  { src: '/images/fv1.png', alt: '暗号資産(仮想通貨)取引するならBybit (バイビット)' },
  { src: '/images/fv2.png', alt: 'Bybit (バイビット)は顧客満足度ランキングNo1' },
  { src: '/images/fv3.png', alt: 'Bybit (バイビット)は初回入金するだけで6,000円分のボーナス' },
]

export default function MainVisualCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev)
  }

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselInner}>
        <div
          className={styles.carouselFlex}
          style={{ width: `${images.length * 100}%`, transform: `translateX(-${currentIndex * (100 / images.length)}%)` }}
        >
          {images.map(({ src, alt }, index) => (
            <div key={index} className="w-full">
              <Image
                src={src}
                alt={alt} // Altテキストを使用
                width={390}
                height={540}
                className="w-full h-full object-cover"
                sizes="(max-width: 390px) 390px, 800px"
              />
            </div>
          ))}
        </div>
      </div>

        <div className="flex justify-center items-center space-x-2"> 
        <button
            onClick={goToPrevious}
            className={styles.carouselButton}
            aria-label="Previous slide"
        >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        <div className={styles.carouselIndicators}>
            <ul className="flex space-x-1 md:space-x-1.5">
            {images.map((_, index) => (
                <li
                key={index}
                className={`${styles.indicator} ${index === currentIndex ? styles.indicatorActive : ''}`}
                ></li>
            ))}
            </ul>
        </div>

        <button
            onClick={goToNext}
            className={styles.carouselButton}
            aria-label="Next slide"
        >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        <button
            onClick={togglePlayPause}
            className={styles.carouselButton}
            aria-label={isPlaying ? 'Pause' : 'Play'}
        >
            {isPlaying ? <Pause className="w-4 h-4 md:w-5 md:h-5" /> : <Play className="w-4 h-4 md:w-5 md:h-5" />}
        </button>
        </div>
        
      </div>

  )
}