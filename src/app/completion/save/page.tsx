"use client"

import { saveUserPoint } from "@/firebase/user"
import { phoneNumberReset } from "@/redux/features/phoneNumberSlice"
import { userReset, user } from "@/redux/features/userSlice"
import { useAppDispath, useAppSelector } from "@/redux/hooks"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function UseCompletion() {
  const router = useRouter()
  const dispatch = useAppDispath()
  const user = useAppSelector((state) => state.userReducer.user)
  const [userTmp, setUserTmp] = useState<user | null>(null)

  useEffect(() => {
    async function init() {
      if (user.id === undefined) { router.replace("/") }
      const savedPointUser = await saveUserPoint(user.id, 1)
      setUserTmp(savedPointUser)
      dispatch(userReset())
      dispatch(phoneNumberReset())
    }
    init()
  }, [])

  return (
    <div className='flex flex-col h-screen'>
      <div className='flex basis-4/5 justify-center items-center'>
        <p>포인트를 적립(1P) 하셨습니다. 남은 포인트는 {userTmp?.myPoint}P 입니다.</p>
      </div>
      <div className='flex basis-1/5 border-t border-t-gray'>
        <div className='basis-3/4'>
        </div>
        <div className='basis-1/4 border-l border-l-gray'>
          <button className='w-full h-full border-0 border-r-0 text-2xl font-bold' onClick={() => { router.replace("/") }}>돌아가기</button>
        </div>
      </div>
    </div>
  )
}
