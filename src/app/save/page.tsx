import Card from '@/components/card/BasicCard/Card'
import LeftRightPanelLayout from '@/components/layout/LeftRightPanelLayout/LeftRightPanelLayout'
import SavePadPanel from '@/components/panel/SavePadPanel/SavePadPanel'

export default function Save() {

  return (
    <LeftRightPanelLayout
      left={
        <Card content={<h3>핸드폰번호로 1포인트를 적립합니다.</h3>} />
      }
      right={
        <SavePadPanel />
      }
    />
  )
}
