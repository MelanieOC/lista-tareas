var primera_lista = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }
]
function tarea(title,id ) {
  this.userId = 1;
  this.title = title;
  this.id= id;
  this.completed=false;
}

function lista() {
  this.lista= [];
  for(i in primera_lista){
    this.lista.push(primera_lista[i]);
  }
  this.texto = document.getElementById('texto');
  this.mostrar = function(element) {
    var html='';
    for(var i in this.lista){
      var elemento = this.lista[i];
      if(elemento.completed){
        html += '<div class="done">' + elemento.id + '. ' + elemento.title + '</div>';
      } else {
        html += '<div class="to-do">' + elemento.id + '. ' + elemento.title + '</div>';
      }
    }
    element.innerHTML = html;
  }
  this.añadir=function () {
    this.lista.push(new tarea(this.texto.value, this.lista.length +1));
    this.texto.value = '';
  }
  this.tarea;
  this.done=function(event) {
    this.tarea = event.target;
    if(this.tarea.checked){
      this.tarea.completed=true;
    }
  }
}

var tareas = document.getElementById('tareas');
var list = new lista();

list.mostrar(tareas);

var agregar = document.getElementById('Add');
agregar.onclick = function() {
  list.añadir();
  list.mostrar(tareas);
}

var celdas = document.getElementsByClassName('to-do');

//Para cada celda se le da el evento click
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',done);
}
var tarea;
function done() {
  tarea= event.target;
  console.log(tarea);
}
