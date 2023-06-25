"use client"

import { useAppSelector } from "@/redux/hooks"

export default function NumberDisplay() {

  const phoneNumber = useAppSelector((state) => state.phoneNumberReducer.value)

  return (
    <div className='self-center'>
      <span>{phoneNumber}</span>
    </div>
  )
}