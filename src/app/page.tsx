'use client'

import { Button, Layout } from 'antd'
import { useRouter } from 'next/navigation'

const { Content } = Layout;

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
    <Layout style={layoutStyle}>
      <Content style={mainContentStyle}>
        <div className='home-container flex column'>
          <div className='flex'>
            <span>가게 로고나 이름 넣기</span>
          </div>
          <div className='flex row'>
            <div>
            </div>
            <div>
              <Button onClick={() => { router.push('/use') }}>사용 / 조회</Button>
              <Button type="primary" onClick={() => { router.push('/save') }}>적립</Button>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  )
}
