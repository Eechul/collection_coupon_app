'use client'

import { Layout } from 'antd'

const { Header } = Layout;

interface CommonHeaderProps {
  title: string;
  style: React.CSSProperties
}

export default function CommonHeader({ title, style }: CommonHeaderProps) {

  return (
      <Header style={style}>{title}</Header>
  )
}
