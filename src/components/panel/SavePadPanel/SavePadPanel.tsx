"use client"

import { useAppDispath, useAppSelector } from "@/redux/hooks"
import NumberDisplayPad from "../../pad/NumberDisplayPad/NumberDisplayPad"
import { addNumber, deleteNumber } from "@/redux/features/phoneNumberSlice"
import { setUser } from "@/redux/features/userSlice"
import { useRouter } from "next/navigation"

export default function SavePadPanel() {
  const router = useRouter()
  const dispatch = useAppDispath()
  const phoneNumber = useAppSelector((state) => state.phoneNumberReducer.value)

  const handleSubmit = (e: any) => {
    // 폰 번호로 user fetch
    // reducer 저장
    dispatch(setUser({ id: "dkSMD", name: "test", phoneNumber: phoneNumber, myPoint: 20 }))
    //
    router.push("/certification/save")
  }

  return (
    <>
      <NumberDisplayPad
        displayValue={phoneNumber}
        numberAction={addNumber}
        deleteAction={deleteNumber}
        submitButtonText="적립"
        handleSubmit={handleSubmit}
      />
    </>
  )
}
