"use client"

import { minusProduct, plusProduct } from "@/redux/features/productSlice"

import PlusMinusValueButton from "@/components/button/MinusPlusValueButton/MinusPlusValueButton"

interface ProductCardProps {
  product: any;
}

export default function ProductCard({ product }: ProductCardProps) {

  return (
    <div className='border p-3'>
      <div className='aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75'>
        <img src={product.imageUrl} className='object-cover object-center w-44' />
      </div>
      <div className='pt-2 text-xl'>{product.name}</div>
      <div className='pt-2 text-lg'>{product.point}P</div>
      <div className='pt-3 text-lg'>
        <PlusMinusValueButton value={product.number} targetId={product.id} actions={{ minus: minusProduct, plus: plusProduct }} />
      </div>
    </div>
  )
}