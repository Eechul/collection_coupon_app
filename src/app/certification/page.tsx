"use client"

import NumberDisplayPad from "@/components/pad/NumberDisplayPad/NumberDisplayPad"
import { getCertificationNumber } from "@/firebase/setting"
import { reset, addNumber, deleteNumber } from "@/redux/features/certificationNumberSlice"
import { useAppDispath, useAppSelector } from "@/redux/hooks"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export default function Certification() {
  const router = useRouter()
  const dispatch = useAppDispath()
  const params = useSearchParams()
  const certificationNumber = useAppSelector((state) => state.certificationNumberReducer.value)
  const certificationNumberWithStar = useAppSelector((state) => state.certificationNumberReducer.starValue)

  const handleSubmit = async (e: any) => {
    const origin = await getCertificationNumber()
    if (certificationNumber !== origin) { alert("승인번호가 맞지 않습니다."); dispatch(reset()); return; }
    router.push(`/completion?page=${params.get("page")}`)
  }

  useEffect(() => {
    const qPage = params.get("page")
    if (qPage !== "use" && qPage !== "save") { /* 잘못 온 페이지 */ router.push("/"); return; }
    // 핸드폰번호 데이터와 유저 데이터가 없으면 첫 페이지로 이동 // 
  }, [])

  return (
    <div className='w-1/2 h-full'>
      <NumberDisplayPad
        displayValue={certificationNumberWithStar}
        numberAction={addNumber}
        deleteAction={deleteNumber}
        submitButtonText="승인"
        handleSubmit={handleSubmit}
        randomPadNumber={true} />
    </div>
  )
}
