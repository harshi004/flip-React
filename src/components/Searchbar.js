import React from'react';
import logo from '../images/flip.jpg'
function Searchbar(){
    return(
        <>
        <div className='row com mt-4'>
            <div className='col-md-2 '>
                 <img src={logo}  width={200} height={70}/>
            </div>
            <div className='col-md-5'>
            <input type="text" placeholder='search' className="form-control dis" style={{ borderRadius: "30px 0px 30px 0px"}}  ></input>

            </div>
            <div className='col-md-2 '>
            <p className='mb-2'><i class="fa-solid fa-house size"></i>Become a Seller</p>
            </div>
            <div className='col-md-1 '>
            <p className='mb-2'><i class="fa-solid fa-user"></i>Harshini</p>
            </div>
            <div className='col-md-1 '>
            <p className='mb-2'> <i class="fa-solid fa-cart-shopping"></i>  Cart</p>
            </div>
            <div className='col-md-1 '>
            <p className='mb-2'> <i class="fa-solid fa-ellipsis-vertical"></i>  </p>
            </div>
        </div>
        </>
       
        );
    }
    
    export default Searchbar;
