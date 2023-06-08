'use client'

import CommonHeader from '@/components/header/CommonHeader/CommonHeader'
import { useRouter } from 'next/navigation'

export default function ThreeRowLayout({ main }: { main: React.ReactNode }) {
  const router = useRouter()

  return (
    <div className='flex flex-col h-screen'>
      <CommonHeader title='상품을 선택해주세요.' />
      <div className='flex basis-4/5 items-center'>
        {main}
      </div>
      <div className='flex basis-1/5 border-t border-t-gray'>
        <div className='basis-3/4'>
          <div>
            <div>내 포인트 20P</div>
            <div>사용할 포인트 20P</div>
          </div>
        </div>
        <div className='basis-1/2 border-l border-l-gray'>
          <button className='w-full h-full border-0 border-r-0 text-2xl font-bold bg-cyan-500 hover:bg-cyan-400' onClick={() => { router.push('/save') }}>20P 사용하기</button>
        </div>
      </div>
    </div>
  )
}