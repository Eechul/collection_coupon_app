"use client"

import { useAppSelector } from '@/redux/hooks'
import NumberDisplayPad from '../../pad/NumberDisplayPad/NumberDisplayPad'
import { addNumber, deleteNumber } from '@/redux/features/phoneNumberSlice'

export default function SavePadPanel() {

  const phoneNumber = useAppSelector((state) => state.phoneNumberReducer.value)

  return (
    <>
      <NumberDisplayPad
        displayValue={phoneNumber}
        numberAction={addNumber}
        deleteAction={deleteNumber}
        // submitAction={}
        submitButtonText='적립'
        movePage='/certification'
      />
    </>
  )
}
