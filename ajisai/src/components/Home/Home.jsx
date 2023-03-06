import React from 'react'
import Slider from './Slider'
import "./Home.scss"
import HomeNav from './HomeNav'

const Home = () => {
  return (
    <div>
      <HomeNav />
    <div className='slider'>
        <Slider />
    </div>


    <div className="news" id="news">
    <div className="section-headline"> 
    NEWS
    </div>   
  <dl className='news-'>
    <div >
      <dt>2020/11/07</dt>
      <dd><a href="#" className="newsChild">Aページを更新しました。</a>
      </dd>
    </div>
    <div >
      <dt>2020/11/07</dt>
      <dd>
        <a className="newsChild2" href="#">Bページを更新しました。Bページを更新しました。Bページを更新しました。</a>
      </dd>
    </div>
  </dl>
</div>
    
    <section className="section">
         <h1 className="section-headline">About</h1>
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