"use client"

import { useAppDispath, useAppSelector } from "@/redux/hooks"
import NumberDisplayPad from "../../pad/NumberDisplayPad/NumberDisplayPad"
import { addNumber, deleteNumber } from "@/redux/features/phoneNumberSlice"
import { setUser } from "@/redux/features/userSlice"
import { useRouter } from "next/navigation"
import { createUser, getUserByPhoneNumber } from "@/firebase/user"

export default function SavePadPanel() {
  const router = useRouter()
  const dispatch = useAppDispath()
  const phoneNumber = useAppSelector((state) => state.phoneNumberReducer.value)

  const handleSubmit = async (e: any) => {
    // 폰 번호로 user fetch
    let existUser = await getUserByPhoneNumber(phoneNumber)
    if (existUser === null) {
      existUser = createUser(phoneNumber)
    }

    dispatch(setUser(existUser))
    router.push("/certification?page=save")
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
