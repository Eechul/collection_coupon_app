import CommonHeader from "@/components/header/CommonHeader/CommonHeader"

export default function SettingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col h-screen border border-gray">
        <CommonHeader title="설정하기" />
        <div className="h-full">
          {children}
        </div>
      </div>
    </>
  )
}