interface CommonHeaderProps {
  title: string;
}

export default function CommonHeader({ title }: CommonHeaderProps) {

  return (
      <div className='text-center text-black h-16 border-b border-b-gray align-middle py-4'>{title}</div>
  )
}
