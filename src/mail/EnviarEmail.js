import React from 'react';
import axios from 'axios';

//import './App.css';

//Libreria Toastify
import { Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Element } from 'react-scroll';

class EnviarEmail extends React.Component
{
  //send email button click function
  sendmail(){
    axios.get('http://127.0.0.1:8000/api/send/email/',
    
    alert("se a enviado tu correo")
    ).then(res=>
    {
      console.log(res.data['message']);
      //Success Message in Sweetalert modal
      // alert({
      //   title:  res.data['message'],
      //   text: "Thanks",
      //   type: 'success',
        
      // });
    
    }
    );
  }
  
  
  render(Message)
  {
    return (
      <Element name='test6' className='element'>
      <div style={{padding:25}}>
      <center> <h1>Email</h1></center>
      <center> <button class="btn btn-primary mt-4" onClick={e => {this.sendmail()}}>Enviar Mail</button></center>
        </div>
        </Element>
) } }
 export default EnviarEmail;




//  import { confirm } from 'react-toastify';

// const handleDelete = () => {
//   confirm({
//     message: '¿Estás seguro que deseas eliminar este elemento?',
//     onOk: () => {
//       // Código para eliminar el elemento
//     },
//     onCancel: () => {
//       // Código para cancelar la acción
//     }
//   });
// };