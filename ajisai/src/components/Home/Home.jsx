import React from 'react'
import Slider from '../Slider'
import "./Home.scss"

const Home = () => {
  return (
    <div>
    <div className='slider'>
        <Slider />
    </div>
    
    <section className="section">
         <h1 className="section-headline">About</h1>
         <figure className="home">
             <img className="home-img" src="https://dummyimage.com/600x400/000/fff" alt="home-image"></img>
             <figcaption className="home-caption">
                 <h2 className="home-headline">what we can do?</h2>
                 <p className="home-desctiption">text text text text text text text text
                <br />
                    text text text text text text text text text text text text text
                    <br/>yyyy
                    ext text text text text text text text text text text text
                    
                
                <br />
                  ext text text text text text text text
                 </p>
             </figcaption>
            
         </figure>
     </section>

    </div>
    
  )
}

export default Home;