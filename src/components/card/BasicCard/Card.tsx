
export default function Card({ content, onClick }: { content: React.ReactNode, onClick?: Function }) {

  return (
    // <div className="border border-gray-200 p-4 m-4" onClick={() => { onClick && onClick() }}></div>  왜 안될까?
    <div className="border border-gray-200 p-4 m-4">
      {content}
    </div>
  )
}
