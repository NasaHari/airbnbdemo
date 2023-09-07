import React from 'react'
import star from '../images/Star 1-1.png'

const Card = (props) => {
  let badgeText
    if (props.openSpots === 0) {
      console.log("sold");
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
        console.log("online");

    }
    
  return (
    <div className="card" >
            {badgeText && <div className="card--badge">{badgeText}</div>}
       <img src={props.image} style ={{width:"100%" ,borderRadius:"10px",height:"150px",objectFit:"cover",paddingBottom:"10px"}} alt="{}"/>
        <div className='card-info'>
            <img src={star} style ={{width:"14px"}} alt=''/>
            <span >{props.rating}</span>
            <span style={{color:"gray"}}>({props.reviewCount} )</span>
            <span style={{color:"gray"}}>{props.location}</span>
        </div>
        <p style={{whiteSpace:"nowrap"}}>{props.title}</p>
        <p><strong>From {props.price}</strong>/person</p>
        </div>
  )
}

export default Card