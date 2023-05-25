'use client'

import { useRouter } from 'next/navigation'

const layoutStyle : React.CSSProperties = {
  border: '1px solid #dcdcdc',
  borderRadius: '8px 8px'
}

const mainContentStyle: React.CSSProperties = { 
  borderBottomLeftRadius: '8px'
}

export default function Home() {
  const router = useRouter()

  return (
    <>
      <div style={layoutStyle}>
        <div style={mainContentStyle}>
          <div className='home-container flex column'>
            <div className='flex'>
              <span>가게 로고나 이름 넣기</span>
            </div>
            <div className='flex row'>
              <div>
              </div>
              <div>
                <button onClick={() => { router.push('/use') }}>사용 / 조회</button>
                <button className='bg-cyan-500 hover:bg-cyan-400' onClick={() => { router.push('/save') }}>적립</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
