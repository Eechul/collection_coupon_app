"use client"

import { useRouter } from "next/navigation"

export default function UseCompletion() {
  const router = useRouter()

  return (
    <div className='flex flex-col h-screen'>
      <div className='flex basis-4/5 justify-center items-center'>
        <p>포인트를 사용(10P)하셨습니다. 남은 포인트는 0P 입니다.</p>
      </div>
      <div className='flex basis-1/5 border-t border-t-gray'>
        <div className='basis-3/4'>
        </div>
        <div className='basis-1/4 border-l border-l-gray'>
          <button className='w-full h-full border-0 border-r-0 text-2xl font-bold' onClick={() => { router.push('/') }}>돌아가기</button>
        </div>
      </div>
    </div>
  )
}
