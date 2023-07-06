"use client"

import { useAppDispath } from "@/redux/hooks";

interface MinusPlusValueButtonProps {
  value: number;
  targetId: string;
  actions: any;
}

export default function MinusPlusValueButton({ value, targetId, actions }: MinusPlusValueButtonProps) {

  const dispatch = useAppDispath()

  const handleValue = (id: string, action: string) => {
    dispatch(actions[action]({ id: id }))
  }

  return (
    <div className='flex'>
      <button className='border w-10 h-10 text-bold' onClick={() => handleValue(targetId, "minus")}>-</button>
      <span className='border w-10 h-10 text-bold text-center leading-9'>{value}</span>
      <button className='border w-10 h-10 text-bold' onClick={() => handleValue(targetId, "plus")}>+</button>
    </div>
  )
}