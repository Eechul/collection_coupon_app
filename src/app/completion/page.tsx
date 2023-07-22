"use client"

import { useAppDispath, useAppSelector } from "@/redux/hooks"
import { userReset, user } from "@/redux/features/userSlice"
import { useRouter, useSearchParams } from "next/navigation"
import { ReactNode, useState, useEffect } from "react"
import { phoneNumberReset } from "@/redux/features/phoneNumberSlice"
import { saveUserPoint } from "@/firebase/user"

export default function Completion() {
  const router = useRouter()
  const dispatch = useAppDispath()
  const params = useSearchParams()
  const user = useAppSelector((state) => state.userReducer.user)
  const [userTmp, setUserTmp] = useState<user | null>(null)

  const branchPrinted = (query: string | null): ReactNode => {
    if (query === "use") {
      return printUse(10)
    } else if (query === "save") {
      return printSave(1, 1)
    } else {
      return printError()
    }
  }

  const printUse = (usePoint: number): ReactNode => (
    <div className='flex basis-4/5 justify-center items-center'>
      <p>포인트를 사용({usePoint}P)하셨습니다. 남은 포인트는 0P 입니다.</p>
    </div>
  )


  const printSave = (savePoint: number, remainingPoints: number): ReactNode => (
    <div className='flex basis-4/5 justify-center items-center'>
      <p>포인트를 적립({savePoint}P)하셨습니다. 남은 포인트는 0P 입니다.</p>
    </div>
  )


  const printError = () => (
    <div className='flex basis-4/5 justify-center items-center'>
      <p>에러 입니다.</p>
    </div>
  )

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
      {branchPrinted(params.get("page"))}
      <div className='flex basis-1/5 border-t border-t-gray'>
        <div className='basis-3/4'>
        </div>
        <div className='basis-1/4 border-l border-l-gray'>
          <button className='w-full h-full border-0 border-r-0 text-2xl font-bold' onClick={() => { router.push("/") }}>돌아가기</button>
        </div>
      </div>
    </div>
  )
}
