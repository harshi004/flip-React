import React from'react';
import banner from '../images/banner1.png'
import banner1 from '../images/banner2.jpg'
function Section3(){
    return(
        <>
  <div id="carouselExampleControls" class="carousel slide section3" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={banner} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={banner1} class="d-block w-100" alt="..."/>
                    </div>
                 
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
       
        );
    }
    
    
    export default Section3;