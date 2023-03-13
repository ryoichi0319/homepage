import React from 'react'
import Slider from './Slider'
import "./Home.scss"
import HomeNav from './HomeNav/HomeNav'
import News from './News/News'

const Home = () => {
  return (
    <div>
      <HomeNav />
    <div className='slider'>
        <Slider />
        
    </div>
     <div>
      <News/>
    </div>
    
    <section className="section">
         <div className='about-home'>
         <figure className="home">
             <img className="home-img" src="https://dummyimage.com/600x400/000/fff" alt="home-image" width="500px"></img>
             <figcaption className="home-caption">
                 <h2 className="home-headline">業務内容</h2>
                 <p className="home-desctiption">冷凍・チルド・ドライの3温度帯を大型車と中型車メインで各地に輸送しております。
                 クール便は10t冷凍車と4t冷凍車を中心に各地にサービスを提供しております。
                 プロとして、お客様のお荷物を品質、荷扱い、車内温度など様々な事に注意しながら安全に輸送します。
                
                    text text text text text text text text text text text text text
                    <br/>yyyy
                    ext text text text text text text text text text text text text
                    
                
                <br />
                  ext text text text text text text text
                 </p>
                 <div>
             <button className='home-about-gyomu'>業務内容について</button>
             </div>
             </figcaption>
             
            
         </figure>
         <figure className="home2">
             
             <figcaption className="home-caption">
                 <h2 className="home-headline2">what we can do?</h2>
                 <p className="home-desctiption2">冷凍・チルド・ドライの3温度帯を大型車と中型車メインで各地に輸送しております。
                 クール便は10t冷凍車と4t冷凍車を中心に各地にサービスを提供しております。
                 プロとして、お客様のお荷物を品質、荷扱い、車内温度など様々な事に注意しながら安全に輸送します。
                
                    text text text text text text text text text text text text text
                    <br/>yyyy
                    ext text text text text text text text text text text text text
                    
                  ext text text text text text text text
                 </p>
                 <button className='home-about-ajisai'>あじさいについて</button>
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