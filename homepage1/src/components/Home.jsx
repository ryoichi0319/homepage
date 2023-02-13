import React from 'react'
import Slider from './Slider'
import bag1 from './img/bag1.jpg'

const Home = () => {
  return (
    <div>
    <div className='slider'>
        <Slider />
    </div>
    <main>
        <img src={bag1} width="300px" height="300px" alt="" />
        <h2>
            <ul></ul>
        </h2>
    </main>
    </div>
  )
}

export default Home