"use client"

import NumberDisplayPad from '@/components/pad/NumberDisplayPad/NumberDisplayPad'
import { addNumber, deleteNumber } from '@/redux/features/certificationNumberSlice'
import { useAppSelector } from '@/redux/hooks'

export default function Certification() {

  const certificationNumber = useAppSelector((state) => state.certificationNumberReducer.value)
  const certificationNumberWithStar = useAppSelector((state) => state.certificationNumberReducer.starValue)

  return (
    <div className='w-1/2 h-full'>
      <NumberDisplayPad
        displayValue={certificationNumberWithStar}
        numberAction={addNumber}
        deleteAction={deleteNumber}
        submitButtonText='승인'
        movePage='/completion/use'
        randomPadNumber={true} />
    </div>
  )
}
