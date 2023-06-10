import ProductBottomRow from '@/components/button/ProductBottomRow/ProductBottomRow'
import ThreeRowLayout from '@/components/layout/ThreeRowLayout/ThreeRowLayout'

export default function layout({ children }: { children: React.ReactNode }) {

  return (
    <ThreeRowLayout
      main={children}
      bottom={<ProductBottomRow />}
    />
  )
}