'use client'

import { Card, Col, Layout, Row, Space } from 'antd'

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

const rightPanelStyle: React.CSSProperties = {
  minHeight: 'calc(100vh - 74px)',
  borderBottomRightRadius: '8px'
}

const rightPanelVerticalStyle: React.CSSProperties = {
  height: '20%',
}

const phoneNumberPrintStyle: React.CSSProperties = {
  padding: '25px 0px 25px 0px',
  textAlign: 'center',
  width: '100%',
  borderBottom: '1px solid #dcdcdc',
  fontWeight: 'bold',
  fontSize: '18px',
  lineHeight: '33%',

}

const numberPadStyle: React.CSSProperties = {
  padding: '20px 0px 20px 0px',
  textAlign: 'center',
  borderRight: '1px solid #dcdcdc',
  borderBottom: '1px solid #dcdcdc',
}

const numberPadStyleRightException: React.CSSProperties = {
  borderRight: '0px',
}

const numberPadStyleBottomException: React.CSSProperties = {
  borderBottom: '0px',
}

export default function Home() {
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>휴대전화번호를 눌러주세요</Header>
      <Content style={mainContentStyle}>
        <Row style={{background: '#fff', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px'}}>
          <Col flex='40%' style={leftPanelStyle}>
            <Card>
              <h3>쿠폰 1개 적립</h3>
            </Card>
          </Col>
          <Col flex='auto' style={rightPanelStyle}>
            <Row>
              <Col style={phoneNumberPrintStyle}>
                010-
              </Col>
            </Row>
            <Row style={rightPanelVerticalStyle}>
              <Col style={numberPadStyle} flex="33.3%">1</Col>
              <Col style={numberPadStyle} flex="33.3%">2</Col>
              <Col style={{...numberPadStyle, ...numberPadStyleRightException}} flex="33.3%">3</Col>
            </Row>
            <Row style={rightPanelVerticalStyle}>
              <Col style={numberPadStyle} flex="33.3%">4</Col>
              <Col style={numberPadStyle} flex="33.3%">5</Col>
              <Col style={{...numberPadStyle, ...numberPadStyleRightException}} flex="33.3%">6</Col>
            </Row>
            <Row style={rightPanelVerticalStyle}>
              <Col style={numberPadStyle} flex="33.3%">7</Col>
              <Col style={numberPadStyle} flex="33.3%">8</Col>
              <Col style={{...numberPadStyle, ...numberPadStyleRightException}} flex="33.3%">9</Col>
            </Row>
            <Row style={rightPanelVerticalStyle}>
              <Col style={{...numberPadStyle, ...numberPadStyleBottomException}} flex="33.3%">(지움)</Col>
              <Col style={{...numberPadStyle, ...numberPadStyleBottomException}} flex="33.3%">0</Col>
              <Col style={{...numberPadStyle, ...numberPadStyleRightException, ...numberPadStyleBottomException}} flex="33.3%">적립</Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}
