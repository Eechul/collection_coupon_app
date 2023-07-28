
export default function SettingLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <div className="flex flex-col h-screen border border-gray">
        <div className="h-full">
          {children}
        </div>
      </div>
    </>
  )
}