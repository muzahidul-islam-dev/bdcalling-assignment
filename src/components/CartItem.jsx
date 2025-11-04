import React from 'react'

function CartItem({product}) {
    return <div>
        <div className="grid grid-cols-12 gap-5 rounded-lg bg-gray-800 my-5">
            <div className="col-span-4">
                <img src={product.image} className='object-cover h-full rounded-l-lg' alt="" />
            </div>
            <div className="col-span-8 py-1 px-2">
                <h3 className='text-gray-400'>{product.name}</h3>
                <p className='text-sm text-gray-400'>Price: {product.price}$</p>
                <p className='text-sm text-gray-400'>Quantity: {product.cart_quantity}</p>
            </div>
        </div>
    </div>
}

export default CartItem
