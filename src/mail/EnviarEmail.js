import React from 'react';
import axios from 'axios';

//import './App.css';

//Libreria Toastify
import 'react-toastify/dist/ReactToastify.css';


class EnviarEmail extends React.Component
{
  //send email button click function
  sendmail(){
    axios.get('http://127.0.0.1:8000/api/send/email/',
    
    alert("se a enviado tu correo")
    ).then(res=>
    {
      console.log(res.data['message']);
    }
    );
  }
  
  
  render(Message)
  {
    return (

      null
) } }
 export default EnviarEmail;

