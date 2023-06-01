"use client"

interface NumberPadProps {
  submitButtonText: string;
  handleSubmit: any;
  randomPadNumber: boolean;
}
  
export default function NumberPad({ submitButtonText, handleSubmit, randomPadNumber }: NumberPadProps) {

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
      <button className='basis-1/3 text-center bg-cyan-500 hover:bg-cyan-400 text-2xl' onClick={(e) => handleSubmit(e)}>{submitButtonText}</button>
    </div>
  )
}
