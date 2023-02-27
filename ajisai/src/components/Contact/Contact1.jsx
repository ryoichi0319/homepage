// import {useState} from 'react';

// import './Contact.scss';
// import {init,sendForm,send} from 'emailjs-com';
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';


// const Contact = () => {
//   const  [name, setName] = useState('');
//   const [company, setCompany] = useState('')
//   const [mail, setMail] = useState('')
//   const [title, setTitle] = useState('')
//   const [message, setMessage] = useState('')
 
//    return (
//     <div className="mainContent">
//       <h2 className="pageTitle">お問い合わせ</h2>
//       <div className="contentsBox">
//         <p>
//           お問い合わせは、以下のフォームから受け付けております。
//         </p>
//         <form>
//           <div>
//             <label htmlFor="nameForm">氏名：</label>
//           </div>
//           <input type="text" id="nameForm" className="formInput" />
//           <div>
//             <label htmlFor="companyNameForm">会社名：</label>
//           </div>
//           <input type="text" id="companyNameForm" className="formInput"
//            required />
//           <div>
//             <label htmlFor="mailForm">メールアドレス：</label>
//           </div>
//           <input type="email" id="mailForm" className="formInput" />
//           <div>
//             <label htmlFor="mailTitleForm">件名：</label>
//           </div>
//           <input type="text" id="mailTitleForm" className="formInput" />
//           <div>
//             <label htmlFor="mailContentForm">お問い合わせ内容：</label>
//           </div>
//           <textarea type="text" id="mailContentForm" className="formInput"
//            rows="5" />
//           <div className="btns">
//             <div>
//               <Button variant="contained" 
//                 endIcon={<SendIcon />} >
//                 <strong>お問い合わせを送信する</strong>
//               </Button>
//             </div>
//             <div>
//               <Button variant="contained"
//                 >
//                 キャンセル
//               </Button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );}

//   export default Contact