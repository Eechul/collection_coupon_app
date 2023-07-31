import Card from '@/components/card/BasicCard/Card'
import LeftRightPanelLayout from '@/components/layout/LeftRightPanelLayout/LeftRightPanelLayout'
import UsePadPanel from '@/components/panel/UsePadPanel/UsePadPanel'

export default function Use() {
  return (
    <LeftRightPanelLayout
      left={
        <Card content={<h3>핸드폰 번호로 포인트를 사용 및 조회합니다.</h3>} />
      }
      right={
        <UsePadPanel />
      }
    />
  )
}
