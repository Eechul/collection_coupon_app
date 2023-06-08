'use client'

import ProductCard from "@/components/card/ProductCard/ProductCard"

const products = [
  {
    id: 1,
    name: '아메리카노',
    point: 10,
    imageUrl: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg'
  },
  {
    id: 2,
    name: '아메리카노',
    point: 10,
    imageUrl: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg'
  },
  {
    id: 3,
    name: '아메리카노',
    point: 10,
    imageUrl: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg'
  },
  {
    id: 4,
    name: '아메리카노',
    point: 10,
    imageUrl: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg'
  },
  {
    id: 5,
    name: '아메리카노',
    point: 10,
    imageUrl: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg'
  },
  {
    id: 6,
    name: '아메리카노',
    point: 10,
    imageUrl: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg'
  }
]

export default function Product() {

  return (
    <div className='flex pl-6 pr-6'>
      {products.map(product => <ProductCard product={product} />)}
    </div>
  )
}