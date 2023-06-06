import ProductLayout from '@/components/layout/ThreeRowLayout/ThreeRowLayout'

export default function layout({ children }: { children: React.ReactNode }) {

  return (
    <ProductLayout
      main={children}
    />
  )
}