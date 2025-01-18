import './ListProduct.css'
import { useState, useEffect} from 'react'
import cross_icon from '../../assets/arrow.png'

const ListProduct = () => {

  const [allproducts,setAllProducts] = useState([]);

  const fetchiInfo = async () =>{
    await fetch('http://localhost:4000/allproducts')
    .then((res)=> res.json())
    .then((data)=>{setAllProducts(data)}) 
   }

   useEffect(()=>{
    fetchiInfo();
   },[])

   const remove_product =async (id)=>{
    await fetch('http://localhost:4000/removeproduct',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id:id})
    })
    await fetchiInfo();
   }


  return (
    <div className='list-product'>
      <h1>All Products list</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product,index)=>{
          return <>
          <div key={index} className="listproduct-format-main listproduct-format">
            <img className='listproduct-product-icon 'src={product.image} alt="" />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img onClick={()=>{remove_product(product.id)}}className="listproduct-remove-icon" src={cross_icon} alt=""/>
          </div>
          <hr />
          </>
        })}

      </div>
      
    </div>
  )
}

export default ListProduct
