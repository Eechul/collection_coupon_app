"use client"

import { useAppDispath } from "@/redux/hooks";
import NumberDisplay from "../NumberDisplay/NumberDisplay"
import NumberPad from "../NumberPad/NumberPad"


interface NumberDisplayPadProps {
  displayValue: string;
  numberAction: any;
  deleteAction: any;
  submitAction?: any;
  submitButtonText: string;
  movePage: string;
  randomPadNumber?: boolean;
  action?: any;
}

export default function NumberDisplayPad({
  displayValue,
  numberAction,
  deleteAction,
  submitAction = null,
  submitButtonText,
  movePage,
  randomPadNumber = false
}: NumberDisplayPadProps) {

  return (
    <div className='flex h-full flex-col'>
      <div className='block flex grow-1 justify-center text-center text-4xl'>
        <NumberDisplay displayValue={displayValue} />
      </div>
      <div className='grow-3'>
        <NumberPad
          numberAction={numberAction}
          deleteAction={deleteAction}
          submitButtonText={submitButtonText}
          movePage={movePage}
          randomPadNumber={randomPadNumber}
        />
      </div>
    </div>
  )
}