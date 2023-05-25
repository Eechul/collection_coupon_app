'use client'

import CommonHeader from '../../components/CommonHeader'

const layoutStyle : React.CSSProperties = {
  border: '1px solid #dcdcdc',
  borderRadius: '8px 8px'
}

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#000',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  background: '#fff',
  borderBottom: '1px solid #dcdcdc',
  borderRadius: '8px 8px 0px 0px'
}

const mainContentStyle: React.CSSProperties = {
  
  borderBottomLeftRadius: '8px'
}
export default function SaveLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div style={layoutStyle} className='min-h-screen'>
        <CommonHeader style={headerStyle} title='휴대전화번호를 눌러주세요' />
          <div style={mainContentStyle} className='h-full'>
            <div style={{background: '#fff', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px'}}>
              {children}
            </div>
          </div>
      </div>
    </>
  )
}
