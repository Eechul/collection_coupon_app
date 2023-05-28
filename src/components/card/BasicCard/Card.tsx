
export default function Card({ content }: { content: React.ReactNode }) {

  return (
    <div className="border border-gray-200 p-4 m-4">
      {content}
    </div>
  )
}
