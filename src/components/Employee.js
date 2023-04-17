


import axios from 'axios';
import { useState } from "react";


import "./Employees.module.css";

//------------Libreria--------------------
import { Element } from 'react-scroll';

function Employee() {
  //Asigno los campos de la base de datos con const
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");



  //Creo el evento guardar y mando una url para que se guarde
  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/save",
        {

          //Asigno los campos de la bd para guardarlos
          nombre: nombre,
          email: email,
          telefono: telefono,
          mensaje: mensaje

        });
      //Lanzo una alerta si se a registrado exitosamente 
      alert("Usuario registrado Exitosammente");
      setId("");
      setNombre("");
      setEmail("");
      setTelefono("");
      setMensaje("");
      //Load();

    }
    catch (err) {
      alert("Ha fallado el registro del usuario");
    }
  }
//-------------------------Validar inputs-----------

//------------------------Fin de validacion-------------


  return (
    <Element name="test5" className="element">
    <div className="contenedor">
      <h2>Detalles del Usuario</h2>
      <div class="container mt-8">
    


        <form>
          <div class="form-group">
            <input type="text" class="form-control" id="id" hidden
              value={id}
              onChange={(event) => {
                setId(event.target.value);
              }}

            />

            <label>Nombre del Usuario</label>
            <input type="text" class="form-control"
             id="nombre" autoComplete='off' 
             placeholder="nombre del usuario" 
              required
              value={nombre}
              onChange={(event) => {
                setNombre(event.target.value);
                
              }}
            />
          </div>


          <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" 
            id="email" autoComplete='off' 
            placeholder='email del usuario'
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>

          <div class="form-group">
            <label>Telefono</label>
            <input type="text" class="form-control"
             id="telefono" autoComplete='off'
              placeholder='telefono del usuario'
              value={telefono}
              onChange={(event) => {
                setTelefono(event.target.value);
              }}
            />
          </div>


          <div class="form-group">
            <label>Mensaje</label>
            <input type="text" class="form-control"
             id="mensaje" autoComplete='off' 
             placeholder='ingresa un mensaje'
              value={mensaje}
              onChange={(event) => {
                setMensaje(event.target.value);
              }}
            />
          </div>

          <div>
            <button class="btn btn-primary mt-4" onClick={save}>Guardar</button>
          </div>
        </form>
      </div>

      {/* <table id="separar" class="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Telefono</th>
            <th scope="col">Mensaje</th>

            <th scope="col">Opciones</th>
          </tr>
        </thead>
        {employees.map(function fn(employee) {
          return (
            <tbody>
              <tr>
                <th scope="row">{employee.id} </th>
                <td>{employee.nombre}</td>
                <td>{employee.email}</td>
                <td>{employee.telefono}</td>
                <td>{employee.mensaje}</td>
                <td>
                  <button type="button" class="btn btn-warning" onClick={() => editEmployee(employee)} >Editar</button>
                  <button type="button" class="btn btn-danger" onClick={() => DeleteEmployee(employee.id)}>Borrar</button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table> */}
    </div>
    </Element>
  );
}
export default Employee;






