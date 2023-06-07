'use client'

const products = [
  {
    id: 1,
    name: '아메리카노',
    point: 10,
    imageUrl: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg'
  }
]

export default function Product() {



  return (
    <div className='flex'>
      <div className='flex flex-col basis-1/5'>
        <div className='aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75'>
          <img src={products[0].imageUrl} className='object-cover object-center' />
        </div>
        <div>{products[0].name}</div>
        <div> {products[0].point}P</div>
        <div className='flex fle'>
          <div>+</div>|
          <div>2</div>|
          <div>-</div>
        </div>
      </div>
    </div>
  )
}