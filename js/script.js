


const todosUsuarios = () => {
  const listaUsuarios = document.getElementById("listaUsuarios");
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then((usuarios) => 
      usuarios.forEach(usuario => {
      const edadesAleatorias = Math.floor(Math.random() * 21) + 25;
      const datosUsuarios = {
  ... usuario,
      edad: edadesAleatorias,
      address: `${usuario.address.street}, ${usuario.address.suite}, 
      ${usuario.address.city}`,
      company: usuario.company.name
      }
  
  const template = `<div class="contenedor">
                    <div class="lista"><li>
                      <div class="infoUsuario">
                        <p><strong>Nombre:</strong> ${datosUsuarios.name}</p>
                        <p><strong>Edad:</strong> ${datosUsuarios.age}</p>
                        <p><strong>Username:</strong> ${datosUsuarios.username}</p>
                        <p><strong>Teléfono:</strong> ${datosUsuarios.phone}</p>
                        <p><strong>Email:</strong> ${datosUsuarios.email}</p>
                        </li>
                        <div class="p">
                    <p><strong>Compañía:</strong> ${datosUsuarios.company}</p>
                    <p><strong>Dirección:</strong> ${datosUsuarios.address}</p>
                    </div>
                    </div>
                    <div>
                    <img class="foto" src="assets/img/${usuario.id}.jpeg" alt="${datosUsuarios.name}"/>
                    </div>
                    </div>`
  listaUsuarios.innerHTML += template;
  })
  
  .catch(error => {
      console.error('Error al obtener datos de usuarios:', error);
    })
  )}
  
  todosUsuarios()
  



/* ----- LARGO ----

const todosUsuarios = () => {
const listaUsuarios = document.getElementById("listaUsuarios");
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then((usuarios) => 
    usuarios.forEach(usuario => {
    const edadesAleatorias = Math.floor(Math.random() * 21) + 25;
    const datosUsuarios = {
... usuario,
    edad: edadesAleatorias,

    }

const nuevosDatos = {
    name: datosUsuarios.name,
    age: datosUsuarios.edad,
    username: datosUsuarios.username,
    phone: datosUsuarios.phone,
    email: datosUsuarios.email,
    company: datosUsuarios.company.name,
    address: `${datosUsuarios.address.street}, ${datosUsuarios.address.suite}, 
    ${datosUsuarios.address.city}`
    }
const template = `<div class="contenedor">
                  <div class="lista"><li>
                    <div class="infoUsuario">
                      <p><strong>Nombre:</strong> ${nuevosDatos.name}</p>
                      <p><strong>Edad:</strong> ${nuevosDatos.age}</p>
                      <p><strong>Username:</strong> ${nuevosDatos.username}</p>
                      <p><strong>Teléfono:</strong> ${nuevosDatos.phone}</p>
                      <p><strong>Email:</strong> ${nuevosDatos.email}</p>
                      </li>
                      <div class="p">
                  <p><strong>Compañía:</strong> ${nuevosDatos.company}</p>
                  <p><strong>Dirección:</strong> ${nuevosDatos.address}</p>
                  </div>
                  </div>
                  <div>
                  <img class="foto" src="assets/img/${usuario.id}.jpeg" alt="${nuevosDatos.name}"/>
                  </div>
                  </div>`
listaUsuarios.innerHTML += template;
})

.catch(error => {
    console.error('Error al obtener datos de usuarios:', error);
  })
)}

todosUsuarios()
*/