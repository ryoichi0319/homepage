import React from 'react'
import "./About.scss"

const About = () => {
  return (
    <div className='about'>
      <div className='company-greeting'>
       <h1>ご挨拶</h1>
       <img className='company-img' src="https://placehold.jp/300x300.png" alt="" width="800px" height="300px"/>
       <p className='company-text'>信頼を一番に考える 運送会社

​有限会社あじさい物流は2000年8月に創立し、皆様に愛されて20年、ここまで走り続けてきました。長年続けて分かった事は、信頼が一番重要だということです。信頼がないような会社に仕事も依頼出来ません。信頼できない従業員に仕事を任せる事も出来ません。信頼ある会社だからこそ仕事が依頼出来るし、信頼ある従業員だからこそ仕事が任せられます。弊社がここまでこれたのも、信頼できる従業員がお客様のニーズにあった満足できるサービス行い、お客様に信頼されるような会社になったからだと思います。弊社には経験豊富な信頼ある従業員ばかりです。その一人、一人が自信をもって責任ある仕事をやってくれます。この業界は一人で配達する事が多いため個々の信頼は弊社にとっても、お客様にとっても、とても重要だと考えています。信頼できる従業員、それこそが弊社の一番の強みであり、誇りです。

​​　　　　　　　

代表取締役　加賀田　龍彦

texttext text text text text texttext text text text text text</p>
      </div>
      <div className='company-contents'>
        <div className="company-title">
      <h1>会社概要</h1>
      </div>
      <table className='company-table' rules='all'>
       <tr className='company-row'>
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