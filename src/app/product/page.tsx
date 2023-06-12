'use client'

import ProductCard from "@/components/card/ProductCard/ProductCard"

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

export default function Product() {

  return (
    <div className='flex p-6 overflow-x-auto'>
      {products.map(product => <div key={product.id} className='flex flex-col grow-0 shrink-0 basis-auto pr-3'><ProductCard product={product} /></div>)}
    </div>
  )
}