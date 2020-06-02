searchByEmail: function(email){
    let archivoJson = readJSONfile();
    let user = null;
    archivoJson.forEach((elem, i) => {
      if (elem["email"] == email) {
         user = elem;
      }
    });
    return user; // si no lo encuentra devuelve null
 },
 Lee el archivo Json
 function readJSONfile() {
      return JSON.parse(fs.readFileSync(userController.archivo, 'utf-8'));
 }
 

 //los saqué de usersController
 get_registerMostrar: function(req,res){
    res.render('users')

   },

   post_registerCrear: function(req,res){
     
    res.render('users')

   },


   profileId: function(req,res){

   },


   // lo saqué de routes

   router.get('/users/register',usersController.get_registerMostrar);


router.post('/users/register',usersController.post_registerCrear);

router.get('/users/profile/:id',usersController.profileId);