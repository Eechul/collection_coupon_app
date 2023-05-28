export default function LeftRightPanelLayout({ left, right }: { left: React.ReactNode, right: React.ReactNode }) {

  return (
    <>
      <div className='flex h-full'>
        <div className="w-1/2">
          {left}
        </div>
        <div className='w-1/2 border-l border-gray'>
          {right}
        </div>
      </div>
    </>
  )
}
