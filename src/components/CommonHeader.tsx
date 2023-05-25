'use client'

interface CommonHeaderProps {
  title: string;
  style: React.CSSProperties
}

export default function CommonHeader({ title, style }: CommonHeaderProps) {

  return (
      <div style={style}>{title}</div>
  )
}
