import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  const [productList, setProductLista] = useState<TProduct[]>([])
  useEffect(() => {
    fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data }) => setProductLista(data))
  }, [])
  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>
      {productList.map((product) => (
        <div>{product.image}</div>
      ))}
    </div>
  )
}

export default HomePage
