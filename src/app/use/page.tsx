import Card from '@/components/card/BasicCard/Card'
import NumberPad from '@/components/pad/NumberPad/NumberPad'
import LeftRightPanelLayout from '@/components/layout/LeftRightPanelLayout/LeftRightPanelLayout'
import NumberDisplay from '@/components/pad/NumberDisplay/NumberDisplay'
import NumberDisplayPad from '@/components/pad/NumberDisplayPad/NumberDisplayPad'

export default function Use() {
  return (
    <LeftRightPanelLayout 
      left={
        <Card content={<h3>핸드폰 번호로 쿠폰을 사용 및 조회합니다.</h3>}/>
      }
      right={
        <NumberDisplayPad submitButtonText='사용/조회' />
      }
    />
  )
}
