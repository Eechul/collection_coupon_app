"use client"

import { useAppSelector } from "@/redux/hooks"

interface NumberDisplayProps {
  displayValue: string
}

export default function NumberDisplay({ displayValue }: NumberDisplayProps) {

  return (
    <div className='self-center'>
      <span>{displayValue}</span>
    </div>
  )
}