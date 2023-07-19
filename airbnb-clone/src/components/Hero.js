import React from 'react'


export default function Hero(){
   return ( 
   <div className='hero'>
    <img src={require('../images/photo-grid.png')}alt='different' className='hero--image' />
        <h1 className='hero--txt1'>Online Experiences</h1>
        <p className='hero--txt2'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>)
}