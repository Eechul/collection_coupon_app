import CommonHeader from "../CommonHeader/CommonHeader";

export default function LeftRightPanelLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <div className='flex flex-col h-screen border border-gray'>
        <CommonHeader title='휴대전화번호를 눌러주세요' />
          <div className='h-full'>
            {children}
          </div>
      </div>
    </>
  )
}
