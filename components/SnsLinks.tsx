import React from 'react'
import Image from 'next/image'
import styles from './SnsLinks.module.css'
import LayoutSection  from './LayoutSection'

const socialLinks = [
  { name: 'Facebook', url: 'https://www.facebook.com/Bybit', icon: 'facebook.svg' },
  { name: 'X', url: 'https://twitter.com/BybitJP', icon: 'twitter.svg' },
  { name: 'Instagram', url: 'https://www.instagram.com/bybit_official/', icon: 'instagram.svg' },
  { name: 'YouTube', url: 'https://www.youtube.com/c/Bybit', icon: 'youtube.svg' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/bybitexchange/', icon: 'linkedin.svg' },
  { name: 'Telegram', url: 'https://t.me/BybitEnglish', icon: 'telegram.svg' },
  { name: 'LINE', url: 'http://nav.cx/3EdNFz0', icon: 'line.svg' },
  { name: 'Discord', url: 'https://discord.com/invite/CeGhhS95fQ', icon: 'discord.svg' }
];


export default function SnsLinks() {
  return (
    <LayoutSection HeadingTitle="SNS公式アカウント" className={styles.snsSection}>
      <div className={styles.snsContainer}>
        <ul className={styles.snsList}>
          {socialLinks.map((link) => (
            <li key={link.name} className={styles.snsItem}>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className={styles.snsLink}>
                <Image
                  src={`/images/${link.icon}`}
                  alt=""
                  width={30}
                  height={30}
                  className={styles.snsIcon}
                />
                <span className={styles.snsName}>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
        
        
      </div>
    </LayoutSection>
  )
}