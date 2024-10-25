import React, { useState } from 'react'
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
import styles from './Footer.module.css'

type FooterSection = {
  title: string
  items: Array<{
    text: string
    href: string
  }>
}

const footerSections = [
  {
    title: '企業情報',
    items: [
      { text: 'Bybitについて', href: 'https://www.bybitglobal.com/ja-jp/promo/global/aboutus/' },
      { text: 'Bybit公式グループ', href: 'https://www.bybitglobal.com/ja-jp/promo/global/communities/' },
      { text: 'お知らせ', href: 'https://announcements.bybitglobal.com/ja-JP/' },
      { text: 'お役立ち情報', href: 'https://www.bybitglobal.com/ja-JP/recommended-info/' },
      { text: 'リスク開示書', href: 'https://www.bybitglobal.com/app/terms-service/riskDisclosure' },
      { text: '報告チャンネル', href: 'https://www.bybitglobal.com/ja-jp/help-center/article/Bybit-s-Code-of-Conduct-Policy-and-Reporting-Channel' },
      { text: '採用情報', href: 'https://www.bybitglobal.com/ja-jp/promo/global/careers/' },
      { text: 'イスラムアカウント', href: 'https://www.bybitglobal.com/ja-JP/shariahCompliant' },
      { text: 'Bybitマーケット概要', href: 'https://www.bybitglobal.com/ja-JP/announcement-info/deposit-withdraw/' },
    ],
  },
  {
    title: 'サービス',
    items: [
      { text: 'ワンクリック購入', href: 'https://www.bybitglobal.com/fiat/trade/express/home' },
      { text: 'P2P取引', href: 'https://www.bybitglobal.com/fiat/trade/otc' },
      { text: 'VIPプログラム', href: 'https://www.bybitglobal.com/ja-JP/VIPProgram/intro?from_type=web_navigation_bar' },
      { text: '紹介プログラム', href: 'https://www.bybitglobal.com/ja-JP/referral/' },
      { text: '機関投資家向け', href: 'https://www.bybitglobal.com/ja-JP/institutional' },
      { text: '上場申請', href: 'https://www.bybitglobal.com/ja-JP/trade/spot/listing-apply' },
      { text: '税金計算API', href: 'https://www.bybitglobal.com/ja-JP/tax-api' },
      { text: '監査', href: 'https://www.bybitglobal.com/app/user/proof-of-reserve' },
    ],
  },
  {
    title: 'サポート',
    items: [
      { text: 'ケースを提出', href: 'https://www.bybitglobal.com/ja-JP/help-center/s/webform' },
      { text: 'ヘルプセンター', href: 'https://www.bybitglobal.com/ja-JP/help-center/' },
      { text: 'サポートセンター', href: 'https://www.bybitglobal.com/ja-JP/help-center/case-list' },
      { text: 'Bybitへのご意見', href: 'https://www.bybitglobal.com/ja-JP/user-feedback' },
      { text: 'Bybitアカデミー', href: 'https://learn.bybitglobal.com/ja/' },
      { text: '取引手数料', href: 'https://www.bybitglobal.com/ja-JP/help-center/bybitHC_Article?language=ja&id=000001634' },
      { text: 'API', href: 'https://www.bybitglobal.com/future-activity/ja-JP/developer' },
      { text: '公式チャンネル認証', href: 'https://www.bybitglobal.com/ja-JP/verification' },
    ],
  },
  {
    title: 'プロダクト',
    items: [
      { text: '現物', href: 'https://www.bybitglobal.com/ja-JP/trade/spot/BTC/USDT' },
      { text: 'デリバティブ', href: 'https://www.bybitglobal.com/trade/usdt/BTCUSDT' },
      { text: '資産運用', href: 'https://www.bybitglobal.com/ja-JP/earn/home/' },
      { text: 'ローンチパッド', href: 'https://www.bybitglobal.com/ja-JP/trade/spot/launchpad' },
      { text: 'NFTマケプレ', href: 'https://www.bybitglobal.com/ja-JP/nft/' },
      { text: 'Bybit Card', href: 'https://www.bybitglobal.com/cards' },
      { text: 'ワンランク上の取引を', href: 'https://www.bybitglobal.com/future-activity/ja-JP/tradingview/' },
    ],
  },
];


function FooterSection({ section }: { section: FooterSection }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.section}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.sectionButton}
      >
        {section.title}
        {isOpen ? <ChevronUp className={styles.icon} /> : <ChevronDown className={styles.icon} />}
      </button>
      {isOpen && (
        <ul className={styles.sectionList}>
          {section.items.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {item.text}
                <ExternalLink className={styles.externalIcon} />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Bybitについて</h2>
        <div className={styles.sections}>
          {footerSections.map((section, index) => (
            <FooterSection key={index} section={section} />
          ))}
        </div>

        <div className={styles.pageTopWrapper}>
          <a href="#" className={styles.pageTop}>
            ページ上部
            <ChevronUp className={styles.pageTopIcon} />
          </a>
        </div>

        <ul className={styles.quickLinks}>
          <li>
            <a
              href="https://www.bybitglobal.com/ja-JP/help-center/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.quickLink}
            >
              ヘルプセンター
              <ExternalLink className={styles.externalIcon} />
            </a>
          </li>
          <li>
            <a
              href="https://www.bybitglobal.com/app/terms-service/riskDisclosure"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.quickLink}
            >
              リスク情報
              <ExternalLink className={styles.externalIcon} />
            </a>
          </li>
          <li>
            <a
              href="https://www.bybitglobal.com/ja-JP/help-center/topic-list/terms-of-services#term_of_service"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.quickLink}
            >
              利用規約
              <ExternalLink className={styles.externalIcon} />
            </a>
          </li>
        </ul>

        <p className={styles.companyInfo}>
          Bybit Fintech Limited 仮想通貨取引業者
          <br />
          <br />
          取得ライセンス
          <br />
          キプロス証券取引委員会（CySEC）: 305956090
          <br />
          アスタナ金融サービス庁（AFSA）: 211140900046
        </p>

        <div className={styles.copyright}>
          <small>
          © 2018-2024 Bybit.com. All rights reserved
          </small>
        </div>
      </div>
    </footer>
  )
}