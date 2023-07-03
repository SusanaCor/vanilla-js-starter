
async function post(tarea) {
    console.log("enviando al API")
    console.log(tarea)
    
let _datos = {
    task: tarea,

  }

  const response = await fetch('http://localhost:3000/api/task', {
    method: "POST",
    body: JSON.stringify(_datos),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })

  
  .then(response => response.json()) 
  .then(json => console.log(json))
  .catch(err => console.log(err));





}



async function get(tarea) {
    console.log("enviando al API")
    console.log(tarea)
    
let _datos = {
    task: tarea,

  }

  const response = await fetch('http://localhost:3000/api/task', {
    method: "POST",
    body: JSON.stringify(_datos),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })

  
  .then(response => response.json()) 
  .then(json => console.log(json))
  .catch(err => console.log(err));





}

export {post}


