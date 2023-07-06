'use client'

import ProductCard from "@/components/card/ProductCard/ProductCard"
import { addProduct } from '@/redux/features/productSlice'
import { useAppDispath, useAppSelector } from "@/redux/hooks"
import { useEffect, useState } from "react"

const products = [
  {
    id: 1,
    name: '아메리카노',
    point: 10,
    imageUrl: 'https://kfcapi.inicis.com/kfcs_api_img/KFCS/goods/DL_1444725_20220704182019850.png'
  },
  {
    id: 2,
    name: '아메리카노',
    point: 10,
    imageUrl: 'https://kfcapi.inicis.com/kfcs_api_img/KFCS/goods/DL_1444725_20220704182019850.png'
  },
  {
    id: 3,
    name: '아메리카노',
    point: 10,
    imageUrl: 'https://kfcapi.inicis.com/kfcs_api_img/KFCS/goods/DL_1444725_20220704182019850.png'
  },
  {
    id: 4,
    name: '아메리카노',
    point: 10,
    imageUrl: 'https://kfcapi.inicis.com/kfcs_api_img/KFCS/goods/DL_1444725_20220704182019850.png'
  },
  {
    id: 5,
    name: '아메리카노',
    point: 10,
    imageUrl: 'https://kfcapi.inicis.com/kfcs_api_img/KFCS/goods/DL_1444725_20220704182019850.png'
  },
  {
    id: 6,
    name: '아메리카노',
    point: 10,
    imageUrl: 'https://kfcapi.inicis.com/kfcs_api_img/KFCS/goods/DL_1444725_20220704182019850.png'
  },
  {
    id: 7,
    name: '아메리카노',
    point: 10,
    imageUrl: 'https://kfcapi.inicis.com/kfcs_api_img/KFCS/goods/DL_1444725_20220704182019850.png'
  }
]

export default function ProductCardWrapper() {
  const dispatch = useAppDispath()
  const datas = useAppSelector(state => state.productReducer.products)
  const [usePoint, setUsePoint] = useState(0)

  useEffect(() => {
    console.log('ProductCardWrapper', datas)
    dispatch(addProduct(products.map(p => ({ id: p.id, name: p.name, point: p.point, imageUrl: p.imageUrl }))))
    // selector 호출하여 product 뿌려주기
  }, [])

  return (
    <div className='flex p-6 overflow-x-auto'>
      {datas.map(product => <div key={product.id} className='flex flex-col grow-0 shrink-0 basis-auto pr-3'><ProductCard product={product} /></div>)}
    </div>
  )
}