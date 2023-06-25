"use client"

import { useAppDispath } from "@/redux/hooks";
import NumberDisplay from "../NumberDisplay/NumberDisplay"
import NumberPad from "../NumberPad/NumberPad"


interface NumberDisplayPadProps {
  submitButtonText: string;
  movePage: string;
  randomPadNumber?: boolean;
  action?: any;
}

export default function NumberDisplayPad({ submitButtonText, movePage, randomPadNumber = false, action = null }: NumberDisplayPadProps) {

  return (
    <div className='flex h-full flex-col'>
      <div className='block flex grow-1 justify-center text-center text-4xl'>
        <NumberDisplay />
      </div>
      <div className='grow-3'>
        <NumberPad submitButtonText={submitButtonText} movePage={movePage} randomPadNumber={randomPadNumber} />
      </div>
    </div>
  )
}