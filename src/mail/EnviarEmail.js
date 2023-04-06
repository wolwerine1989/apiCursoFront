import React from 'react';
import axios from 'axios';

//import './App.css';

//Libreria Toastify
import { Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



//For API Requests

  //send email button click function



  class EnviarEmail extends React.Component
  {
    //send email button click function
    sendmail(){
      axios.get('http://127.0.0.1:8000/api/send/email/'
      ).then(res=>
      {
        console.log(res.data['message']);
        //Success Message in Sweetalert modal
        Bounce({
          title:  res.data['message'],
          text: "Thanks",
          type: 'success',
          
        });
      
      }
      );
    }
    
    
    
    render(Message)
    {
      return (
        <div>
        <center> <h1>Email</h1></center>
        <center> <button btn btn-primary onClick={e => {this.sendmail()}}>Enviar Mail</button></center>
          </div>
         
  ) } }















//   function EnviarEmail(){
//   try{
//     const response = axios.get('http://127.0.0.1:8000/api/send/email/');
//     console.log(response.data);
//   }catch(error){
//     if (error.response) {
//         console.error(`fallo ${error.response.status}`)
//     }else{
//       console.log('se a completado tu solicitud')
     
//       Bounce({
//         title: ['message'],
//         text: "Thanks",
//         type: 'success'
//     })
//   }}
  
  

    
//     return (
//       <div>
//        <h1>hola</h1>
//          <button onClick={e => {this.EnviarEmail()}}>Click Me!! To Send Mail</button>
//         </div>
// )
//     };
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