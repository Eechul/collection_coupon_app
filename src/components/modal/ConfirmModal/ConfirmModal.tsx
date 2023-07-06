'use client'

import Modal from '@/components/modal/Modal'
import { useRouter } from 'next/navigation'
import { useReducer, useState } from 'react'

export default function ConfirmModal({ setState }: any) {
  const router = useRouter()

  return (
    <Modal title="사용승인" setState={setState}>
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
          <button className='w-full p-2 bg-cyan-500 hover:bg-cyan-400' onClick={() => { router.push('/certification') }}>승인</button>
        </div>
      </div>
    </Modal>
  )
}