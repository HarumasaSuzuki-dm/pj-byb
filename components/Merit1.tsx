import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import styles from './Merit1.module.css'

export default function Merit1() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textCenter}>
          <h2 className={styles.heading}>
            
            Bybitで仮想通貨取引を始めよう
            
          </h2>
        </div>

        <h3 className={styles.title}>
          <span className={styles.subtitle}>Bybitなら</span>
          <span className={styles.highlight}>
            リスクを分散させて
            <sup className={styles.sup}></sup> 大きなリターンを
          </span>
          <span className={styles.subtitle}>狙えます!</span>
        </h3>

        <div className={styles.flexContainer}>
          <div className={styles.relative}>
            <Image
              src="/images/merit-spread.png"
              alt="ゼロ革命 業界初※2の手数料革命 現物も信用も国内株式売買手数料0円 ※1"
              width={300}
              height={300}
              className={styles.image}
            />
            <Link href="https://www.bybit.com/ja-JP/help-center/article/Trading-Fee-Structure" className={styles.link}>
              スプレッド詳細
              <ChevronRight className={styles.icon} />
            </Link>
          </div>

          <div className={styles.cross}>
            <span className={styles.crossLine}></span>
            <span className={styles.crossLine}></span>
          </div>

          <div className={styles.relative}>
            <Image
              src="/images/merit-levarege.png"
              alt="新NISA 2024年から投資上限額が引き上げ！非課税期間も無期限に 投資可能額が増え、ずっと非課税に！"
              width={300}
              height={300}
              className={styles.image}
            />
            <Link href="https://www.bybit.com/ja-JP/trade/spot/act/lt-landing-page" className={styles.link}>
              レバレッジ詳細
              <ChevronRight className={styles.icon} />
            </Link>
          </div>
        </div>

        <div className={styles.notes}>
          <p className={styles.note}>
            Bybitは、トレーダーの皆様に卓越した取引体験を提供する世界有数の仮想通貨デリバティブ取引所です。当取引所の最大の特長は、業界屈指の狭いスプレッドと最大100倍のハイレバレッジにあります。
          </p>
          <p className={styles.note}>
            当社の革新的な取引エンジンにより、ビットコインやイーサリアムなどの主要仮想通貨ペアで、驚異的な狭さを誇るスプレッドを実現しています。これにより、トレーダーの皆様は取引コストを大幅に削減し、より効率的な取引戦略を展開することが可能となります。
          </p>
          <p className={styles.note}>
            さらに、Bybitでは最大100倍のレバレッジ取引をご利用いただけます。この強力なツールにより、少額の証拠金で大きなポジションを取ることができ、潜在的な利益を最大化する機会を提供しています。
          </p>
          <p className={styles.note}>
            当社の高度なリスク管理システムと組み合わせることで、ハイレバレッジ取引をより安全に行うことができます。また、直感的なユーザーインターフェースと24時間365日のカスタマーサポートにより、初心者から上級者まで、すべてのトレーダーの皆様に快適な取引環境を提供しています。
          </p>
          <p className={styles.note}>
            Bybitは常に最先端の技術と革新的なサービスを追求し、トレーダーの皆様のニーズに応え続けます。狭いスプレッドと高レバレッジを活用し、仮想通貨市場での取引を最大限に活用しましょう。Bybitで、あなたの取引体験を次のレベルへ引き上げてください。
          </p>
          
        </div>
      </div>
    </section>
  )
}