import NumberDisplayPad from '@/components/pad/NumberDisplayPad/NumberDisplayPad'

export default function Certification() {
  return (
    <div className='w-1/2 h-full'>
      <NumberDisplayPad submitButtonText='승인' movePage='/completion/use' randomPadNumber={true} />
    </div>
  )
}
