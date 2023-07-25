"use client"

import { useAppDispath, useAppSelector } from "@/redux/hooks"
import NumberDisplayPad from "../../pad/NumberDisplayPad/NumberDisplayPad"
import { addNumber, deleteNumber, phoneNumberReset } from "@/redux/features/phoneNumberSlice"
import { useRouter } from "next/navigation"
import { getUserByPhoneNumber } from "@/firebase/user"
import { useEffect } from "react"

export default function UsePadPanel() {
  const router = useRouter()
  const dispatch = useAppDispath()
  const phoneNumber = useAppSelector((state) => state.phoneNumberReducer.value)

  const handleSubmit = async (e: any) => {
    // 폰 번호로 user fetch
    // reducer 저장
    await getUserByPhoneNumber(phoneNumber)
    //
    router.push("/product")
  }

  useEffect(() => {
    dispatch(phoneNumberReset())
  }, [])

  return (
    <>
      <NumberDisplayPad
        displayValue={phoneNumber}
        numberAction={addNumber}
        deleteAction={deleteNumber}
        submitButtonText="사용/조회"
        handleSubmit={handleSubmit} />
    </>
  )
}
