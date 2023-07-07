import { creacion, validar, cargarTareas } from "./prueba.js";

let btn = document.getElementById("add");
let inputTarea = document.getElementById("tarea");
document.addEventListener("DOMContentLoaded", cargarTareas);

btn.onclick = creacion;
inputTarea.onkeydown = validar;
