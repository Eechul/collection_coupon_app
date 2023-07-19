"use client"

import NumberDisplayPad from "@/components/pad/NumberDisplayPad/NumberDisplayPad"
import { getCertificationNumber } from "@/firebase/setting"
import { reset, addNumber, deleteNumber } from "@/redux/features/certificationNumberSlice"
import { useAppDispath, useAppSelector } from "@/redux/hooks"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function CertificationUse() {
  const router = useRouter()
  const dispatch = useAppDispath()
  const certificationNumber = useAppSelector((state) => state.certificationNumberReducer.value)
  const certificationNumberWithStar = useAppSelector((state) => state.certificationNumberReducer.starValue)

  const handleSubmit = async (e: any) => {
    const origin = await getCertificationNumber()
    if (certificationNumber !== origin) { alert("승인번호가 맞지 않습니다."); dispatch(reset()); return; }
    router.push("/completion/use")
  }

  useEffect(() => {
    dispatch(reset())
  }, [])

  return (
    <div className='w-1/2 h-full'>
      <NumberDisplayPad
        displayValue={certificationNumberWithStar}
        numberAction={addNumber}
        deleteAction={deleteNumber}
        submitButtonText='승인'
        handleSubmit={handleSubmit}
        randomPadNumber={true} />
    </div>
  )
}
