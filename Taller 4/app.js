

const express = require ('express');
const appPort = 3000;
const appServer = express();
appServer.use(express.json());


appServer.listen (appPort, ()=>{
 console.log('Servidor escuchando en puerto ' + appPort);
});

/************ Variables de almacenamiento de notas ************/

const user = require ('./user');
var users = new Array(user);

/************ Mensajes estándar de la API ************/
const mensajeErroneo = {mensaje:"Petición no válida"};
const mensajeCorrecto = {mensaje:"Petición procesada correctamente"};
const mensajeNoEncontrado = {mensaje:"Elemento no encontrado"};

/************ Métodos de la API ************/

/*Mostrar todos los usuarios*/
appServer.get ('/user', (req, res)=>{
 var respuesta = users;
 res.send(respuesta)
});

/*Crear un nuevo usuario*/
appServer.post ('/adduser' , (req, res)=>{
  var userR = {
           id:       req.body.id,
           nombre:   req.body.nombre,
           apellido: req.body.apellido,
           edad:     req.body.edad,
           carrera:  req.body.carrera,
       };
       users.push(userR);
       res.send (mensajeCorrecto);
});
 /*Eliminar un usuario por id enviado como parámetro*/
appServer.put ('/deleteuserid/:idUser' , (req, res)=>{
  var index = 0;
  users.forEach(function(user) {
    index = index+1
    if (user.id === req.params.idUser) {
        users.splice( index-1, 1 );
        res.send (mensajeCorrecto);
    }
    })
    res.send (mensajeNoEncontrado);
  });


/*Traer un usuario por id enviado como parámetro*/
appServer.put ('/getuserid/:idUser' , (req, res)=>{
 users.forEach(function(user) {
   if (user.id === req.params.idUser) {
       res.send (user);
   }
   })
   res.send (mensajeNoEncontrado);
 });
 /*Traer un usuario por nombre enviado como parámetro*/
 appServer.put ('/getusername/:nameUser' , (req, res)=>{
  users.forEach(function(user) {
    if (user.nombre === req.params.nameUser) {
        res.send (user);
    }
    })
    res.send (mensajeNoEncontrado);
  });

  /*Traer todos los usuarios menores a una edad enviada como parámetro*/
  appServer.put ('/getuserage/:ageUser' , (req, res)=>{
    var listUsers = new Array();
    var  encuentraUsuario = false;
   users.forEach(function(user) {
     if (user.edad < req.params.ageUser) {
         listUsers.push(user);
         encuentraUsuario = true;
     }
     })
     if (encuentraUsuario = true){
        res.send (listUsers);
     }else{
     res.send (mensajeNoEncontrado);
   }
   });
