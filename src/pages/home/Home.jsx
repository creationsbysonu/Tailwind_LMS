import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/card'

const Home = () => {
  return (
    <>
         <Navbar /> 
         <div className='flex flex-wrap justify-normal'>
         <Card />
         <Card />
         <Card />
         <Card />
         </div>
        
    </>
  )
}

export default Home