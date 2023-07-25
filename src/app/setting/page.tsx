import Card from "@/components/card/BasicCard/Card"
import LeftRightPanelLayout from "@/components/layout/LeftRightPanelLayout/LeftRightPanelLayout";

export default function Setting() {

  return (
    <LeftRightPanelLayout
      left={
        <Card content="테스트 입니다1"></Card>
      }
      right={
        <Card content="테스트 입니다2"></Card>
      }
    />
  )
}