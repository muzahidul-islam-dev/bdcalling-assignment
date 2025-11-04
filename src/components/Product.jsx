import React from 'react'

function Product({product, handleAddToCart}) {
  const {name, description, image} = product;
return <div className="card bg-gray-900 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" className='h-52 object-cover w-full' />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end mt-5">
      <div className="btn btn-primary" onClick={() => handleAddToCart(product)}>Add To Cart</div>
      <div className="btn btn-success">Buy Now</div>
    </div>
  </div>
</div>
}

export default Product
