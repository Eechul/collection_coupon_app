'use client'

import Modal from '@/components/modal/Modal'
import { useRouter } from 'next/navigation'
import { useReducer } from 'react'

export default function ConfirmModal() {
  const router = useRouter()


  return (
    <Modal>
      <div className='w-full h-full bg-white '>
        <div className='text-xl text-center border-b p-4'>사용승인</div>
        <div className='p-6'>
          <div className='flex'>
            <div className='basis-1/2'>사용자</div>
            <div className='basis-1/2'>010-5548-9173</div>
          </div>
          <div className='flex pt-2'>
            <div className='basis-1/2'>사용 포인트수</div>
            <div className='basis-1/2'>20P</div>
          </div>
          <div className='flex pt-2'>
            <div className='basis-1/2'>상품항목</div>
            <div className='basis-1/2'>아이스 아메리카노 1개</div>
          </div>
          <div className='flex pt-6'>
            <button className='w-full p-2 bg-cyan-500 hover:bg-cyan-400' onClick={() => { router.back(); router.push('/certification'); }}>승인</button>
          </div>
        </div>
      </div>
    </Modal>
  )
}