

var aux=0;
var fotos= new Array();
    fotos [0] = "Images/1.jpg" ;
    fotos [1] ="Images/2.jpg" ;
    fotos [2] = "Images/3.jpg";
    fotos [3] = "Images/5.jpg" ;
    fotos [4] = "Images/5.jpg";
    fotos [5] = "Images/6.jpg" ;
    fotos [6] = "Images/7.jpg";
    fotos [7] = "Images/8.jpg";
    fotos [8] = "Images/9.jpg";
    fotos [9] = "Images/10.jpg";

function siguiente(){
   var theimage= document.getElementById("myphotos");
   var ultima=fotos.length-1;
   var aux_2=aux;
   if (aux_2==ultima){
       aux_2=0;
   }
   else{
       aux_2=aux_2+1;
   }
   aux=aux_2;
   theimage.src=fotos[aux];
}
function anterior(){
    var theimage= document.getElementById("myphotos");
    var ultima=fotos.length-1;
    var aux_2=aux;
    if (aux_2==0){
        aux_2=ultima;
    }
    else{
        aux_2=aux_2-1;
    }
    aux=aux_2;
    theimage.src=fotos[aux];
 }




 