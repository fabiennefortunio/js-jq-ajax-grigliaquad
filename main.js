$(document).ready(function() {
    for(var i = 0; i < 36; i++){
        $("gridquad").append("<div><\/div>");
        // creo una variable string vacia
        // uso la funcion 'append' para insertar el boton en texto

    }
        // cuando cuanlquier 'div' sea clicado se ejecuta toda la funcion de AJAX
$("div").click(function(e){
    // 'e' hace referencia al evento y tiene información del cuadrado pulsado
        $.ajax({
            type: 'GET',
            url: 'https://flynn.boolean.careers/exercises/api/random/int',
            success: function(resp) {
                console.log(resp.response);
                // hago referencia con la 'e' al evento, luego al cuadrado y luego al estilo, el color del fondo va a ser igual a green o yellow según la condición del ternario
                // ternario: condición 'resp' que es el parametro de la función, que es el objeto JSON que decuelva la API y de ese objeto cojo .response que es el valor del numero aleatorio de la API, si es mayor a 5 al pulsar el cuadrado será verde y si menor o igual a 5 será amarillo.
                e.currentTarget.style.backgroundColor = (resp.response > 5) ? "green" : "yellow";
            },
            error: function() {
                console.log("ha dado error");
            }
        });
})

});
