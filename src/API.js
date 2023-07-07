//post
async function enviarTarea(task) {
  const response = await fetch("http://localhost:3000/api/task", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const tarea = await response.json();
  return tarea;
}

//GET
async function traerTareas() {
  const response = await fetch("http://localhost:3000/api/task/", {
    method: "GET",
  });

  const getPost = await response.json();
  return getPost;
}

//DELETE
async function borrarTareas(id) {
  const response = await fetch("http://localhost:3000/api/task/" + id, {
    method: "DELETE",
  });
  const deleteTask = await response.json();
  return deleteTask;
}

//PUT
async function actualizarTareas(id, task) {
  const response = await fetch("http://localhost:3000/api/task/" + id, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const post = await response.json();
  return post;
}

export { traerTareas, actualizarTareas, borrarTareas, enviarTarea };
