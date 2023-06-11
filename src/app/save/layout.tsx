import BasicLayout from '@/components/layout/BasicLayout/BasicLayout'

// this is insert mode

export default function SaveLayout({ children }: { children: React.ReactNode }) {
  return (
    <BasicLayout>
      {children}
    </BasicLayout>
  )
}
