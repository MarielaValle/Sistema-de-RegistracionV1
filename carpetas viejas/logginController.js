
const fs = require('fs');
const path=require('path');

function readHTML(fileName){
let archivoHTML = fs.readFileSync(path.join(__dirname,'/../views/' + fileName + '.html'),'utf-8');
    return archivoHTML;
}
//../views/${fileName}.html`*)*/

let logginController = {

 raiz :function(req,res,next){
     let archivoHTML = readHTML('loggin');
     res.send(archivoHTML);
 },

}

module.exports = logginController;