"use client"

import { useRouter } from "next/navigation";

interface NumberPadProps {
  submitButtonText: string;
  movePage: string;
  randomPadNumber: boolean;
}
  
export default function NumberPad({ submitButtonText, movePage, randomPadNumber }: NumberPadProps) {

  const router = useRouter()

  const test = (e: any) => {
    router.push(movePage)
  }

  return (
    <div className='h-full flex flex-row flex-wrap'>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl'>1</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl'>2</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl'>3</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl'>4</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl'>5</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl'>6</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl'>7</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl'>8</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl'>9</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl'>지우기</button>
      <button className='basis-1/3 text-center bg-white border border-gray text-2xl'>0</button>
      <button className='basis-1/3 text-center bg-cyan-500 hover:bg-cyan-400 text-2xl' onClick={(e) => test(e)}>{submitButtonText}</button>
    </div>
  )
}
