'use client'

import CommonHeader from '@/components/header/CommonHeader/CommonHeader'
import { useRouter } from 'next/navigation'

interface IThreeRowLayout {
  main: React.ReactNode
  bottom: React.ReactNode
}

export default function ThreeRowLayout({ main, bottom }: IThreeRowLayout) {
  const router = useRouter()

  return (
    <div className='flex flex-col h-screen'>
      <CommonHeader title='상품을 선택해주세요.' />
      <div className='flex basis-4/5 items-center'>
        {main}
      </div>
      <div className='flex basis-1/5 border-t border-t-gray'>
        {bottom}
      </div>
    </div>
  )
}