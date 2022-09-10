import React from 'react'
import { Product, FooterBanner, HeroBanner} from '../components';
import { client} from '../lib/client';

const Home = () => {
  return (
    <>
     <HeroBanner />

     <div className= "products-heading">
      
      <h2>Well branded speakers</h2>
      <p>Such a nice sets of speakers having high qualitative sounds</p>
     </div>

     <div className= "products-container">
       {['Product 1', 'Product 2'].map((product) => product )}
     </div>
     
     <FooterBanner />
    </>
  )
}
export const getServerSideProps = async () => {
  const query = '*[_type== "product"]';
  const products = await client.fetch(query);

}

export default Home