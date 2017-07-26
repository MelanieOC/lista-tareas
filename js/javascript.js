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
  //input
  this.texto = document.getElementById('texto');
  //output
  this.tareas= document.getElementById('tareas');

  this.mostrar = function() {
    var html='';
    for(var i in this.lista){
      var elemento = this.lista[i];
      if(elemento.completed){
        html += '<div class="done"><input type="checkbox" onclick="rehacer(this)" name="'+i+'"checked>'+ elemento.title + '</div>';
      } else {
        html += '<div class="to-do"><input type="checkbox" onclick="tachar(this)" name="'+i+'">'
        html += '<input type="text" class="toDo" onchange= "change(this)" id="'+i+'" value="' + elemento.title + '">'
        html += '<button class="eliminar" onclick="eliminar(this)" name="'+i+'">x</button></div>';
      }
    }
    
    this.tareas.innerHTML = html;
  }
  this.añadir=function () {
    if(this.texto.value==''){
      alert('no ingreso nueva tarea');
    } else {
      this.lista.push(new tarea(this.texto.value, this.lista.length +1));
    }
    this.texto.value = '';
  }

}

var list = new lista();

list.mostrar();

var agregar = document.getElementById('Add');
agregar.onclick = function() {
  list.añadir();
  list.mostrar();
}
function eliminar(event){
  list.lista.splice(event.name,1);
  list.mostrar();
}
function tachar(event){
  list.lista[event.name].completed = true;
  list.mostrar();
}

function change(event){
  list.lista[event.id].title = event.value;
  list.mostrar();
}

function rehacer(event){
  list.lista[event.name].completed = false;
  list.mostrar();
}
