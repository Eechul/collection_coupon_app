"use client"

import ConfirmModal from "@/components/modal/ConfirmModal/ConfirmModal"
import { useAppSelector } from "@/redux/hooks"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function ProductBottomRow() {
  const router = useRouter()
  /* 핸드폰번호에 대한 유저 정보도 selector로 가져와서, '내 포인트' 띄워주기 */
  const datas = useAppSelector(state => state.productReducer.products)
  const [usePoint, setUsePoint] = useState(0)
  const [shownConfirmModal, setShownConfirmModal] = useState(false)


  useEffect(() => {
    console.log("datas 22", datas)
    const point = datas
      .filter(p => p.number > 0)
      .reduce((acc, cur) => { return acc += cur.number * cur.point }, 0)
    setUsePoint(point)
  }, [datas])

  return (
    <>
      <div className='basis-3/4 text-2xl'>
        <div className='flex flex-col h-full justify-center p-6'>
          <div>내 포인트 <span className='font-bold'>20</span> P</div>
          <div>사용할 포인트 <span className='font-bold'>{usePoint}</span> P</div>
        </div>
      </div>
      <div className='basis-1/2 border-l border-l-gray text-2xl'>
        {/* <button className='w-full h-full border-0 border-r-0 font-bold bg-cyan-500 hover:bg-cyan-400'>20P 사용하기</button> */}
        <button className='w-full h-full border-0 border-r-0 font-bold bg-cyan-500 hover:bg-cyan-400' onClick={() => { setShownConfirmModal(true) }}>{usePoint}P 사용하기</button>
        {/* <button className='w-full h-full border-0 border-r-0 font-bold bg-cyan-500 hover:bg-cyan-400' disabled={true}>상품을 선택하세요.</button> */}
        {/* <button className='w-full h-full border-0 border-r-0 font-bold bg-cyan-500 hover:bg-cyan-400' disabled={true}>포인트가 부족해요</button> */}
      </div>
      {shownConfirmModal ? <ConfirmModal /> : ''}
    </>
  )
}