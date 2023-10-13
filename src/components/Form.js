import React from 'react'
import { useState,useEffect} from 'react'
import axios from 'axios'
export default function Form() {
    const [id,setId]=useState('')
    const [title,setTitle]=useState('')
    const [brand,setBrand]=useState('')
    const [price,setPrice]=useState('')
    const [des,setDes]=useState('')
    const [img,setImg]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3002/products',productData).then((res)=>{
            alert("successfully submitted");
        })
    }
    const [productList,setProductList]=useState([{}])
    useEffect(()=>{
        axios.get('http://localhost:3002/products').then((res)=>{setProductList(res.data)})
        console.log(productList);
    },0)
    const productData={
        productId:id,
        title:title,
        brand:brand,
        price:price,
        description:des,
        thumbnail:img
    }
    let sno=1;
  return (
    <>
      <div class="container-fluid" >
        <div class="row justify-content-center">
            <h1>Product Form</h1>
            <form method='post' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label>Product Id</label>
                    <input type="text" className="form-control" placeholder='Enter Product Id' onChange={(e)=>{setId(e.target.value)}}/>
                </div>
                <div className='mb-3'>
                    <label>Product Title</label>
                    <input type="text" className="form-control" placeholder='Enter Product Title'onChange={(e)=>{setTitle(e.target.value)}}/>
                </div>
                <div className='mb-3'>
                    <label>Brand</label>
                    <input type="text" className="form-control" placeholder='Enter Brand' onChange={(e)=>{setBrand(e.target.value)}}/>
                </div>
                <div className='mb-3'>
                    <label>Price</label>
                    <input type="text" className="form-control" placeholder='Enter Price' onChange={(e)=>{setPrice(e.target.value)}}/>
                </div>
                <div className='mb-3'>
                    <label>Description</label>
                    <textarea  className="form-control" row='5' onChange={(e)=>{setDes(e.target.value)}}></textarea>
                </div>
                <div className='mb-3'>
                    <label>Image</label>
                    <input type="url" className="form-control" placeholder='Enter Product URL' onChange={(e)=>{setImg(e.target.value)}}/>
                </div>
                <button className='btn btn-info float-end'>Submit</button>
            </form>
        </div>
      </div>
      <table class="table table-bordered">
        <thead>
            <tr>
                <th>Sno</th>
                <th>Product Id</th>
                <th>Title</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Description</th>
                <th>Thumbnail</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
              productList.map((e,i)=>{
                 return(
                    <>
                        <tr>
                            <td>{sno++}</td>
                            <td>{e.productId}</td>
                            <td>{e.title}</td>
                            <td>{e.brand}</td>
                            <td>{e.price}</td>
                            <td>{e.description}</td>
                            <td><img src={e.thumbnail} height="100"/></td>
                            <td><button className="btn btn-primary"><i className='fa-solid fa-edit'></i></button>&nbsp;&nbsp;
                            <button className="btn btn-danger" /*onClick={handleDelete(e.id)}*/><i className='fa-solid fa-trash'></i></button>
                             </td>
                        </tr>
                    </>
                 )
                })
            }
        </tbody>
        </table>  
    </>
  )
}