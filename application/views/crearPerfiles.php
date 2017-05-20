<!DOCTYPE html>
<html lang="es">
<head>
<!-- CSS  -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="<?php echo base_url(); ?>css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
<title> CREAR PERFILES</title>
</head>

<body class="" >
<?php
if (!isset($_SESSION["usuario"])) {
	session_start();
    //echo "error1";

    //header("location: ". base_url()."Administracion/cerrarSesion");
}
$aspirante = unserialize($_SESSION['usuario']);
echo '<input type="hidden" value="'.$aspirante->idusuario.'" id="idusuario"/>';


ob_end_flush();
?>
<nav class="blue darken-1 nav-extended" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo" onclick="volver()"><img src="<?php echo base_url(); ?>img/logo.svg" width="100" height="80"></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
                <div class="chip">
                    <img src="<?php echo base_url(); ?>img/logo.svg" alt="Contact Person">
                    Jane Doe
                </div>
            </li>
            <li><a href="badges.html">Cerrar Sesion</a></li>
        </ul>
    </div>
    <br/>
    <div class="nav-content">
        <ul class="tabs tabs-transparent">
            <li class="tab"><a class="active" href="#test1">Listado de Roles</a></li>
            <li class="tab"><a href="#test2">Nuevo Rol</a></li>
        </ul>
    </div>
</nav>
<div id="test1" class="col s12">
    <div class="container">
        <table class="striped">
            <thead>
            <tr>
                <th>Codigo</th>
                <th>Nombres</th>
                <th>Perrmisos</th>
            </tr>
            </thead>

            <tbody id="roles">


            </tbody>
        </table>
        <div class="section"></div>
        <div class="section"></div>
        <br/>
    </div>
</div>

<div id="test2" class="col s12">
<div class="section no-pad-bot" id="index-banner">
    <div class="container">
        <br><br>
        <h4 class="header center orange-text">MODULO CREACION ROLES</h4>

    </div>
</div>
<div class="container">

    <div class="row">
        <form class="col s12" id="formnuevorol">
            <div class="row">

                <div class="input-field col s6">
                    <input placeholder="ingrese texto" id="nombre" name="nombre" type="text" class="validate">
                    <label for="first_name">Nombre</label>
                </div>
                <div class="input-field col s6">
                    <select multiple id="permisos" name="permisos[]">
                        <option value="" disabled selected>Seleccione..</option>
                    </select>
                    <label>Permisos</label>
                </div>


            </div>
            <div class="row">
                    <button class="btn waves-effect waves-light" type="button" onclick="guardar()">Guardar
                        <i class="material-icons right">send</i>
                    </button>
            </div>
        </form>
    </div>

</div>
</div>

<footer class="page-footer blue darken-4">
    <div class="container">
        <div class="row">
            <div class="col l6 s12">
                <h5 class="white-text">LENGUAJES DE INTERNET</h5>
            </div>
            <div class="col l6 s12">
                <h5 class="white-text">Trabajado por</h5>
                <ul>
                    <li><a class="white-text" href="#!">VICTOR MANUEL ROMERO ALBARRACIN</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer-copyright">
        <div class="container">
            Impulsado por <a class="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
        </div>
    </div>
</footer>
<!--  Scripts-->
<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="<?php echo base_url(); ?>js/materialize.js"></script>
<script src="<?php echo base_url(); ?>js/crearperfiles.js"></script>
</body>
</html>