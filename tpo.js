// boton barra navegacion 
addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click',() => {
            const nav_items = document.querySelector('.nav_items');
            nav_items.classList.toggle('show')
            
        })
    }
})

// carrousell de fotos home
var imagenes = ['images/eventos/2_copia.jpg','images/eventos/6_copia.jpg','images/eventos/4_copia.jpg','images/eventos/3_copia.jpg'],
    cont = 0;

function carrousel (contenedor){
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.izq'),
           adelante= contenedor.querySelector('.der'),
           img = contenedor.querySelector('img')
           tgt= e.target;

           if(tgt == atras){
               if(cont > 0){
                   img.src = imagenes[cont - 1];
                   cont--;
               } else {
                   img.src = imagenes[imagenes.length - 1];
                   cont = imagenes.length - 1;
               }
           } else if (tgt == adelante){
            if(cont < imagenes.length - 1){
                img.src = imagenes[cont + 1];
                cont++;
            } else {
                img.src = imagenes[0];
                cont = 0;
            }
           }


    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.cont_carrousel');
    carrousel(contenedor);

});



// validacion formulario de contacto

function valida_envia() {
    //valido el nombre
    if (document.contacto_valida.nombre.value.length == 0) {
        alert("Tiene que escribir su nombre.")
        document.contacto_valida.nombre.focus()//foco en el campo del error
        return 0;
    }

    //valido el numero de telefono
    if (document.contacto_valida.telefono.value.length == 0) {
        alert("Tiene que escribir su numero de telefono.")
        document.contacto_valida.telefono.focus()//foco en el campo del error
        return 0;
    }

    //valido el horario de contacto
    if (document.contacto_valida.horario.selectedIndex == 0) {
        alert("Debe seleccionar un horario para contacto.")
        document.contacto_valida.horario.focus()
        return 0;
    }

    //valido el email
    if (document.contacto_valida.email.value.length == 0) {
        alert("Tiene que escribir su email.")
        document.contacto_valida.email.focus()//foco en el campo del error
        return 0;
    }

    //valido la fecha del evento
    if (document.contacto_valida.fecha.value.length == 0) {
        alert("Tiene que seleccionar la fecha del evento.")
        document.contacto_valida.fecha.focus()//foco en el campo del error
        return 0;
    }

    //el formulario se envia
    alert("Muchas gracias por contactarnos. Responderemos a la brevedad.");
    document.contacto_valida.submit();
}


// modifico el valor del atributo min en el input date 
// para que la fecha del evento sea posterior a la fecha actual

var fecha = new Date();
var anio = fecha.getFullYear();
var dia = fecha.getDate();
var _mes = fecha.getMonth();      //viene con valores de 0 al 11
_mes = _mes + 1;               //ahora de 1 al 12
if (_mes < 10)                //ahora le agregas un 0 para el formato date
{ var mes = "0" + _mes;}
else
{ var mes = _mes.toString;}
document.getElementById("fechaEvento").min = anio+'-'+mes+'-'+dia; 