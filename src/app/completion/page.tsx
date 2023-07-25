"use client"

import { useAppDispath, useAppSelector } from "@/redux/hooks"
import { userReset, user } from "@/redux/features/userSlice"
import { useRouter, useSearchParams } from "next/navigation"
import { ReactNode, useState, useEffect, use } from "react"
import { phoneNumberReset } from "@/redux/features/phoneNumberSlice"
import { saveUserPoint, useUserPoint } from "@/firebase/user"

export default function Completion() {
  const router = useRouter()
  const dispatch = useAppDispath()
  const params = useSearchParams()
  const user = useAppSelector((state) => state.userReducer.user)
  const usePoint = useAppSelector((state) => state.userReducer.usePoint)
  const savePoint = useAppSelector((state) => state.userReducer.savePoint)
  const [userTmp, setUserTmp] = useState<user | null>(null)
  const [point, setPoint] = useState({ usePoint: 0, savePoint: 0 })

  const branchPrinted = (query: string | null): ReactNode => {
    if (query === "use") {
      return printUse(point.usePoint, userTmp ? userTmp!.myPoint : 0)
    } else if (query === "save") {
      return printSave(point.savePoint, userTmp ? userTmp!.myPoint : 0)
    } else {
      return printError()
    }
  }

  const printUse = (usePoint: number, remainingPoints: number): ReactNode => (
    <div className='flex basis-4/5 justify-center items-center'>
      <p>포인트를 사용({usePoint}P)하셨습니다. 남은 포인트는 {remainingPoints}P 입니다.</p>
    </div>
  )

  const printSave = (savePoint: number, remainingPoints: number): ReactNode => (
    <div className='flex basis-4/5 justify-center items-center'>
      <p>포인트를 적립({savePoint}P)하셨습니다. 남은 포인트는 {remainingPoints}P 입니다.</p>
    </div>
  )

  const printError = () => (
    <div className='flex basis-4/5 justify-center items-center'>
      <p>에러 입니다.</p>
    </div>
  )

  useEffect(() => {
    async function init(query: string | null) {
      // if (user.id === undefined) { router.replace("/") }
      if (query === "use") {
        // 사용할때
        const usedPointUser = await useUserPoint(user.id, usePoint)
        setUserTmp(usedPointUser)
        setPoint({ usePoint: usePoint, savePoint: 0 })
      } else if (query === "save") {
        // 적립할때. 현재는 무조껀 1포인트 지만, 상황에 따라 앞 페이지에서 2,3 포인트로도 변경될 수 있음.
        const savedPointUser = await saveUserPoint(user.id, 1)
        setUserTmp(savedPointUser)
        setPoint({ usePoint: 0, savePoint: 1 })
      } else {
        // 없는 page일때
        router.replace("/")
      }
      dispatch(userReset())
      dispatch(phoneNumberReset())
    }
    init(params.get("page"))
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
