"use client"

import NumberDisplay from "../NumberDisplay/NumberDisplay"
import NumberPad from "../NumberPad/NumberPad"


interface NumberDisplayPadProps {
  submitButtonText: string;
  movePage: string;
  randomPadNumber?: boolean;
}

export default function NumberDisplayPad({ submitButtonText, movePage, randomPadNumber = false }: NumberDisplayPadProps) {

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