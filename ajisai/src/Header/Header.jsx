import React from 'react'
import ajisaiok1 from '../img/ajisaiok1.png'
import './Header.scss'

const Header = () => {
  return (
    <div>
    <header className='header-header'>
        <div className="headerLogoContent">
            <div className="headerLogo">
             <img src={ajisaiok1} width="80px" height="80px" alt=""/>
            
              
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