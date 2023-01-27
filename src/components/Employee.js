



import axios from 'axios';
import {useEffect, useState } from "react";
 
function Employee()
{
  //Asigno los campos de la base de datos con const
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje,setMensaje] = useState("");
  const [employees, setUsers] = useState([]);
 
useEffect(() => {
  (async () => await Load())();
  }, []);
 
  async function  Load()
  {
     const result = await axios.get(
         "http://127.0.0.1:8000/api/employees");
         setUsers(result.data);
         console.log(result.data);
  }
    
  //Creo el evento guardar y mando una url para que se guarde
     async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://127.0.0.1:8000/api/save",
        {
        
          //Asigno los campos de la bd para guardarlos
          nombre: nombre,
          email: email,
          telefono: telefono,
          mensaje:mensaje
        
        });
        //Lanzo una alerta si se a registrado exitosamente 
        alert("Empleado registrado Exitosamente");
          setId("");
          setNombre("");
          setEmail("");
          setTelefono("");
          setMensaje("");
          Load();
        
        }
    catch(err)
        {
          alert("Ha fallado el registro del usuario");
        }
   }
   
   //Preparo los datos en una funcion asincrona 
   async function editEmployee(employees)
   {
    //Asigno los campos de la bd para modificarlos
    setNombre(employees.nombre);
    setEmail(employees.email);
    setTelefono(employees.telefono);
    setMensaje(employees.mensaje);
    setId(employees.id);
    
   }
 
 
    //Creo la funcion asicrona DeleteEmployee que va borrar los campos de la base de datos
   async function DeleteEmployee(id)
   {
      //Asigno la url y la llave primaria
        await axios.delete("http://127.0.0.1:8000/api/delete/" + id);
        alert("El empleado se a borrado exitosamente");
        Load();
  
   }
 
 
 ////Creo la funcion asincrona update
   async function update(event)
   {
    event.preventDefault();
 
   try
       {
        //creo la url con la clave primaria, mediante el id actualizara los campos
        await axios.put("http://127.0.0.1:8000/api/update/"+ employees.find(u => u.id === id).id || id,
       {
         id: id,
         nombre: nombre,
         email: email,
         telefono: telefono,
         mensaje:mensaje
      
       });
         alert("Registro Actualizado");
         setId("");
         setNombre("");
         setEmail("");
         setTelefono("");
         setMensaje("");
         Load();
      
       }
   catch(err)
       {
         alert("Fallo la Actualizacion de datos");
       }
  }
 
  return (
    <div>
       <h1>Detalles del Empleado</h1>
       <div class="container mt-4" >
          <form>
              <div class="form-group">
               <input  type="text" class="form-control" id="id" hidden
               value={id}
               onChange={(event) =>
                {
                  setId(event.target.value);      
                }}
              
               />
                
                <label>Nombre del Empleado</label>
                <input  type="text" class="form-control" id="nombre"
                value={nombre}
                onChange={(event) =>
                  {
                    setNombre(event.target.value);      
                  }}
                />
              </div>
              <div class="form-group">
                <label>Email</label>
                <input  type="text" class="form-control" id="email"
                 value={email}
                  onChange={(event) =>
                    {
                      setEmail(event.target.value);      
                    }}
                />
              </div>
 
              <div class="form-group">
                <label>Telefono</label>
                <input type="text" class="form-control" id="telefono"
                  value={telefono}
                onChange={(event) =>
                  {
                    setTelefono(event.target.value);      
                  }}
                />
              </div>
 
                 <div>
              <button   class="btn btn-primary mt-4"  onClick={save}>Guardar</button>
              <button   class="btn btn-warning mt-4"  onClick={update}>Actualizar</button>
              </div>  
            </form>
          </div>
 
<table class="table table-dark" align="center">
  <thead>
    <tr>
      <th scope="col">Empleado Id</th>
      <th scope="col">Empleado Nombre</th>
      <th scope="col">Empleado Email</th>
      <th scope="col">Empleado Telefono</th>
      <th scope="col">Empleado Mensaje</th>

      <th scope="col">Opciones</th>
    </tr>
  </thead>
       {employees.map(function fn(employee)
       {
            return(
            <tbody>
                <tr>
                <th scope="row">{employee.id} </th>
                <td>{employee.nombre}</td>
                <td>{employee.email}</td>
                <td>{employee.telefono}</td>        
                <td>{employee.mensaje}</td>
                <td>
                    <button type="button" class="btn btn-warning"  onClick={() => editEmployee(employee)} >Editar</button>  
                    <button type="button" class="btn btn-danger" onClick={() => DeleteEmployee(employee.id)}>Borrar</button>
                </td>
                </tr>
            </tbody>
            );
            })}
            </table>
       </div>
            );
        }
export default Employee;































// function Employee() {
//     return (
//       <div className="App">
//         <form>
//           <div class="form-group">
//             <label>Nombre</label>
//             <input type="text" class="form-control" id="nombre" placeholder="Ingrese su nombre"
//             value={nombre}
//             onChange={(event)=>
//             {
//               setNombre(event.target.value);
//             }}
//             />
//           </div>

//           <div class="form-group">
//             <label>Email</label>
//             <input type="text" class="form-control" id="email" placeholder="Ingrese su email"
//             value={email}
//             onChange={(event)=>
//             {
//               setEmail(event.target.value);
//             }}
//             />
//           </div>

//           <div class="form-group">
//             <label>telefono</label>
//             <input type="text" class="form-control" id="telefono" placeholder="Ingrese su numero de telefono"
//             value={telefono}
//             onChange={(event)=>
//             {
//               setTelfono(event.target.value);
//             }}
//             />
//           </div>

//           <div class="form-group">
//             <label>Mensaje</label>
//             <input type="text" class="form-control" id="mensaje" placeholder="Ingrese un mensaje"
//             value={mensaje}
//             onChange={(event)=>
//             {
//               setMensaje(event.target.value);
//             }}
//             />
//           </div>

//           <button type="submit" class="btn btn-primary">Submit</button>
//         </form>  
//     </div>
//     );
//   }
  
//   export default Employee;
  