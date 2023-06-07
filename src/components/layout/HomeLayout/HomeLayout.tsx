"use client"

import { useRouter } from "next/navigation"

export default function HomeLayout({ main }: { main: React.ReactNode }) {
  const router = useRouter()

  return (
    <div className='flex flex-col h-screen'>
      <div className='flex basis-4/5 justify-center items-center'>
        {main}
      </div>
      <div className='flex basis-1/5 border-t border-t-gray'>
        <div className='basis-1/2'>
        </div>
        <div className='basis-1/2 border-l border-l-gray'>
          <button className='w-2/4 h-full border-0 border-r-0 text-2xl font-bold' onClick={() => { router.push('/use') }}>사용 / 조회</button>
          <button className='w-2/4 h-full border-0 border-r-0 text-2xl font-bold bg-cyan-500 hover:bg-cyan-400' onClick={() => { router.push('/save') }}>적립</button>
        </div>
      </div>
    </div>
  )
}
