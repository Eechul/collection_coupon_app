import ThreeRowLayout from '@/components/layout/ThreeRowLayout/ThreeRowLayout'
import ProductLayout from '@/components/layout/ThreeRowLayout/ThreeRowLayout'

export default function layout({ children }: { children: React.ReactNode }) {

  return (
    <ThreeRowLayout
      main={children}
    />
  )
}