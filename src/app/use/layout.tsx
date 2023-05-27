import LeftRightPanelLayout from '@/components/LeftRightPanelLayout/LeftRightPanelLayout'
import CommonHeader from '../../components/CommonHeader/CommonHeader'

export default function SaveLayout({ children }: { children: React.ReactNode }) {
  return (
    <LeftRightPanelLayout>
      {children}
    </LeftRightPanelLayout>
  )
}
