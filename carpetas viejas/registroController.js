const fs = require('fs');
const path=require('path');


 function readHTML(fileName){
  let archivoHTML = fs.readFileSync(path.join(__dirname,'/../views/' + fileName + '.html'),'utf-8');
    return archivoHTML;
}
//../views/${fileName}.html`*)*/

let registroController = {

 raiz :function(req,res,next){
     let archivoHTML = readHTML('registro');
     res.send(archivoHTML);
 },

}

module.exports = registroController;