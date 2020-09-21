const dbManager = require ('../database/db.manager');

/**
 * Crear Post
 * @param {*} postObject JSON Object with Post information
 */
async function crearPost (req, res) {

    // Validar parametros
    if (!req.body) {
        res.status(400).send({
          message: "El cuerpo de la solicitud esta vacio!!!!"
        });
        return;
    }

    // Crear objeto
    const newPostObject = {
        message: req.body.message,
        published_date: req.body.published_date,
        idUser:req.body.idUser
    }
    //Ejecucion metodo
    dbManager.Post.create(newPostObject).then (
        data => {
            res.send (data);
        }
    ).catch (
        e => {
            console.log(e);
            res.status(500).send({
                message: "Ocurrió un error"
            });
        }
    );
}

/**
 * Retonar todos los Post
 */
async function retonarPosts (req, res){
    try {
        //Ejecucion metodo
        const posts = await dbManager.Post.findAll();

        res.json({
          data: posts
        });

    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: "Ocurrió un error"
        });
    }
}
/**
 * Retonar Post por Id
 */
async function retonarPost (req, res){
    try {
        const { idPost } = req.params;

        //Ejecucion metodo
        const post = await dbManager.Post.findOne({
            where: {
                idPost: idPost
            }
        });
        res.json(post);

    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: "Ocurrió un error"
        });
    }
}
/**
 * Actualizar Post por Id
 */
async function actualizarPost (req, res){
  // Validar parametros
  if (!req.body) {
      res.status(400).send({
        message: "El cuerpo de la solicitud esta vacio!!!!"
      });
      return;
  }
  try {
      const { idPost } = req.params;

      //Ejecucion metodo
      const resultado = await dbManager.Post.update({
         message: req.body.message,
         published_date: req.body.published_date,
         idUser: req.body.idUser
       },{
         where: {idPost: idPost}
       })
      if(resultado==1)
        {res.status(200).json({
          message: "Post Actulizado"
          });
        };
        if(resultado!=1)
        {res.json({
        message: "El Post no existe en el sistema"
        });
      };
  } catch (e) {
      console.log(e);
      res.status(500).send({
          message: "Ocurrió un error"
      });
  }
}

/**
 * Eliminar Post por Id
 */
async function eliminarPost (req, res){
  try {
      const { idPost } = req.params;

      //Ejecucion metodo
      const resultado = await dbManager.Post.destroy({
         where: {idPost: idPost}
       })

      if(resultado==1)
        {res.status(200).json({
          message: "Post Eliminado"
          });
        };
      if(resultado!=1)
        {res.json({
          message: "El Post no existe en el sistema"
          });
        };
  } catch (e) {
      console.log(e);
      res.status(500).send({
          message: "Ocurrió un error"
      });
  }
}

/**
 * Eliminar todos los Post
 */
async function eliminarPosts (req, res){
  try {
      //Ejecucion metodo
      const resultado = await dbManager.Post.destroy({
         where: {}
       })

       if(resultado>=1)
         {res.status(200).json({
           message: "Posts Eliminados"
           });
         };
       if(resultado==0)
         {res.json({
           message: "No exiten Post en el sistema"
           });
         };
  } catch (e) {
      console.log(e);

      res.status(500).send({
          message: "Ocurrió un error"
      });
  }
}
/**
 * Reronar todos los Post por fecha
 * Ejemeplo parametro: AAAA-MM-DDT00:00:00.000Z
 */
async function retonarPostFecha (req, res){
  try {

      const { publishedDate } = req.params;
      //Ejecucion metodo
      const posts = await dbManager.Post.findAll ({
         where: {published_date: publishedDate}
       });

      res.json({
              data: posts
      });

  } catch (e) {

      console.log(e);
      // Send error message as a response
      res.status(500).send({
          message: "Ocurrió un error"
      });
  }
}

exports.crearPost = crearPost;
exports.retonarPosts = retonarPosts;
exports.retonarPost = retonarPost;
exports.actualizarPost  =  actualizarPost;
exports.eliminarPost  =  eliminarPost;
exports.eliminarPosts  = eliminarPosts;
exports.retonarPostFecha = retonarPostFecha;
