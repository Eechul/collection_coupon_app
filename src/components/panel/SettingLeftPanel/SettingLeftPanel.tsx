"use client"

import Card from "@/components/card/BasicCard/Card"
import { useRouter } from "next/navigation"

export default function SettingLeftPanel() {
  const router = useRouter()

  return (
    <>
      <Card content="승인번호 변경" onClick={() => router.push("/setting/certification")}></Card>
    </>
  )
}