import React from 'react'
import Image from 'next/image'
import LayoutSection from './LayoutSection'

const socialLinks = [
  { name: 'TikTok', url: 'https://www.tiktok.com/@sbisec_smimi', icon: 'tiktok.svg' },
  { name: 'Instagram', url: 'https://www.instagram.com/sbisec_official/', icon: 'instagram.svg' },
  { name: 'X', url: 'https://x.com/SBISEC', icon: 'x.svg' },
  { name: 'LINE', url: 'https://page.line.me/612ydiax', icon: 'line.svg' },
  { name: 'Facebook', url: 'https://www.facebook.com/sbisec/', icon: 'facebook.svg' },
  { name: 'YouTube', url: 'https://www.youtube.com/channel/UCQHZXj_ZXCHuwWLiHHahetQ', icon: 'youtube.svg' },
]

export default function Component() {
  return (
    <LayoutSection HeadingTitle="SNS公式アカウント" className="bg-[#E6E8F0] text-[rgba(0,0,0,0.95)] py-8 md:py-12">
      <div className="max-w-[390px] mx-auto">
        <ul className="flex flex-wrap justify-center gap-x-1 gap-y-4 mb-4">
          {socialLinks.map((link) => (
            <li key={link.name} className="w-[72px]">
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="block text-center">
                <Image
                  src={`https://sbisec.akamaized.net/sbisec/images/common/logo/sns/${link.icon}`}
                  alt=""
                  width={40}
                  height={40}
                  className="mx-auto mb-2"
                />
                <span className="text-xs">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs mb-3">※他社ウェブサイトに遷移します。</p>
        <p>
          <a
            href="https://go.sbisec.co.jp/lp/lp_sns_list_20210721.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#092987] hover:underline"
          >
            SNS公式アカウント一覧
            <span className="ml-1 font-icon text-sm">&#x25B6;</span>
          </a>
        </p>
      </div>
    </LayoutSection>
  )
}