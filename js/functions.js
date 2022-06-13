function circulo(){
    var figuras=document.getElementById("figuras");
    figuras.classList="";
    // toogle para colocar y quitar algo
    // remuf para quitar 
    figuras.classList.toggle("circulo");
}

function rombo(){
    var figuras=document.getElementById("figuras");
    figuras.classList.toggle("rombo");
}

function rectanguloh(){
    var figuras=document.getElementById("figuras");
    figuras.classList.toggle("rectanguloh");
}
function rectangulov(){
    var figuras=document.getElementById("figuras");
    figuras.classList.toggle("rectangulov");

}
function arriba(){
    var figuras=document.getElementById("figuras");
    figuras.classList.toggle("arriba");

}
function abajo(){
    var figuras=document.getElementById("figuras");
    figuras.classList.toggle("abajo");

}
function izquierda(){
    var figuras=document.getElementById("figuras");
    figuras.classList.toggle("izquierda");

}
function derecha(){
    var figuras=document.getElementById("figuras");
    figuras.classList.toggle("derecha");

}
function diagonal(){
    var figuras=document.getElementById("figuras");
    figuras.classList.toggle("diagonal");

}
function triangulo(){
    var figuras=document.getElementById("figuras");
    figuras.classList.toggle("triangulo");

}
function imagen(){
    var figuras=document.getElementById("figuras");
    figuras.classList.toggle("imagen");

}

//capturamos los datos del formulario

function capturarDatos(){
    var nombres = document.getElementById("nombres").value;
    var edad = document.getElementById("edad").value;
    var fecha = document.getElementById("fecha").value;
    var genero = document.getElementById("genero").value;
    var email = document.getElementById("email").value;
    var descripcion = document.getElementById("descripcion").value;
    var color = document.getElementById("color").value;

// capturaremos los elementos a los cuales asignaremos a los valores

    var mFoto = document.getElementById("mFoto");
    var mNombres = document.getElementById("mNombres");
    var mEdad =document.getElementById("mEdad");
    var mFecha = document.getElementById("mFecha");
    var mGenero = document.getElementById("mGenero");
    var mEmail = document.getElementById("mEmail");
    var mDescripcion = document.getElementById("mDescripcion");
    
    var contAvatar = document.getElementById("contAvatar");

    mNombres.textContent = nombres;
    mEdad.textContent = edad;
    mFecha.textContent = fecha;
    mGenero.textContent = genero;
    mEmail.textContent = email;
    mDescripcion.textContent = descripcion;

    if(genero == "masculino" ){
        mFoto.src = "img/hombre.png";
    }else if(genero == "femenino"){
        mFoto.src = "img/asistente.png";
    }else{
        mFoto.src = "img/user.png"; 
    }

    switch (color) {
        
    }
    
    switch (color){
        case"Azul":
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.add("Azul");
            break;
                case"Morado":
                var contenedor= document.getElementById("contAvatar");
                contenedor.classList.add("Morado");
                break;
                    case"Rojo":
                    var contenedor= document.getElementById("contAvatar");
                    contenedor.classList.add("Rojo");
                    break;
                        case"Amarillo":
                        var contenedor = document.getElementById("contAvatar");
                        contenedor.classList.add("Amarillo");
                        break;
                          case"Naranja":
                            var contenedor = document.getElementById("contAvatar");
                            contenedor.classList.add("Naranja");
                            break;
                                case"Verde":
                                var contenedor = document.getElementById("contAvatar");
                                contenedor.classList.add("Verde");
                                break;


    }

}







