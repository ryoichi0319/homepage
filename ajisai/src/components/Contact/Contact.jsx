import {useState} from 'react';
import { TextField,Grid } from '@mui/material';
import './Contact.scss';
import {init,sendForm,send} from 'emailjs-com';

const Contact = () => {
 
    return (
     
    
    <div></div>
  
    // const [name,setName] = useState("");
    // const [mail,setMail] = useState("");
    // const [message,setMessage] = useState("");

    // const sendEmail = () => {
    //     const user_id = process.env.REACT_APP_PORTFOLIO_EMAILJS_USER_ID;
    //     const service_id = process.env.REACT_APP_PORTFOLIO_EMAILJS_SERVICE_ID;
    //     const template_id = process.env.REACT_APP_PORTFOLIO_EMAILJS_TEMPLATE_ID;
    //     if((user_id != undefined) && (service_id != undefined) && (template_id != undefined))
    //     {
    //         init(user_id );

    //         const template_param = {
    //             to_name: name,
    //             email: mail,
    //             message: message
    //         };

    //         send(service_id,template_id,template_param).then(() => {
    //             console.log("success to send email");
    //         })
    //     }
    // }
    // const onChangeName = (e) => {
    //     setName(e.target.value);
    // }
    // const onChangeMail = (e) => {
    //     setMail(e.target.value);
    // }
    // const onChangeTitle = (e) => {
    //     setTitle(e.target.value);
    // }
    // const onChangeMessage = (e) => {
    //     setMessage(e.target.value);
    // }

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("push submit");
    //     sendEmail();
    // }

    // return (
    //     <div className="contact-page">
    //         <p className="contact-top">Contact</p>
    //         <Grid container alignItems="center" justify="center">
    //             <Grid item xs={8}>
    //                 <form onSubmit={onSubmit}>
    //                     <TextField className="contact-name" type="text" required label="氏名(必須)" fullWidth margin="normal" onChange={onChangeName} value={name} InputProps={{disableUnderline: true}}/>
    //                     <TextField className="contact-mail" type="text" required label="メールアドレス(必須)" fullWidth margin="normal" onChange={onChangeMail} value={mail} InputProps={{disableUnderline: true}}/>
    //                     <TextField className="contact-title" type="text" label="件名" fullWidth margin="normal" onChange={onChangeTitle} value={title} InputProps={{disableUnderline: true}}/>
    //                     <TextField className="contact-message" type="text" required label="お問い合わせ内容(必須)" fullWidth margin="normal" onChange={onChangeMessage} value={message} InputProps={{disableUnderline: true}}/>
    //                     <input className="contact-submit" type="submit"/>
    //                 </form>
    //             </Grid>
    //         </Grid>
            
    //     </div>
    )
    
}
export default Contact