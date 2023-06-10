export default function MinusPlusValueButton() {

  return (
    <div className='flex'>
      <button className='border w-10 h-10 text-bold'>+</button>
      <span className='border w-10 h-10 text-bold text-center leading-9'>0</span>
      <button className='border w-10 h-10 text-bold'>-</button>
    </div>
  )
}