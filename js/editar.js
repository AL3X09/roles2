/**
 * Created by Alex on 11/03/2017.
 */
var getUrl = window.location;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1]+ "/"; // lineas servidor local

$(document).ready(function() {
    listarRoles();
})

function volver() {
    location.href=baseUrl+"Administracion";
}

function listarRoles() {
    $.ajax({
        url: baseUrl + 'Administracion/listarRoles',
        method: 'POST',
        async: false,
        success: function (data) {
            $.each(data, function (k, v) {
                $('select').append($("<option></option>").val(v.idroles).html(v.nombre));
            });
        }
    });

    $('select').material_select();
    listarDatos();
}

function listarDatos() {
    var iduser=$('#hiddenUser').val();
    $.ajax({
        url: baseUrl + 'Editar/listarDatos',
        method: 'POST',
        data :{ idusuario:iduser},
        //async: false,
        success: function (data) {
            //console.log(data);
            $.each(data, function (k, v) {
               $('#nombre1').val(v.nombre1);
               $('#nombre2').val(v.nombre2);
               $('#apellido1').val(v.apellido1);
               $('#apellido2').val(v.apellido2);
                $('#identificacion').val(v.identificacion);
                $('#celular').val(v.celular);
               $('#usuario').val(v.usuario);
               $('#password').val(v.contrasenia);
               console.info($('#rol'));
               $('#rol').val(v.fkroles);
            });
        }
    });

    //$('select').material_select();
}


function guardar() {
    $.ajax({
        url: baseUrl + 'Edita/updateUsuario',
        method: 'POST',
        data: $("#formusuario").serialize(),
        success: function (data) {
            console.log(data);
            var $toastContent = $('<span>'+data.msg+'</span>');
            Materialize.toast($toastContent, 5000);
            location.href=baseUrl+'Administracion';

        }
    });
}


