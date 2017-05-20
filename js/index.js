/**
 * Created by Alex on 11/03/2017.
 */
var getUrl = window.location;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1]+ "/"; // lineas servidor local
$(document).ready(function() {
//console.log(baseUrl);
})

function acceder() {
    $.ajax({
        url: baseUrl + 'Administracion/acceder',
        method: 'POST',
        data: $("#loginForm").serialize(),
        success: function (data) {
            console.log(data);
            $.each(data, function (k, v) {

            });
        }
    });
}
function editar() {
    var $toastContent = $("<span>Formulario no funcional</span>");
    Materialize.toast($toastContent, 5000);
}




