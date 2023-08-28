import React, { useState } from 'react'
import mydata from "./data.js"
import './RiviewSlider.css'

export default function RiviewSlider(){
 

    const[index,setIndex] = useState(0);

    const next = () => {
        if (index < mydata.length - 1){

          console.log(mydata.length,"lllll")
          setIndex(index + 1);
        }
        else {
          setIndex(0)
        }
      }
    
      const pre = () => {
    
        if (index <= 0) {

          console.log(index , "kkkkk")
          setIndex(mydata.length - 1)
        }
        else {
          setIndex(index - 1)
        }
      }

      
  return (
    <div className='protect'>
    <div className='mainContainer'>
    <h1>DevloPer Profiles</h1>
    <div className="card">
      <div className='imgdiv'>
      <img className="card-img-top" src={mydata[index].image} alt="Card image" />
      </div>
      <div className="cardbody">
        <h4 className="card-title">{mydata[index].name}</h4>
        <p className="card-text"> Age :{mydata[index].age}</p>
         
         <h5>{mydata[index].detail}</h5>
      </div>
    </div>
    <div className='Btns'>
      <button type="button" className="btn btn-danger" onClick={pre}>prev</button>
      <button type="button" className="btn btn-danger" onClick={next}>next</button>
    </div>
  </div>
  </div>

  
// <div className='card'>
//   <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
//   <ol class="carousel-indicators">
//     <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//   </ol>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src={mydata[index].image} class="d-block w-100" alt="..."/>
//     </div>
    
//   </div>
//   <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true">{mydata[index].age}</span>
//     <span class="sr-only">Previous</span>
//   </a>
//   <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true">{mydata[index].name}</span>
//     <span class="sr-only">Next</span>
//   </a>
// </div>
// </div>
  )
}
