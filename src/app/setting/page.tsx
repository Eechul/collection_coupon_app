import Card from "@/components/card/BasicCard/Card"
import LeftRightPanelLayout from "@/components/layout/LeftRightPanelLayout/LeftRightPanelLayout";
import SettingLeftPanel from "@/components/panel/SettingLeftPanel/SettingLeftPanel";

export default function Setting() {

  return (
    <LeftRightPanelLayout
      left={<SettingLeftPanel />}
      right={
        <>
          {/* <Card
            content="개발자 정보"
          />
          <Card
            content="오픈소스 정보"
          /> */}
        </>
      }
    />
  )
}