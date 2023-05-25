'use client'

import { Card, Col, Layout, Row, Space } from 'antd'
import CommonHeader from '../../components/CommonHeader';

const { Header, Footer, Sider, Content } = Layout;

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

const leftPanelStyle: React.CSSProperties = {
  padding: '12px 12px',
  minHeight: 'calc(100vh - 74px)',
  borderRight: '1px solid #dcdcdc',
  borderBottomLeftRadius: '8px'
}

export default function Use() {
  return (
    <Layout style={layoutStyle}>
      <CommonHeader style={headerStyle} title='휴대전화번호를 눌러주세요' />
      <Content style={mainContentStyle}>
        <Row style={{background: '#fff', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px'}}>
          <Col flex='40%' style={leftPanelStyle}>
            <Card>
              <h3>핸드폰 번호로 쿠폰을 사용 및 조회합니다.</h3>
            </Card>
          </Col>
          <Col flex='auto'>
            <div className='pad-container'>
              <div className='phonenumber-print-container'>
                <div>
                  <span>010-</span><span>5555-5555</span>
                </div>
              </div>
              <div>
                <div className='number-pad-container'>
                  <button type='button'>1</button>
                  <button type='button'>2</button>
                  <button type='button'>3</button>
                  <button type='button'>4</button>
                  <button type='button'>5</button>
                  <button type='button'>6</button>
                  <button type='button'>7</button>
                  <button type='button'>8</button>
                  <button type='button'>9</button>
                  <button type='button'>지우기</button>
                  <button type='button'>0</button>
                  <button type='button' className='collection_btn'>사용/조회</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}
