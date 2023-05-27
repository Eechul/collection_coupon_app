import NumberPad from '@/components/NumberPad/NumberPad'

export default function Use() {
  return (
    <>
      <div className='flex h-full'>
        <div className="w-1/2">
          <div className="border border-gray-200 p-4 m-4">
            <h3>핸드폰 번호로 쿠폰을 사용 및 조회합니다.</h3>
          </div>
        </div>
        <div className='w-1/2 border-l border-gray'>
          <div className='flex h-full flex-col'>
            <div className='block flex grow-1 justify-center text-center text-4xl'>
              <div className='self-center'>
                <span>010-</span><span>5555-5555</span>
              </div>
            </div>
            <div className='grow-3'>
              <NumberPad 
                submitButtonText='사용/조회'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
