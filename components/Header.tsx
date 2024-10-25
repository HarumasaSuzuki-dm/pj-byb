import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight, Plus, Minus, HelpCircle, MessageSquare } from 'lucide-react';
import styles from './Header.module.css';
import LayoutSection from './LayoutSection';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

    const toggleMenu = (menu: string) => {
        setExpandedMenu(expandedMenu === menu ? null : menu);
    };
    
    const handleMenuButtonClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        { title: '取引所', link: '/web3' },
        { title: '相場情報', link: '/markets/overview' },
        { title: '特典センター', link: '/task-center?utm_source=uj_header' },
        { title: 'WSOT', link: '/wsot2024' },
    ];
    
    const expandableMenus = [
        {
            title: '暗号資産を購入',
            key: 'buyCrypto',
            subItems: [
                { title: 'P2P取引', link: '/fiat/trade/otc' },
                { title: 'ワンクリック購入', link: '/fiat/trade/express/home' },
                { title: '法定通貨の入金', link: '/fiat/trade/deposit/home' },
                { title: '資産変換', link: '/user/assets/exchange/index?from=uj' },
                { title: '暗号資産を入金', link: '/user/assets/deposit' },
            ],
        },
        {
            title: '現物',
            key: 'spot',
            subItems: [
                { title: '現物取引', link: '/trade/spot/BTC/USDT' },
                { title: '資産変換', link: '/user/assets/exchange/index?from=uj' },
                { title: 'ETP（レバレッジトークン）', link: '/trade/spot/act/lt-landing-page' },
                { title: '取引ボット', link: '/en/tradingbot/' },
                { title: 'OTC取引', link: '/user/assets/otc/index' },
                { title: '現物X', link: '/trade/spot/spotx' },
                { title: 'プレマーケット取引', link: '/trade/spot/pre-market' },
                { title: 'イスラムアカウント', link: '/shariahCompliant' },
            ],
        },
        {
            title: 'デリバティブ',
            key: 'derivatives',
            subItems: [
                { title: 'デリバティブ取引ポータル', link: '/derivatives/ja-JP/derivatives-home?utm_source=derivatives-menu' },
                { title: 'USDT無期限', link: '/trade/usdt/BTCUSDT' },
                { title: 'USDC無期限', link: '/trade/futures/usdc/BTC-PERP' },
                { title: 'インバース無期限', link: '/trade/inverse/BTCUSD' },
                { title: '先物', link: '/trade/option/usdc/BTC' },
                { title: 'オプション', link: '/ja-JP/options-homepage' },
                { title: 'コピートレード', link: '/copyTrade/' },
                { title: 'その他', link: '#' },
            ],
        },
        {
            title: 'ツール',
            key: 'tools',
            subItems: [
                { title: 'コピートレード', link: '/copyTrade/' },
                { title: 'TradeGPT', link: '/tradegpt/chat/' },
                { title: '取引ボット', link: '/tradingbot' },
                { title: 'リーダーボード', link: '/leaderboard/' },
                { title: 'ゴールド&FX', link: '/future-activity/ja-JP/mt5' },
                { title: 'ポジションビルダー', link: '/trade/option/usdc/pb/BTC' },
                { title: 'ワンランク上の取引を', link: '/future-activity/ja-JP/tradingview/' },
                { title: 'デモ取引', link: '#' },
            ],
        },
        {
            title: 'ファイナンス',
            key: 'finance',
            subItems: [
                { title: '資産運用', link: '/earn/home/' },
                { title: 'Bybit仕組商品', link: '/earn/structured-product-intro' },
                { title: '暗号資産ローン', link: '/trade/spot/loan' },
                { title: 'Bybitカード', link: '/cards' },
                { title: 'OTC取引', link: '/user/assets/otc/index' },
            ],
        },
        {
            title: 'ビギナーガイド',
            key: 'beginnerGuide',
            subItems: [
                { title: 'Livestream', link: '/press/overview' },
                { title: 'お知らせ', link: '/announcements/' },
                { title: 'Bybit アカデミー', link: '/learn/' },
            ],
        },
        {
            title: 'もっと見る',
            key: 'more',
            subItems: [
                { title: 'VIPプログラム', link: '/VIPProgram/intro?from_type=web_navigation_bar' },
                { title: '機関投資家向け', link: '/institutional' },
                { title: '紹介プログラム', link: '/referral?utm_source=uj_header' },
                { title: 'アフィリエイトプログラム', link: '/affiliates/v2/' },
                { title: 'ブローカープログラム', link: '/en/broker' },
                { title: 'ヘルプセンター', link: '/help-center/' },
            ],
        },
    ];
    

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <LayoutSection>
                    <div className={styles.navbar}>
                        <div className={styles.mobileMenuButton}>
                            <button
                                type="button"
                                className={styles.menuButton}
                                onClick={handleMenuButtonClick}
                                aria-expanded={isMenuOpen}
                                aria-controls="mobile-menu"
                            >
                                <span className="sr-only">メニューを開く</span>
                                <Menu className={styles.hamburgerIcon} aria-hidden="true" />
                            </button>
                        </div>
                        <div className={styles.logo}>
                            <Link href="/contents/">
                                <span className="sr-only">SBI証券</span>
                                <img
                                    className={styles.logoImage}
                                    src="/images/bybit-logo.svg"
                                    alt="SBI証券"
                                />
                            </Link>
                        </div>
                    </div>
                </LayoutSection>

                {/* Mobile menu */}
                <div id="mobile-menu" className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : styles.mobileMenuClosed}`}>
                    <div className={`${styles.mobileMenuOverlay} ${isMenuOpen ? styles.overlayVisible : styles.overlayHidden}`} onClick={() => setIsMenuOpen(false)}>
                        <div className={`${styles.mobileMenuContent} ${isMenuOpen ? styles.contentVisible : styles.contentHidden}`}>
                            <div className={styles.mobileMenuInner}>
                                <div className={styles.mobileMenuHeader}>
                                    <h2 className={styles.mobileMenuTitle}>メニュー</h2>
                                    <div className={styles.closeButtonContainer}>
                                        <button
                                            type="button"
                                            className={styles.closeButton}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <span className="sr-only">メニューを閉じる</span>
                                            <X className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.mobileMenuBody}>
                                    <nav className={styles.mobileNav}>
                                        <ul className={styles.mobileNavList}>
                                            {menuItems.map((item) => (
                                                <li key={item.title} className={styles.mobileNavItem}>
                                                    <Link href={item.link} className={styles.mobileNavLink}>
                                                        {item.title}
                                                        <ChevronRight className="h-5 w-5" />
                                                    </Link>
                                                </li>
                                            ))}
                                            {expandableMenus.map((menu) => (
                                                <li key={menu.key} className={styles.mobileNavItem}>
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation(); // イベントの伝播を防ぐ
                                                            toggleMenu(menu.key);
                                                        }}
                                                        className={styles.mobileNavLink}
                                                    >
                                                        {menu.title}
                                                        {expandedMenu === menu.key ?
                                                            <Minus className="h-5 w-5" /> :
                                                            <Plus className="h-5 w-5" />
                                                        }
                                                    </button>
                                                    {expandedMenu === menu.key && (
                                                        <ul className={styles.mobileSubNavList}>
                                                            {menu.subItems.map((subItem) => (
                                                                <li key={subItem.title} className={styles.mobileSubNavItem}>
                                                                    <Link href={subItem.link} className={styles.mobileSubNavLink}>
                                                                        {subItem.title}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                    <div className={styles.mobileActionLinks}>
                                        <Link href="/" className={styles.mobileActionLink}>
                                            取引サイト
                                        </Link>
                                        <Link href="https://m.sbisec.co.jp/eatiw011" className={styles.mobileActionLink}>
                                            口座開設
                                        </Link>
                                        <Link href="/ETGate/" className={styles.mobileActionLink}>
                                            ログイン
                                        </Link>
                                    </div>
                                    <div className={styles.mobileHelpLinks}>
                                        <Link href="https://faq.sbisec.co.jp/" target="_blank" rel="noopener noreferrer" className={styles.mobileHelpLink}>
                                            <HelpCircle className="h-5 w-5 mr-1" />
                                            よくある質問
                                        </Link>
                                        <Link href="https://s.sbisec.co.jp/smweb/help/helpDesk.do" target="_blank" rel="noopener noreferrer" className={styles.mobileHelpLink}>
                                            <MessageSquare className="h-5 w-5 mr-1" />
                                            お問い合わせ
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}