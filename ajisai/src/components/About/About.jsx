import React from 'react'
import "./About.scss"

const About = () => {
  return (
    <div className='about'>
      <div className='company-greeting'>
       <h1>ご挨拶</h1>
       <img className='company-img' src="https://placehold.jp/300x300.png" alt="" width="800px" height="300px"/>
       <p className='company-text'>当社はtext text text text text text text text text text text text<br/>
       text text text text text texttext text text text text texttext text text text text texttext text text text text text</p>
      </div>
      <div className='company-contents'>
        <div className="company-title">
      <h1>会社概要</h1>
      </div>
      <table className='collapse' rules='all'>
       <tr >
        <th>社名</th>
        <td>あじさい物流</td>
       </tr>
       <tr>
        <th>資本金</th>
        <td>。。。万円</td>
       </tr>
       <tr>
        <th>設立</th>
        <td>2000年</td>
       </tr>
      </table>
      </div>
    </div>
  )
}

export default About