'use client'
import React from 'react';
import Layout from '../components/Layout'; // Layoutコンポーネントをインポート
import Footer from '../components/common/Footer';
import Head from 'next/head';

import MainVisualCarousel from '../components/MainVisualCarousel'; // MainVisualCarouselコンポーネントをインポート
import CTA from '../components/CTA'; // CTAコンポーネントをインポート
import Merit1 from '../components/Merit1'; 
import Merit2 from '../components/Merit2'; 
import Reliability from '../components/Reliability'; 
import Services from '../components/Services'; 
import AppFeatures from '../components/app-features'; 
import AccountOpeningSteps from '../components/AccountOpeningSteps'; 
import SecurityInfo from '../components/SecurityInfo'; 
import CustomerSupport from '../components/CustomerSupport'; 
import SnsLinks from '../components/SnsLinks'; 

export default function HomePage() {
  return (
    <>
    <Head>
      <title>Bybit(バイビット) | ビットコイン、アルトコインの取引・購入・売却</title>
      <meta name="description" content="このページのメタディスクリプションをここに記述します。" />
    </Head>
    <Layout>
      <MainVisualCarousel />
      <CTA />  
      <Merit1 />
      <Merit2 />
      <Reliability />
      <Services />
      <AppFeatures />
      <AccountOpeningSteps />
      <SecurityInfo />
      <CustomerSupport />
      <SnsLinks />
      <Footer />
    </Layout>
    </>
  );
}
