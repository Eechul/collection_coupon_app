import Card from '@/components/card/BasicCard/Card'
import LeftRightPanelLayout from '@/components/layout/LeftRightPanelLayout/LeftRightPanelLayout'
import NumberDisplayPad from '@/components/pad/NumberDisplayPad/NumberDisplayPad'

export default function Save() {

  return (
    <LeftRightPanelLayout 
      left={
        <Card content={<h3>핸드폰 번호로 1P 적립합니다.</h3>}/>
      }
      right={
        <NumberDisplayPad submitButtonText='적립' movePage="/certification"  />
      }
    />
  )
}
