import {
  traerTareas,
  actualizarTareas,
  borrarTareas,
  enviarTarea,
} from "./API.js";

let btn = document.getElementById("add");
let Entrada = document.getElementById ("tarea")
let Cuenta = document.getElementById("contador");
let empty = document.querySelector(".empty");
let tcontador = 0;
//elementos



async function creacion() {
  console.log("Prueba");
  // es la funcion de agregar tareas
  let texto = Entrada.value;
  let task = {
    task: "",
    checked: false,
  };
  if (texto.length == "") {
    alert("INGRESE UNA TAREA");
  } else {
    task.task = texto;
   //se crea la tarea en el servidor
    let respuesta = await enviarTarea(task); 
    crearElemento(respuesta.id, respuesta.task, respuesta.checked)
    Entrada.value = ""
  }

}

function validar(e) {
  let tecla = e.code;
  if (tecla === "Enter") {
    creacion();
  }
}

async function cargarTareas() {
  let tareas = await traerTareas();
  let ContadorLi = 0;
  tareas.forEach((tarea) => {
    crearElemento(tarea.id, tarea.task, tarea.checked);
  });
  for (let index = 0; index < tareas.length; index++) {
    if (tareas[index].checked == true) {
      ContadorLi++;
    }
  }
  Cuenta.textContent = ContadorLi;
}

function crearElemento(id, texto, checked) {
  let Listado = document.getElementById("lista");
  let li = document.createElement("li");
  let txt = document.createElement("p");
  li.id = id;
  txt.textContent = texto;

  Entrada.value = "";
  
  let check = document.createElement("input");
  check.className = "btncheck";
  check.setAttribute("type", "checkbox");
  check.id = "check";
  check.checked = checked

  check.addEventListener("click", async function () {
    if (check.checked) {
      tcontador++;
      Cuenta.innerHTML = tcontador;
    } else {
      tcontador--;
      Cuenta.innerHTML = tcontador;
    }
    await actualizarTareas(li.id, {checked: check.checked}); //
  });


  let btnEliminar = document.createElement("button");
  btnEliminar.textContent = "🗑️";
  btnEliminar.className = "color";

  btnEliminar.onclick = async function () {
    if (check.checked) {
      tcontador--;
      Cuenta.innerHTML = tcontador;
    }
    const item = document.querySelectorAll("li");
    if (item.length == 0) {
      empty.style.display = "block";
    }
    await borrarTareas(li.id);
    li.remove();
  };
  
  li.appendChild(check);
  li.appendChild(txt);
  li.appendChild(btnEliminar);
  Listado.appendChild(li);

  empty.style.display = "none";
}
export { creacion, validar, cargarTareas };
