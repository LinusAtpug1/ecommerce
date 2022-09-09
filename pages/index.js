
import React from 'react'

const Home = () => {
  return (
    <>
     HeroBanner

     <div className= "products-heading">
      
      <h2>Well branded speakers</h2>
      <p>Such a nice sets of speakers having high qualitative sounds</p>
     </div>

     <div className= "products-container">
       {['Product 1', 'Product 2'].map((product) => product )}
     </div>
     
     Footer
    </>
  )
}

export default Home