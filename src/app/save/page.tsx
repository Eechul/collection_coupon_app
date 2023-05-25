const leftPanelStyle: React.CSSProperties = {
  
  
}

export default function Save() {
  return (
    <>
      <div className="flex min-h-full">
        <div style={leftPanelStyle} className="w-1/2">
          <div>
            <h3>핸드폰 번호로 쿠폰 1개 적립</h3>
          </div>
        </div>
        <div className="w-1/2">
          <div className='pad-container'>
            <div className='phonenumber-print-container'>
              <div>
                <span>010-</span><span>5555-5555</span>
              </div>
            </div>
            <div>
              <div className='number-pad-container'>
                <button className='bg-white'>1</button>
                <button className='bg-white'>2</button>
                <button className='bg-white'>3</button>
                <button className='bg-white'>4</button>
                <button className='bg-white'>5</button>
                <button className='bg-white'>6</button>
                <button className='bg-white'>7</button>
                <button className='bg-white'>8</button>
                <button className='bg-white'>9</button>
                <button className='bg-white'>지우기</button>
                <button className='bg-white'>0</button>
                <button className='bg-cyan-500 hover:bg-cyan-400'>적립</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
