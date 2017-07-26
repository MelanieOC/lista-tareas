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
        html += '<input type="text" class="done" value="' + elemento.id + '. ' + elemento.title + '" readonly>';
      } else {
        html += '<input type="text" class="to-do" ondblclick="tachar(this)"  onchange= "change(this)" id="'+elemento.id+'" value="' + elemento.id + '. ' + elemento.title + '"><br>';
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

function tachar(event){
  list.lista[event.id - 1].completed = true;
  list.mostrar();
}

function change(event){
  list.lista[event.id - 1].title = event.value.slice(3);
  list.mostrar();
}