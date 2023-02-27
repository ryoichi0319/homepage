import React from 'react'
import ajisailogo2 from '../img/ajisailogo2.jpg'
import './Header.scss'

const Header = () => {
  return (
    <div>
    <header>
        <div className="headerLogoContent">
            <div className="headerLogo">
             <img src={ajisailogo2} width="100px" height="100px" alt=""/>
              
             <div className="logoText">
                      <p className='socialText'>有限会社</p>
                      <h1 className='asisaiText'>あじさい物流</h1>
                    
           </div>
           </div>

</div>
    
    </header>
    </div>
  )
}

export default Header