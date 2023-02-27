import React from 'react'
import Slider from './Slider'
import "./Home.scss"

const Home = () => {
  return (
    <div>
    <div className='slider'>
        <Slider />
    </div>
    
    <section className="section">
         <h1 className="section-headline">About</h1>
         <div className='about-home'>
         <figure className="home">
             <img className="home-img" src="https://dummyimage.com/600x400/000/fff" alt="home-image" width="500px"></img>
             <figcaption className="home-caption">
                 <h2 className="home-headline">業務内容</h2>
                 <p className="home-desctiption">冷凍・チルド・ドライの3温度帯を大型車と中型車メインで各地に輸送<br />しております
                
                    text text text text text text text text text text text text text
                    <br/>yyyy
                    ext text text text text text text text text text text text
                    
                
                <br />
                  ext text text text text text text text
                 </p>
             </figcaption>
            
         </figure>
         <figure className="home2">
             
             <figcaption className="home-caption">
                 <h2 className="home-headline2">what we can do?</h2>
                 <p className="home-desctiption2">text text text text text text text text
                <br />
                    text text text text text text text text text text text text text
                    <br/>yyyy
                    ext text text text text text text text text text text text
                    
                
                <br />
                  ext text text text text text text text
                 </p>
             </figcaption>
             <img className="home-img2" src="https://dummyimage.com/600x400/000/fff" alt="home-image" width="500px"></img>

            
         </figure>
         </div>
     </section>
     <section className='section2'>
      <div className='home-four'>
        <img src="https://placehold.jp/200x200.png" alt="" />
        <img src="https://placehold.jp/200x200.png" alt="" />
        <img src="https://placehold.jp/200x200.png" alt="" />
        <img src="https://placehold.jp/200x200.png" alt="" />
      </div>
     </section>

    </div>
    
  )
}

export default Home;