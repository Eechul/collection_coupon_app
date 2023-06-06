'use client'

import CommonHeader from '@/components/header/CommonHeader/CommonHeader'
import { useRouter } from 'next/navigation'

export default function ThreeRowLayout({ main }: { main: React.ReactNode }) {
  const router = useRouter()

  return (
    <div className='flex flex-col h-screen'>
      <CommonHeader title='상품을 선택해주세요.' />
      <div className='flex basis-4/5 justify-center items-center'>
        {main}
      </div>
      <div className='flex flex-row basis-1/5 border-t border-t-gray'>
        <div className='basis-1/2'>
        </div>
        <div className='basis-1/2 border-l border-l-gray'>
          <button className='w-1/2 h-full border-0 border-r-0 text-2xl font-bold bg-cyan-500 hover:bg-cyan-400' onClick={() => { router.push('/save') }}>사용하기</button>
        </div>
      </div>
    </div>
  )
}
