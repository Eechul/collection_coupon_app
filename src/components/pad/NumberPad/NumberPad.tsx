"use client"

import { useAppDispath } from "@/redux/hooks"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface NumberPadProps {
  numberAction: any;
  deleteAction: any;
  submitButtonText: string;
  handleSubmit: Function;
  randomPadNumber: boolean;
}

export default function NumberPad({
  numberAction,
  deleteAction,
  submitButtonText,
  handleSubmit,
  randomPadNumber
}: NumberPadProps) {

  const dispatch = useAppDispath()
  const [numbers] = useState(randomPadNumber ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].sort(() => Math.random() - 0.5) : [1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
  const router = useRouter()

  const handleClickedNumber = (number: number) => {
    dispatch(numberAction(number))
  }

  const handleDeleted = () => {
    dispatch(deleteAction())
  }

  return (
    <div className='h-full flex flex-wrap'>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl active:bg-gray-200' onClick={() => handleClickedNumber(numbers[0])}>{numbers[0]}</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl active:bg-gray-200' onClick={() => handleClickedNumber(numbers[1])}>{numbers[1]}</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl active:bg-gray-200' onClick={() => handleClickedNumber(numbers[2])}>{numbers[2]}</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl active:bg-gray-200' onClick={() => handleClickedNumber(numbers[3])}>{numbers[3]}</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl active:bg-gray-200' onClick={() => handleClickedNumber(numbers[4])}>{numbers[4]}</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl active:bg-gray-200' onClick={() => handleClickedNumber(numbers[5])}>{numbers[5]}</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl active:bg-gray-200' onClick={() => handleClickedNumber(numbers[6])}>{numbers[6]}</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl active:bg-gray-200' onClick={() => handleClickedNumber(numbers[7])}>{numbers[7]}</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl active:bg-gray-200' onClick={() => handleClickedNumber(numbers[8])}>{numbers[8]}</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl active:bg-gray-200' onClick={() => handleDeleted()}>지우기</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl active:bg-gray-200' onClick={() => handleClickedNumber(numbers[9])}>{numbers[9]}</button>
      <button className='basis-1/3 text-center bg-cyan-500 active:bg-cyan-400 text-2xl' onClick={(e) => handleSubmit(e)}>{submitButtonText}</button>
    </div>
  )
}
