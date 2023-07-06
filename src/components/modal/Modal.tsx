"use client"

import { useRef, useEffect } from "react"
import { XMarkIcon } from '@heroicons/react/24/solid'

export default function Modal({ children, title, setState }: { children: React.ReactNode, title: string, setState: any }) {
  const overlay = useRef<any>()
  const wrapper = useRef<any>()


  useEffect(() => {

  }, [])

  return (
    <div
      ref={overlay}
      className='fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60'
    >
      <div
        ref={wrapper}
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-6'
      >
        <div className='w-full h-full bg-white'>
          <div className='flex  text-xl text-center border-b p-4'>
            <div className='w-full'>{title}</div>
            <button className='w-16' onClick={() => setState(false)}>
              <XMarkIcon className='w-8' />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}