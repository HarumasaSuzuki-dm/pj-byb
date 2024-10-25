'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import styles from './MainVisualCarousel.module.css'
import LayoutSection from './LayoutSection'

const images = [
  '/images/fv1.png',
  '/images/fv2.png',
  '/images/fv3.png',
  
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
            {images.map((src, index) => (
              <div key={index} className="w-full">
                <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={390}
                height={540}
                className="w-full h-full object-cover" // 画像が親コンテナにフィットするように修正
                sizes="(max-width: 390px) 390px, 800px"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center mt-4 space-x-2 bg-white"> 
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