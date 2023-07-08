"use client"

import NumberDisplayPad from "@/components/pad/NumberDisplayPad/NumberDisplayPad"
import { reset, addNumber, deleteNumber } from "@/redux/features/certificationNumberSlice"
import { useAppDispath, useAppSelector } from "@/redux/hooks"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Certification() {
  const router = useRouter()
  const dispatch = useAppDispath()
  const certificationNumber = useAppSelector((state) => state.certificationNumberReducer.value)
  const certificationNumberWithStar = useAppSelector((state) => state.certificationNumberReducer.starValue)

  const handleSubmit = (e: any) => {
    router.push("/completion/save")
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
