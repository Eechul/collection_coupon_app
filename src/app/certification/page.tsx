"use client"

import NumberDisplayPad from '@/components/pad/NumberDisplayPad/NumberDisplayPad'

export default function Save() {
  return (
    <div className='w-1/2 h-full'>
        <NumberDisplayPad submitButtonText='승인' handleSubmit={() => {}}/>
    </div>
  )
}
