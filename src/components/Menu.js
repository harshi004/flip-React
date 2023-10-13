import React from'react';

import offer from '../images/offer.jpg'
import mobile from '../images/mobile.jpg'
import ele from '../images/ele.jpg'
import tv from '../images/tv.jpg'
import fash from '../images/fash.jpg'
import bea from '../images/bea.jpg'
import home from '../images/home.jpg'
import fur from '../images/fur.jpg'
import fly from '../images/flight.jpg'
import gro from '../images/gro.jpg'
function Menu(){
    return(
        <>
        <div className='row mt-2 com  harsh'>
        <div className='col-md-1 '>
              <br></br>
        </div>
        <div className='col-md-1 '>
            <img src={offer}/>  
            <p>Top Offers</p>
        </div>
        <div className='col-md-1 '>
            <img src={mobile}/>  
            <p>Mobile </p>
        </div>
        <div className='col-md-1 '>
            <img src={ele}/>  
            <p>Electronics</p> 
        </div>
        <div className='col-md-1'>
            <img src={tv}/>  
            <p>TVs App</p> 
        </div>
        <div className='col-md-1 '>
        <img src={fash}/>  
            <p>Fashion</p> 
        </div>
        <div className='col-md-1 '>
        <img src={bea}/>  
            <p>Beauty</p> 
        </div>
        <div className='col-md-1'>
        <img src={home}/>  
            <p>Home & Kitchen</p> 
        </div>
        <div className='col-md-1 '>
        <img src={fur}/>  
            <p>Furniture</p> 
        </div>
        <div className='col-md-1'>
        <img src={fly}/>  
            <p>Flights</p> 
        </div>
        <div className='col-md-1 '>
        <img src={gro}/>  
            <p>Grocery</p> 
        </div>
        <div className='col-md-1 '>
              <br></br>
        </div>
    </div>
    </>
        );
    }
    
    
    export default Menu;