import{post} from "./API.js"


let Entrada = document.getElementById("tarea");
let btn = document.getElementById("add");
let Listado = document.getElementById("lista");
let Cuenta = document.getElementById("contador");
let empty = document.querySelector(".empty");
let tcontador=0
//elementos


function creacion() {
  console.log("Prueba");
  // es la funcion de agregar tareas
  let elemento1 = Entrada.value;

  

  //aqui empieza la condicon
  if (elemento1.length == "") {
    alert("INGRESE UNA TAREA");
  } else {
    let check = document.createElement("input");
    check.className = "btncheck";
    check.setAttribute("type", "checkbox");
    check.id="check"

    let btbEliminar23 = document.createElement("button");
    btbEliminar23.textContent = "🗑️";
    btbEliminar23.className = "color";

    let li = document.createElement("li");
    let txt = document.createElement("p");
    txt.id = "mov";

    let elemento = Entrada.value;
    txt.textContent = elemento;

  

    post(elemento)

    li.appendChild(txt);
    li.appendChild(check);
    li.appendChild(btbEliminar23);
    Listado.appendChild(li);

  

    //limpiar el campo entrada
    Entrada.value = "";
    empty.style.display = "none";

    check.addEventListener("click", function () {
      if (check.checked) {
        tcontador++;
        Cuenta.innerHTML = tcontador;
      } else {
        tcontador--;
        Cuenta.innerHTML = tcontador;
      }
    });

    btbEliminar23.onclick = function () {
      if (check.checked) {
        li.remove();
        check.remove();
        btbEliminar23.remove();
        tcontador--;
        Cuenta.innerHTML = tcontador;
      }
      //empty.style.display = "block";

      li.remove();
      check.remove();
      btbEliminar23.remove();
      Cuenta.innerHTML = tcontador;
      const item = document.querySelectorAll("li");
 
      
      console.log(item)
    
      if (item.length == 0) {
        empty.style.display = "block";
      }
    };
  }
}



function validar(e) {
  let tecla = e.code;
  if (tecla === "Enter") {
    creacion();
  }
}

export {creacion, validar}










