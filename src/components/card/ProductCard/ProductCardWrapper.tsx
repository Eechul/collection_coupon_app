'use client'

import ProductCard from "@/components/card/ProductCard/ProductCard"
import { getProducts } from "@/firebase/product"
import { getUserByPhoneNumber } from "@/firebase/user"
import { addProduct } from '@/redux/features/productSlice'
import { useAppDispath, useAppSelector } from "@/redux/hooks"
import { useEffect, useState } from "react"


export default function ProductCardWrapper() {
  const dispatch = useAppDispath()
  const datas = useAppSelector(state => state.productReducer.products)

  useEffect(() => {
    async function init() {
      const result = await getProducts()
      dispatch(addProduct(result))
    }
    init()
  }, [])

  return (
    <div className='flex p-6 overflow-x-auto'>
      {datas.map(product => <div key={product.id} className='flex flex-col grow-0 shrink-0 basis-auto pr-3'><ProductCard product={product} /></div>)}
    </div>
  )
}