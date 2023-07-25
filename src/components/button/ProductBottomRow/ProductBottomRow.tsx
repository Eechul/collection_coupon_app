"use client"

import ConfirmModal from "@/components/modal/ConfirmModal/ConfirmModal"
import { createUser, getUserByPhoneNumber } from "@/firebase/user"
import { setUser, user } from "@/redux/features/userSlice"
import { useAppDispath, useAppSelector } from "@/redux/hooks"
import { create } from "domain"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function ProductBottomRow() {
  const router = useRouter()
  const dispatch = useAppDispath()
  const phoneNumber = useAppSelector((state) => state.phoneNumberReducer.value)
  const datas = useAppSelector(state => state.productReducer.products)
  const [usePoint, setUsePoint] = useState(0)
  const [userTmp, setUserTmp] = useState<user | null>(null)
  const [shownConfirmModal, setShownConfirmModal] = useState(false)

  const isStatusSumitButton = (myPoint: number) => {
    if (datas.filter(p => p.number > 0).length == 0) {
      return (
        <button className='w-full h-full border-0 border-r-0 font-bold bg-cyan-500 hover:bg-cyan-400' disabled={true}>
          상품을 선택하세요.
        </button>
      )
    } else if (usePoint > myPoint) {
      return (
        <button className='w-full h-full border-0 border-r-0 font-bold bg-cyan-500 hover:bg-cyan-400' disabled={true}>
          포인트가 부족해요
        </button>
      )
    } else {
      return (
        <button className='w-full h-full border-0 border-r-0 font-bold bg-cyan-500 hover:bg-cyan-400' onClick={() => { setShownConfirmModal(true) }}>
          {usePoint}P 사용하기
        </button>
      )
    }
  }

  useEffect(() => {
    const point = datas
      .filter(p => p.number > 0)
      .reduce((acc, cur) => { return acc += cur.number * cur.point }, 0)
    setUsePoint(point)
  }, [datas])

  useEffect(() => {
    async function init() {
      let user = await getUserByPhoneNumber(phoneNumber)
      if (!user) {
        user = await createUser(phoneNumber)
      }
      setUserTmp(user)
      dispatch(setUser(user))
    }
    init()
  }, [])

  return (
    <>
      <div className='basis-3/4 text-2xl'>
        <div className='flex flex-col h-full justify-center p-6'>
          <div>내 포인트 <span className='font-bold'>{userTmp?.myPoint}</span> P</div>
          <div>사용할 포인트 <span className='font-bold'>{usePoint}</span> P</div>
        </div>
      </div>
      <div className='basis-1/2 border-l border-l-gray text-2xl'>
        {isStatusSumitButton(userTmp ? userTmp!.myPoint : 0)}
      </div>
      {shownConfirmModal ?
        <ConfirmModal
          setState={setShownConfirmModal}
          phoneNumber={userTmp?.phoneNumber}
          usePoint={usePoint}
          products={datas.filter(p => p.number > 0).map(p => { return { id: p.id, name: p.name, number: p.number } })}
        />
        : ''}
    </>
  )
}