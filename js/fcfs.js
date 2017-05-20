/**
 * Created by Alex on 11/03/2017.
 */
var getUrl = window.location;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1]+ "/"; // lineas servidor local
var letra	=	'a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z';
var LETRAS	=	letra.split(',');
$(document).ready(function() {
    //inicializo el modal antes de imvocarlo
    $('.modal').modal();
    //solicito procesos a atender
    cantidad();

});


function goBack(){
    window.history.back();
}

function cantidad() {
    delete idpreg;
    alertify.prompt( 'FCFS:', 'ingrese la cantidad de procesos a ejecutar',''
        , function(evt, value) { validar(value) }
        , function() { alertify.error('Error') });

}

function validar(valor) {
    var esnumero=isNaN(valor);
    if (esnumero==true || valor==0){
        alertify.error('Error');
        location.reload();

    }else{
        fcfs(valor);
    }
}

function fcfs(valor) {
    var DIVtabla= $('#DIVtablafcfs');
    var DIVgrafico= $('#DIVgraficafcfs');
    var llegada=[];
    var array=[];
    var retorno=[];
    var espera=[];
    var ant=0;


    var sum=0;
    for (var i = 0; i < valor; i++){

         llegada.push(i);
         sum=i+2+llegada[i];
         array.push(sum);
     }
    var ejecucion = array.sort(function() {return Math.random() - 0.5});
    var llegada2 = llegada.sort(function() {return Math.random() - 0.5});


    for (var j = 0; j < valor ; j++){
        ant+=ejecucion[j];

        if (j>0){
            retorno.push((ant)-llegada2[j]);
        }else {
            retorno.push((ejecucion[j])-llegada2[j]);
        }

    }
/*
* PINTO LA TABLA CON LOS DATOS
*/

   var tabla='<table class="highlight">' +
   '<thead>'+
    '<tr>'+
       '<th data-field="id">PID</th>'+
       '<th data-field="name">LLEGADA</th>'+
       '<th data-field="price">EJECUCION</th>'+
       '<th data-field="price">ESPERA</th>'+
       '<th data-field="price">RETORNO</th>'+
    '</tr>'+
    '</thead>'+
    '<tbody>'
    for (var j = 0; j < valor ; j++){
        espera=retorno[j]-ejecucion[j];
        tabla+='<tr>'
        tabla+='<td>'+LETRAS[j].toUpperCase()+'</td>'
        tabla+='<td>'+llegada2[j]+'</td>'
        tabla+='<td>'+ejecucion[j]+'</td>'
        tabla+='<td>'+espera+'</td>'
        tabla+='<td>'+retorno[j]+'</td>'
        tabla+='</tr>'
    }
    tabla+='</tbody>'+
    '</table>';

    DIVtabla.append(tabla);

    /*
     * PINTO LA TABLA CON LOS GRAFICOS
     */
    var ant2=0;
    var tabla2='<h5 class="flow-text">GRAFICO</h5><table class="highlight">' +
        '<thead>'+
        '<tr>'+
        '</tr>'+
        '</thead>'+
        '<tbody>'
    for (var j = 0; j <=valor ; j++){
        tabla2+='<tr>';
        if (j == 0){
            for (var k = 0; k < ejecucion[j] ; k++){
                tabla2+='<td><div class="col s1 card-panel teal lighten-2">&nbsp;</div></td>'
            }
        }else{
            for (var k = 0; k < ant2 ; k++){
                tabla2+='<td><div class="">&nbsp;</div></td>'
            }

            for (var l = 0; l < ejecucion[j] ; l++){
                tabla2+='<td ><div class="col s1 card-panel blue lighten-'+l+'">&nbsp;</div></td>'
            }
        }
        ant2+=ejecucion[j];
        tabla2+='</tr>'
    }
    tabla2+='</tbody>'+
        '</table>';
   DIVgrafico.append(tabla2);

}

function seleccion(){
    delete seleccionado;
    seleccionado=$("#idrespuesta0").val();
    $("#rta1").removeClass( "card" ).addClass( "card blue lighten-2" );
    $("#rta2").removeClass( "card blue lighten-2" ).addClass( "card" );
    $("#rta3").removeClass( "card blue lighten-2" ).addClass( "card" );
    $("#rta4").removeClass( "card blue lighten-2" ).addClass( "card" );
}
function seleccion2(){
    delete seleccionado;
    seleccionado=$("#idrespuesta1").val();
    $("#rta2").removeClass( "card" ).addClass( "card blue lighten-2" );
    $("#rta1").removeClass( "card blue lighten-2" ).addClass( "card" );
    $("#rta3").removeClass( "card blue lighten-2" ).addClass( "card" );
    $("#rta4").removeClass( "card blue lighten-2" ).addClass( "card" );
}
function seleccion3(){
    delete seleccionado;
    seleccionado=$("#idrespuesta2").val();
    $("#rta3").removeClass( "card" ).addClass( "card blue lighten-2" );
    $("#rta2").removeClass( "card blue lighten-2" ).addClass( "card" );
    $("#rta1").removeClass( "card blue lighten-2" ).addClass( "card" );
    $("#rta4").removeClass( "card blue lighten-2" ).addClass( "card" );
}
function seleccion4(){
    delete seleccionado;
    seleccionado=$("#idrespuesta3").val();
    $("#rta4").removeClass( "card" ).addClass( "card blue lighten-2" );
    $("#rta2").removeClass( "card blue lighten-2" ).addClass( "card" );
    $("#rta3").removeClass( "card blue lighten-2" ).addClass( "card" );
    $("#rta1").removeClass( "card blue lighten-2" ).addClass( "card" );
}
function enviar(){
    //console.log(seleccionado);
    //console.log(idpreg);

    jQuery.ajax({
        type: "POST",
        url: "Science/post_respuesta",
        data: {selec: seleccionado,id:idpreg},
        dataType: 'json',
        beforeSend:function () {
            var $toastContent = $('<span>Send!!</span>');
            Materialize.toast($toastContent, 2000,'rounded');
        },
        success: function(data) {
            $.each(data,function(k,v){

                if (v==1){
                    $('#modal1').modal('open');
                }else {
                    $('#modal2').modal('open');
                }
            });

        }
    });
}