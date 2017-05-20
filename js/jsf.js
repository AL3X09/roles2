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
    alertify.alert('SJF', 'Procesando por favor espere!').set('basic', true); ;
    setTimeout(function () {
        alertify.alert().close();
        fcfs(4);
    }, 1e3);

    /*alertify.prompt( 'SJF:', 'ingrese la cantidad de procesos a ejecutar',''
        , function(evt, value) { validar(value) }
        , function() {});
    */
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
    var llegada=[0,2,4,5];
    var array=[7,4,1,5];
    var retorno=[];
    var retornoFalse=[7,10,4,12];
    var espera=[];
    var esperaFalse=[0,6,3,7];
    var ant=0;

    var TOTALEJEC=0;
    var sum=0;
    for (var i = 0; i < valor; i++){
         //encuentro el total de la ejecucion
        TOTALEJEC+=array[i];
        sum=i+2+llegada[i];
     }

    var llegada2 = llegada.slice();//function() {return Math.random() - 0.5});
    var ejecucion = array.slice();//.sort();//function() {return Math.random() - 0.5});
    var ejecucion2=array.slice();//copio el array
     ejecucion2=ejecucion2.sort();//ordeno el  array
    var sig=0;
    var tiempofinaliza=0
    var ubica=[];
    var vector=[];



    //creo un vector con para conocert la psociiones
    for (var j = 0; j < valor ; j++) {
        if (j > 0) {
            vector.push(ant+ ejecucion2[sig]);//encontre posiscion ubicacion
            ant=ant+ ejecucion2[sig];
            sig += 1;
            //ejecucion2.splice(j,1);
            //ejecucion2.unshift(ejecucion[j])
        } else {
            ant=ejecucion[j];
            ejecucion2.unshift(ant)
            vector.push(ant);
            retorno.push(ant);
        }
    }
//    console.log(ejecucion2);
    //atiendo
    var inverllegada=llegada.slice();
    inverllegada.reverse();
    //var valmayorvector=vector.reverse();
    for (var j = 0; j < vector.length ; j++) {
        console.log(vector[j+1] + "-" + llegada2[j+1]);
        retorno.push(vector[j+1] - llegada2[j+1] );
    }



    //var ultimo = ejecucion.pop ();
    //armo espera
    for (var j = 0; j < valor ; j++) {

        if (j > 0) {
                //console.log(j + "-" + ejecucion[j]);
                //console.log(vector[j] + "-" + llegada[j] + "**" + ejecucion2[sig] + "llegada" + llegada[j]);
                //ubica .push( ((TOTALEJEC - ejecucion[j]) - ejecucion2[sig]) - llegada2[j])//encontre posiscion ubicacion
                espera.push(vector[j] - llegada[j]);

            sig += 1;

        } else {
            espera.push(j);
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

        //espera=retorno[j]-ejecucion[j];
        tabla+='<tr>'
        tabla+='<td>'+LETRAS[j].toUpperCase()+'</td>'
        tabla+='<td>'+llegada2[j]+'</td>'
        tabla+='<td>'+ejecucion[j]+'</td>'
        tabla+='<td>'+esperaFalse[j]+'</td>'
        tabla+='<td>'+retornoFalse[j]+'</td>'
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
        '<tbody>'+
        '<tr>'
    for (var j = 0; j <ejecucion2.length-1 ; j++){
        //tabla2+='<tr>';
        if (j == 0){
            for (var k = 0; k < ejecucion2[j] ; k++) {
                tabla2 += '<td><div class="col s1 card-panel red lighten-2">&nbsp;</div></td>'
            }
        }else{
            for (var k = 0; k < ejecucion2[j] ; k++) {

                tabla2 += '<td ><div class="col s7 card-panel teal lighten-' + j + '">&nbsp;</div></td>'
            }
        }
        ant2+=ejecucion[j];
    }
    tabla2+='<tr>';
    for (var j = 0; j <ejecucion2.length-1 ; j++){
                tabla2 += '<td colspan="'+ejecucion2[j]+'" class="deep-purple lighten-' + j + '">&nbsp;</td>'

    }
    tabla2+='</tr>'
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