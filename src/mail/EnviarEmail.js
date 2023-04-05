import React from 'react';
import axios from 'axios';

//import './App.css';

//Libreria Toastify
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



//For API Requests

  //send email button click function
  function EnviarEmail(){
  try{
    const response =  axios.get('http://127.0.0.1:8000/api/send/email/');
    console.log(response.data);
  }catch(error){
    if (error.response) {
        console.error(`fallo ${error.response.status}`)
    }else{
      console.log('se a completado tu solicitud')
      //Success Message in Sweetalert modal
      Bounce({
        title: ['message'],
        text: "Thanks",
        type: 'success'
    })
  }}
  
  

    
    return (
      <div>
       <h1>hola</h1>
         <button onClick={e => {this.sendemail()}}>Click Me!! To Send Mail</button>
        </div>
)
    };
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