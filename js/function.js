
/*
    var Fotos; // Lugar donde se almacenara la ruta de la imagen.
    var V_max; // Longitud máxima del vector "Fotos".
    var aux_2; // Auxiliar para programación.


    Fotos = new Array(); // Crea el vector para las fotos.
    aux_2 = 0; // Inicia la variable auxiliar de programación con valor 0.


    Fotos [0] = "../Images/1.jpg" /* Aqui pones la ruta del enlace a la imagen */ /*PD: eta primera imagen se debe repetir en el HTML*/
/*  Fotos [1] ="../Images/2.jpg" 
    Fotos [2] = "../Images/3.jpg"
    Fotos [3] = "../Images/4.jpg" 
    Fotos [4] = "../Images/5.jpg"
    Fotos [5] = "../Images/6.jpg" 
    Fotos [6] = "../Images/6.jpg"
    
    V_max = Fotos.length; 
    V_max = V_max-1; 

    function siguiente () {
        if (aux_2 == V_max){
            aux_2 = 0;
        }
        else{
            aux_2 = aux_2+1;
        }
        document.images.Diapositiva.src = Fotos[aux_2];
    }

   function anterior () {
        if (aux_2 == 0){
            aux_2 = V_max;
        }
        else{
            aux_2 = aux_2-1;
        }
        document.images.Diapositiva.src = Fotos[aux_2];
    }
*/

var aux=0;
var fotos= new Array();
    fotos [0] = "../Images/1.jpg" ;
    fotos [1] ="../Images/2.jpg" ;
    fotos [2] = "../Images/3.jpg";
    fotos [3] = "../Images/4.jpg" ;
    fotos [4] = "../Images/5.jpg";
    fotos [5] = "../Images/6.jpg" ;
    fotos [6] = "../Images/7.jpg";
    fotos [7] = "../Images/8.jpg";
    fotos [8] = "../Images/9.jpg";
    fotos [9] = "../Images/10.jpg";

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




 