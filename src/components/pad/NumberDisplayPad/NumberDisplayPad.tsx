"use client"

import NumberDisplay from "../NumberDisplay/NumberDisplay"
import NumberPad from "../NumberPad/NumberPad"


interface NumberDisplayPadProps {
  displayValue: string;
  numberAction: any;
  deleteAction: any;
  submitButtonText: string;
  handleSubmit: Function;
  randomPadNumber?: boolean;
  action?: any;
}

export default function NumberDisplayPad({
  displayValue,
  numberAction,
  deleteAction,
  submitButtonText,
  handleSubmit,
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
          handleSubmit={handleSubmit}
          randomPadNumber={randomPadNumber}
        />
      </div>
    </div>
  )
}