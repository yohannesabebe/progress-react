import React from "react";



export default function Card(props){
    return(
<div className="card">
    <p>in card</p>
<img className='card--pic' src={require(props.coverImg)} alt='card '/>
{/* <p>{props.stats.rating}(props.stats.reviewCount).{props.location}</p>
<p>from ${props.price} / per person</p> */}
</div>
        
    )
}