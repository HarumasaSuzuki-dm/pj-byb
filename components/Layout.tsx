import React from 'react'
import Header from './Header'
// import Breadcrumb from './Breadcrumb'
// import { Footer } from './common/Footer'
// import BackToTop from './common/BackToTop' 
import { ContentItem } from '../data/contentManagementSystem'
import styles from './Layout.module.css'
// import { AdvertiserDisclosure } from '../components/article/AdvertiserDisclosure';
// import { EditorNote } from '../components/article/EditorNote';

type LayoutProps = {
  children: React.ReactNode
  contentItem?: ContentItem
}

export default function Layout({ children, contentItem }: LayoutProps) {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Header />
        {/* {contentItem && <Breadcrumb contentItem={contentItem} />} */}
        {/* <AdvertiserDisclosure /> */}
        {/* <EditorNote content={EDITOR_NOTE_CONTENT} /> */}
        <main className={styles.main}>{children}</main>
        {/* <Footer /> */}
        {/* <BackToTop />  */}
      </div>
    </div>
  )
}