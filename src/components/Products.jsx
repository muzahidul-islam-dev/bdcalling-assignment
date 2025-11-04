import React, { useEffect, useState } from 'react'
import Product from './Product'
import CartItem from './CartItem'

function Products() {
  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])
  useEffect(() => {
    fetch('/data.json').then(res => res.json()).then(response => {
      setProducts(response);
    })
  }, [])

  const handleAddToCart = (product) => {
    const singleProduct = carts.find((item) => item.id == product.id);
    const totalCarts = carts.filter((item) => item.id != product.id);
    if (singleProduct) {
      singleProduct.cart_quantity += 1;
      setCarts([...totalCarts, singleProduct]);
    } else {
      const modifyProduct = {
        ...product,
        cart_quantity: 1
      }
      setCarts((prev) => [...prev, modifyProduct])
    }
  }
  return <div className="grid grid-cols-12 my-10">
    <div className="col-span-9 grid grid-cols-3 gap-10">
      {
        products.map((item) => <Product key={item.id} product={item} handleAddToCart={handleAddToCart} />)
      }
    </div>
    <div className="col-span-3">
      <div className="bg-gray-900 px-5 py-10">
        {
          carts.map((cartItem, index) => <CartItem key={index} product={cartItem} />)
        }
      </div>
    </div>
  </div>
}

export default Products
