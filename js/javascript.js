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
function tarea(title,id ) { //objeto constructor para cada nueva tarea
  this.userId = 1;
  this.title = title;
  this.id= id;
  this.completed=false;
}

function lista() { //clase lista 
  this.lista= [];
  for(i in primera_lista){//se agrega los objetos del primer array
    this.lista.push(primera_lista[i]);
  }
  //input, caja de texto de las nuevas tareas
  this.texto = document.getElementById('texto');
  //output, donde se mostrara las tareas
  this.tareas= document.getElementById('tareas');

  this.mostrar = function() {
    var html='';
    for(var i in this.lista){//se recorre cada elemento del array
      var elemento = this.lista[i];
      if(elemento.completed){//se verifica si la tarea esta completada
        //cuando esta completada el checkbox esta en check y con funcion a rehacer, el input esta en readonly y con boton eliminar
        html += '<div class="done"><input type="checkbox" onclick="rehacer(this)" name="'+i+'"checked>';
        html += '<input type="text" class="do" onchange= "change(this)" id="'+i+'" value="' + elemento.title + '"readonly>'
        html += '<button class="eliminar2" onclick="eliminar(this)" name="'+i+'">x</button></div>';
      } else {
        //cuando esta incompleto el input se puede editar, el checkbox tiene la funcion tachar y tiene un boton eliminar
        html += '<div class="to-do"><input type="checkbox" onclick="tachar(this)" name="'+i+'">'
        html += '<input type="text" class="toDo" onchange= "change(this)" id="'+i+'" value="' + elemento.title + '">'
        html += '<button class="eliminar" onclick="eliminar(this)" name="'+i+'">x</button></div>';
      }
    }
    
    this.tareas.innerHTML = html;
  }
  this.añadir=function () {//funcion para añadir nuevas tareas
    if(this.texto.value==''){
      alert('no ingreso nueva tarea');//cuando no se ingresa nada aparece un alert
    } else {
      this.lista.push(new tarea(this.texto.value, this.lista.length +1));
    }
    this.texto.value = '';
  }

}

var list = new lista();//se crea una instancia

list.mostrar();//se llama la funcion mostrar

var agregar = document.getElementById('Add');
agregar.onclick = function() { //se da evento click al boton
  list.añadir();
  list.mostrar();
}
function eliminar(event){ //funcion que elimina de la lista el elemento seleccionado
  list.lista.splice(event.name,1);
  list.mostrar();
}
function tachar(event){//funcion que cambia tarea incompleta a completada
  list.lista[event.name].completed = true;
  list.mostrar();
}

function change(event){//funcion que guarda los cambios en el input, cambiando la propiedad title
  list.lista[event.id].title = event.value;
  list.mostrar();
}

function rehacer(event){ //funcion que cambia una tarea completada a incompleta
  list.lista[event.name].completed = false;
  list.mostrar();
}
