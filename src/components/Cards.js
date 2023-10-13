import React from 'react'
import '../App';
import axios from 'axios'
import { useEffect, useState } from 'react'
export default function Cards() {
  const [products,setProducts] = useState([{}])
  useEffect(() => {
    axios.get('http://localhost:3002/products')
      .then((res) => setProducts(res.data))
  }, 0)
  console.log(products)
  return (
    <>
      {
        products.map((element, index) => {
          return (
            <>
              <div class="card float-start" style={{ width: '18rem' }}>
                <img src={element.thumbnail} height="150" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{element.title}</h5>
                  <p class="card-text">{element.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">{element.productId}</li>
                  <li class="list-group-item">{element.price}</li>
                  <li class="list-group-item">{element.brand}</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
            </>
          )
        })
      }
      <h1>Products Page</h1>
    </>
  )
}