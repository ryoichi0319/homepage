import {useState} from 'react';

import './Contact.scss';
import {init,send} from 'emailjs-com';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


const Contact = () => {
  const  [name, setName] = useState('');
  const [company, setCompany] = useState('')
  const [mail, setMail] = useState('')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')

  const sendMail = ()=>{
    const publicKey = import.meta.env.VITE_PUBLIC_KEY
    const serviceID = import.meta.env.VITE_SERVICE_ID
    const templateID = import.meta.env.VITE_TEMPLATE_ID

    if(
      publicKey !== undefined &&
      serviceID !== undefined &&
      templateID !== undefined
    ){
      init(publicKey);
      
      const template_param = {
        to_name: name,
        company: company,
        from_email: mail,
        title: title,
        message: message,
      };
    
    send(serviceID, templateID, template_param).then(()=>{
      window.alert('お問い合わせを送信致しました。')
      setName('');
      setCompany('');
      setMail('');
      setMessage('');
      setTitle('');

    })
  }
  }
  const handleClick =(e) =>{
    e.preventDefault();
    sendMail();
  };


  const handleCanceled =()=>{
    setName('');
    setCompany('');
    setMail('');
    setMessage('');
    setTitle('');
  }

  const disableSend = 
  name === '' || mail === '' || message === '';
 
   return (
    <div className="mainContent">
      <h2 className="pageTitle">お問い合わせ</h2>
      <div className="contentsBox">
        <p>
          お問い合わせは、以下のフォームから受け付けております。
        </p>
        
        <form>
          <table className="contact-table">

            <tr>
              <td className='contact-data'>
                <label htmlFor="nameForm">氏名：</label>
              </td>
              <td>
                <input type="text" id="nameForm" className="formInput" 
                value={name} onChange={(e)=>setName(e.target.value)}/>
              </td>
            </tr>
          <tr>
          <td className='contact-data'>
              <label htmlFor="companyNameForm">会社名：</label>
            </td>
            <td>
              <input type="text" id="companyNameForm" className="formInput"
               required 
               value={company} onChange={(e)=>setCompany(e.target.value)}/>
            </td>
          </tr>

          <tr>
          <td className='contact-data'>
                <label htmlFor="mailForm">メールアドレス：</label>
            </td>
            <td>
                <input type="email" id="mailForm" className="formInput" 
                 value={mail} onChange={(e)=>setMail(e.target.value)}/>
            </td>
          </tr>
          <tr>
          <td className='contact-data'>
                <label htmlFor="mailTitleForm">件名：</label>
            </td>
            <td>
                <input type="text" id="mailTitleForm" className="formInput" 
                value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </td>
          </tr>

          <tr>
          <td className='contact-data'>
                  <label htmlFor="mailContentForm">お問い合わせ内容：</label>
              </td>
              <td>
                  <textarea type="text" id="mailContentForm" className="formInput" cols="60"
                   rows="6" value={message} onChange={(e)=>setMessage(e.target.value)} />
               </td>
           </tr>
        </table>
          <div className="btns">
            <div className='contact-send'>
              <Button variant="contained" 
                endIcon={<SendIcon />} onClick={handleClick} disabled={disableSend}>
                <strong>お問い合わせを送信する</strong>
              </Button>
            </div>
            <div className='contact-canceled'>
              <Button variant="contained" onClick={handleCanceled}
               color='error' size='small'>
                キャンセル
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );}

  export default Contact