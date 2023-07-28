import Card from "@/components/card/BasicCard/Card"
import LeftRightPanelLayout from "@/components/layout/LeftRightPanelLayout/LeftRightPanelLayout";

export default function Setting() {

  return (
    <LeftRightPanelLayout
      left={
        <ul className="list-none">
          <li content="승인번호 변경"></li>
          <li content="승인번호 변경"></li>
        </ul>
      }
      right={
        <Card content="테스트 입니다2"></Card>
      }
    />
  )
}