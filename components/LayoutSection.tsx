import React from 'react'
import styles from './LayoutSection.module.css'

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';

type LayoutSectionProps = {
  children: React.ReactNode
  className?: string
  Htag?: HeadingTag
  HeadingTitle?: string
  HeadingSubtitle?: string
}

export default function LayoutSection({ children, className, Htag = 'h2', HeadingTitle, HeadingSubtitle }: LayoutSectionProps) {
  const HeadingComponent = Htag as keyof JSX.IntrinsicElements;

  const headingClassName = `${styles.sectionHeading} ${Htag === 'h1' ? styles.sectionHeadingH1 : ''} ${HeadingSubtitle ? styles.withSubtitle : ''}`;

  return (
    <section className={`${styles.section} ${className || ''}`}>
      <div className={styles.sectionInner}>
        {HeadingTitle && (
          <HeadingComponent className={headingClassName}>
            {HeadingSubtitle && (
              <span className={styles.sectionSubtitle}>{HeadingSubtitle}</span>
            )}
            <span className={styles.sectionTitle}>{HeadingTitle}</span>
          </HeadingComponent>
        )}
        {children}
      </div>
    </section>
  )
}