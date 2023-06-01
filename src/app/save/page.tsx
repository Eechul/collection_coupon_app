"use client"

import Card from '@/components/card/BasicCard/Card'
import LeftRightPanelLayout from '@/components/layout/LeftRightPanelLayout/LeftRightPanelLayout'
import NumberDisplayPad from '@/components/pad/NumberDisplayPad/NumberDisplayPad'
import { useRouter } from 'next/navigation'

export default function Save() {
  const router = useRouter()

  return (
    <LeftRightPanelLayout 
      left={
        <Card content={<h3>핸드폰 번호로 쿠폰을 사용 및 조회합니다.</h3>}/>
      }
      right={
        <NumberDisplayPad submitButtonText='적립' handleSubmit={() => { router.push("/certification") }} />
      }
    />
  )
}
