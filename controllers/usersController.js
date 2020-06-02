const fs=require('fs');
const path=require('path')
const bcrypt = require('bcrypt');
const { check, validationResult, body} = require ('express-validator');

let usersController = {
 
  archivo: path.join(__dirname,'../data/users.json'),//'..') + '/data/users.json',

crear: function(req, res){
    usuario={
      nombre:req.body.nombre,
      email:req.body.email,
      contraseña:bcrypt.hashSync (req.body.contraseña, 10),
      avatar: req.files[0].filename  
  }
  
  let errors = validationResult(req);

  if (errors.isEmpty()){
 
  let archivoUsuarios = fs.readFileSync(usersController.archivo, {encoding:'utf-8'});
  let usuarios;
  if (archivoUsuarios==''){
      usuarios=[]
   }else{
      usuarios=JSON.parse(archivoUsuarios)
   }
  usuarios.push(usuario);
  let usuariosJson=JSON.stringify(usuarios);
  fs.writeFileSync(usersController.archivo,usuariosJson);

  res.render('profile', {usuario});
}

else {return res.render('index',{errors:errors.errors})}

},

login:function(req,res,next){

  let archivoUsuarios = fs.readFileSync(usersController.archivo, {encoding:'utf-8'});
  let usuarios;

  if( archivoUsuarios == ' '){
    usuarios=[];
  }else{
    usuarios = JSON.parse(archivoUsuarios);
  }
  for (let i=0; i< usuarios.length; i++){
    let usuario=usuarios[i]
    if (req.body.email== usuario.email && bcrypt.compareSync(req.body.contraseña, usuario.contraseña)){
   
    res.send('te encontre')

 }
 }
 res.send('Error, email o contraseña inválida')
}
}
module.exports=usersController;







