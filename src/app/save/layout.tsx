import LeftRightPanelLayout from '@/components/layout/LeftRightPanelLayout/LeftRightPanelLayout'
import CommonHeader from '../../components/header/CommonHeader/CommonHeader'
import BasicLayout from '@/components/layout/BasicLayout/BasicLayout'

export default function SaveLayout({ children }: { children: React.ReactNode }) {
  return (
    <BasicLayout>
      {children}
    </BasicLayout>
  )
}
