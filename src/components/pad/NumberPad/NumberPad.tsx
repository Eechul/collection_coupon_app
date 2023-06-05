"use client"

'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface NumberPadProps {
  submitButtonText: string;
  movePage: string;
  randomPadNumber: boolean;
}

export default function NumberPad({ submitButtonText, movePage, randomPadNumber }: NumberPadProps) {
  const [numbers] = useState(randomPadNumber ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].sort(() => Math.random() - 0.5) : [1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
  const router = useRouter()

  const test = (e: any) => {
    router.push(movePage)
  }

  const handleClickedNumber = (number: Number) => {
    console.log(number, '입니다요~')
  }

  return (
    <div className='h-full flex flex-row flex-wrap'>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl' onClick={() => handleClickedNumber(numbers[0])}>{numbers[0]}</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl' onClick={() => handleClickedNumber(numbers[1])}>{numbers[1]}</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl' onClick={() => handleClickedNumber(numbers[2])}>{numbers[2]}</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl' onClick={() => handleClickedNumber(numbers[3])}>{numbers[3]}</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl' onClick={() => handleClickedNumber(numbers[4])}>{numbers[4]}</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl' onClick={() => handleClickedNumber(numbers[5])}>{numbers[5]}</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl' onClick={() => handleClickedNumber(numbers[6])}>{numbers[6]}</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl' onClick={() => handleClickedNumber(numbers[7])}>{numbers[7]}</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl' onClick={() => handleClickedNumber(numbers[8])}>{numbers[8]}</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl'>지우기</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl' onClick={() => handleClickedNumber(numbers[9])}>{numbers[9]}</button>
      <button className='basis-1/3 text-center bg-cyan-500 hover:bg-cyan-400 text-2xl' onClick={(e) => test(e)}>{submitButtonText}</button>
    </div>
  )
}
