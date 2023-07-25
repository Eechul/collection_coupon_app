import CommonHeader from '@/components/header/CommonHeader/CommonHeader'

export default function CertificationLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <div className='flex flex-col h-screen border border-gray'>
        <CommonHeader title='승인번호 4자리를 입력해주세요.' />
        <div className='flex h-full justify-center'>
          {children}
        </div>
      </div>
    </>
  )
}