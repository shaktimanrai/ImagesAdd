
import React from 'react'

function SimpleInterest() {
  const name="shaktiman";
  const img1="https://picsum.photos/200/300";
  const img2="https://picsum.photos/201/300";
  const img3="https://picsum.photos/202/300";
  const Links="https://www.google.com";
  return (<>
  <h1 className='heading'>My name is {name}</h1>
  <div className='img_div'>
  <img src={img1} alt=""/>
  <img src={img2} alt=""/>
  <a href={Links} target="_shakti">
  <img src={img3} alt=""/>
  </a>
  </div>

  </>
    
  )
}

export default SimpleInterest

