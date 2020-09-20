const dbManager = require ('../database/db.manager');

/**
 * Creation of an user
 * @param {*} userObject JSON Object with User information
 */
async function createUser (req, res) {

    // CHECK IF THE REQUEST BODY IS EMPTY
    if (!req.body) {
        res.status(400).send({
          message: "Request body is empty!!!!"
        });
        return;
    }

    // CREATING THE OBJECT TO PERSIST
    const newUserObject = {
        username: req.body.username,
        creation_date: req.body.creation_date
    }

    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE
    dbManager.User.create(newUserObject).then (
        data => {
            res.send (data);
        }
    ).catch (
        e => {
            // Print error on console
            console.log(e);
            // Send error message as a response
            res.status(500).send({
                message: "Some error occurred"
            });
        }
    );
}
/**
 * GEt all users
 */
async function findAllUsers (req, res){
    try {
        //Execute query
        const users = await dbManager.User.findAll ();

        //Send response
        res.json({
                data: users
        });

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

/**
 * Get user by id
 */
async function findOneUser (req, res){
    try {
        const { idUser } = req.params;

        //Execute query
        const user = await dbManager.User.findOne({
            where: {
                idUser: idUser
            }
        });
        //Send response
        res.json(user);

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}
/**
 * Update user by id
 */
async function updateUser (req, res){
  try {
      const { idUser } = req.params;

      //Execute query
      const resultado = await dbManager.User.update({
         username: req.body.username,
         creation_date: req.body.creation_date
       },{
         where: {idUser: idUser}
       })
      //Send response
      if(resultado==1)
      {res.status(200).json({
          message: "User Update"
      });
    };
    //Send response
    if(resultado!=1)
    {res.json({
        message: "User was not found"
    });
  };


  } catch (e) {
      // Print error on console
      console.log(e);
      // Send error message as a response
      res.status(500).send({
          message: "Some error occurred"
      });
  }
}

/**
 * Delete an existen user by username
 */
async function deleteUserByUsername (req, res){
  try {
      const { username } = req.params;

      //Execute query
      const resultado = await dbManager.User.destroy({
         where: {username: username}
       })
      //Send response
      if(resultado==1)
      {res.status(200).json({
          message: "User Delete"
      });
    };
    //Send response
    if(resultado!=1)
    {res.json({
        message: "User was not found"
    });
  };


  } catch (e) {
      // Print error on console
      console.log(e);
      // Send error message as a response
      res.status(500).send({
          message: "Some error occurred"
      });
  }
}

/**
 * Delete all users
 */
async function deleteAllUsers (req, res){
  try {
      const { username } = req.params;

      //Execute query
      const resultado = await dbManager.User.destroy({
         where: {}
       })
      //Send response
      if(resultado==1)
      {res.status(200).json({
          message: "Users Delete"
      });
    };
  } catch (e) {
      // Print error on console
      console.log(e);
      // Send error message as a response
      res.status(500).send({
          message: "Some error occurred"
      });
  }
}

/**
 * GEt all users Created Date
 * EXAMPLE AAAA-MM-DDT00:00:00.000Z
 */
async function findAllUsersByCreatedDate (req, res){
  try {

      const { creation_date } = req.params;
      //Execute query
      const users = await dbManager.User.findAll ({
         where: {creation_date: creation_date}
       });

      //Send response
      res.json({
              data: users
      });

  } catch (e) {
      // Print error on console
      console.log(e);
      // Send error message as a response
      res.status(500).send({
          message: "Some error occurred"
      });
  }
}
exports.createUser = createUser;
exports.findAllUsers = findAllUsers;
exports.findOneUser = findOneUser;
exports.updateUser = updateUser;
exports.deleteUserByUsername = deleteUserByUsername;
exports.deleteAllUsers = deleteAllUsers;
exports.findAllUsersByCreatedDate = findAllUsersByCreatedDate;
