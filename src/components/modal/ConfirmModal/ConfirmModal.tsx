'use client'

import Modal from '@/components/modal/Modal'
import { useRouter } from 'next/navigation'
import { useReducer, useState } from 'react'

export default function ConfirmModal({ setState, phoneNumber, usePoint, products }: any) {
  const router = useRouter()

  return (
    <Modal title="사용승인" setState={setState}>
      <div className='p-6'>
        <div className='flex'>
          <div className='basis-1/2'>사용자</div>
          <div className='basis-1/2'>{phoneNumber}</div>
        </div>
        <div className='flex pt-2'>
          <div className='basis-1/2'>사용 포인트수</div>
          <div className='basis-1/2'>{usePoint}P</div>
        </div>
        <div className='flex pt-2'>
          <div className='basis-1/2'>상품항목</div>
          <div className='basis-1/2'>
            {products.map((p: { id: string, name: string, number: number }) => (
              <div key={p.id}>{p.name} {p.number}개</div>
            ))}
          </div>
        </div>
        <div className='flex pt-6'>
          <button className='w-full p-2 bg-cyan-500 hover:bg-cyan-400' onClick={() => { router.push("/certification/use") }}>승인</button> {/*router.push("/certification?page=save")*/}
        </div>
      </div>
    </Modal>
  )
}