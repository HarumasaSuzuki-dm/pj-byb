import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, AlertCircle, ExternalLink } from 'lucide-react'
import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.spaceY8}>
          {/* NISA Application Section */}
          <div className={styles.textCenter}>
            <div className={styles.heading}>
              <span className={styles.redLine}></span>
              登録だけでボーナスをゲット！
              <span className={styles.redLine}></span>
            </div>
            <Link
              href="https://partner.bybit.com/b/mdsf"
              target="_blank"
              className={styles.linkButton}
            >
              今すぐ登録
              <ChevronRight className={styles.icon} />
            </Link>
          </div>

          {/* Account Opening Process Link */}
          <div className={styles.textCenter}>
            <Link
              href="https://www.bybit.com/ja-jp/recommended-info/content/how-to-register-and-create-an-account-with-Bybit-blt5b3291e0e20b0c21/"
              target="_blank"
              className={styles.linkText}
            >
              口座開設の流れ
              <ExternalLink className={styles.iconSmall} />
            </Link>
          </div>

          {/* Information Box */}
          <div className={styles.infoBox}>
            <div className={styles.infoHeading}>
              <AlertCircle className={styles.icon} />
              ご案内
            </div>
            <ul className={styles.infoList}>
              <li>
                <Link
                  href="https://announcements.bybitglobal.com/ja-jp/article/jp-bybit-campaign--bltfb722fce92baea1e/"
                  target="_blank"
                  className={styles.linkText}
                >
                  最新のキャンペーン情報について
                  <ExternalLink className={styles.iconSmall} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.bybitglobal.com/ja-JP/help-center/article/Individual-KYC-FAQ"
                  target="_blank"
                  className={styles.linkText}
                >
                  本人確認（KYC）について
                  <ExternalLink className={styles.iconSmall} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Pick Up Campaign Section */}
          <div className={styles.campaignSection}>
          <div className={`${styles.heading} ${styles.spaceBetween}`}>
              <span className={styles.blueLine}></span>
              ピックアップキャンペーン
              <span className={styles.blueLine}></span>
            </div>
            <Link
              href="https://www.bybitglobal.com/ja-JP/wsot2024"
              target="_blank"
              className={`${styles.fullWidthLink} ${styles.spaceBetween}`}
            >
              <Image
                src="/images/pick-up-campaign.png"
                alt="Pick Up Campaign"
                width={800}
                height={160}
                className={styles.image}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}