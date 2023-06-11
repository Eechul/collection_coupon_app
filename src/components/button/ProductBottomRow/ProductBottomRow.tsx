'use client'

export default function ProductBottomRow() {

  return (
    <>
      <div className='basis-3/4 text-2xl'>
        <div className='flex flex-col h-full justify-center p-6'>
          <div>내 포인트 <span className='font-bold'>20</span> P</div>
          <div>사용할 포인트 <span className='font-bold'>0</span> P</div>
        </div>
      </div>
      <div className='basis-1/2 border-l border-l-gray text-2xl'>
        {/* <button className='w-full h-full border-0 border-r-0 font-bold bg-cyan-500 hover:bg-cyan-400'>20P 사용하기</button> */}
        {/* <button className='w-full h-full border-0 border-r-0 font-bold bg-cyan-500 hover:bg-cyan-400'>10P 사용하기</button> */}
        {/* <button className='w-full h-full border-0 border-r-0 font-bold bg-cyan-500 hover:bg-cyan-400' disabled={true}>상품을 선택하세요.</button> */}
        <button className='w-full h-full border-0 border-r-0 font-bold bg-cyan-500 hover:bg-cyan-400' disabled={true}>포인트가 부족해요</button>
      </div>
    </>
  )
}