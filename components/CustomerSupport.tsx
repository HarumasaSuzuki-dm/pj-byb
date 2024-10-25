import React from "react";
import { Phone, MessageCircle, HelpCircle, ChevronRight, Mail } from 'lucide-react';

import styles from './CustomerSupport.module.css';

export default function CustomerSupport() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    <HelpCircle className={styles.titleIcon} />
                    お客さまサポート
                </h2>

                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>よくあるご質問</h3>
                        <p className={styles.cardText}>
                            お手続きや商品に関するよくあるご質問は
                            <br />
                            下記よりご確認いただけます。
                        </p>
                        <a href="https://www.bybit.com/ja-JP/help-center/" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                            よくあるご質問
                            <ChevronRight className={styles.btnIcon} />
                        </a>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Bybitアカデミー</h3>
                        <p className={styles.scheduleText}>
                            初心者から上級者全員におすすめの暗号資産取引のタートガイド
                            <br />
                            時間がない方でも仮想通貨取引のノウハウをわかりやすく学ぶことができます。
                        </p>
                        <a href="https://www.bybit.com/ja-JP/help-center/s/webform" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                            その他のお問い合わせ
                            <ChevronRight className={styles.btnIcon} />
                        </a>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>サポートデスク</h3>
                        <div className={styles.contactInfo}>
                            <div>
                                
                                <dd>
                                <a href="mailto:support-jp@bybit.com" className={styles.emailLink}>
                                        <Mail className={styles.emailIcon} />
                                        <span className={styles.emailAddress}>support-jp@bybit.com</span>
                                    </a>
                                </dd>
                            </div>
                        </div>
                        <p className={styles.scheduleText}>
                            平日（年末年始を除く）8:00～17:00
                            <br />
                            土・日曜日（祝日、年末年始を除く）9:00～17:00
                        </p>
                        <a href="https://www.bybit.com/ja-JP/help-center/s/webform" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                            その他のお問い合わせ
                            <ChevronRight className={styles.btnIcon} />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}


