<!DOCTYPE html>
<html lang="es">
<head>
<!-- CSS  -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="<?php echo base_url(); ?>css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
<title> ADMINISTRACION </title>
</head>
<!-- BODY  -->
<body class="" >
<?php
if (!isset($_SESSION["usuario"])) {
    //echo "error1";
	session_start();
//header("location: ". base_url()."Administracion/cerrarSesion");
}
$aspirante = unserialize($_SESSION['usuario']);

echo '<input type="hidden" value="'.$aspirante->idusuario.'" id="idusuario"/>';

ob_end_flush();
?>
<nav class="blue darken-1" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo"><img src="<?php echo base_url(); ?>img/logo.svg" width="100" height="80"></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href=""><?php echo $aspirante->usuario ?></a></li>
            <li><a href="<?php echo base_url(); ?>Administracion/cerrarSesion">Cerrar Sesion</a></li>
        </ul>
    </div>
</nav>
<div class="section no-pad-bot" id="index-banner">
    <div class="container">

        <h4 class="header center orange-text">SISTEMA ADMINISTRATIVO</h4>

    </div>
</div>
<div class="container" id="administracion">
    <div class="row">
        <div class="col l3 s12">
            <button class="btn waves-effect waves-light" type="button" name="action" onclick="vistaRoles()" id="botonCrear">Crear Roles
                <i class="material-icons right">vpn_key</i>
            </button>
        </div>
        <div class="col l3 s12">
            <div id="divBotoncrear">
            <?php
            if($aspirante->ver=1){
                echo '<a class="btn-floating btn-large waves-effect waves-light red" onclick="vistacrearUsuario()"><i class="material-icons">add</i></a>';
            }
            ?>
            </div>
        </div>
    </div>
</div>


<div class="container">
    <table class="striped">
        <thead>
        <tr>
            <th>Codigo</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Identificación</th>
            <th>Telefono</th>
            <th>Editar</th>
            <th>Eliminar</th>
        </tr>
        </thead>

        <tbody id="usuarios">

        </tbody>
    </table>
</div>

<div class="container">
<div class="preloader-wrapper big active" id="reload" style="display:none">
    <div class="spinner-layer spinner-blue">
        <div class="circle-clipper left">
            <div class="circle"></div>
        </div><div class="gap-patch">
            <div class="circle"></div>
        </div><div class="circle-clipper right">
            <div class="circle"></div>
        </div>
    </div>
</div>
</div>

<div class="section"></div>
<div class="section"></div>

<footer class="page-footer blue darken-4">
    <div class="container">
        <div class="row">
            <div class="col l6 s12">
                <h5 class="white-text"></h5>
            </div>
            <div class="col l6 s12">
                <h5 class="white-text"></h5>
                <ul>
                    <li><a class="white-text" href="#!"></a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer-copyright">
        <div class="container">
            Power full by <a class="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
        </div>
    </div>
</footer>
<!--  Scripts-->
<script src="<?php echo base_url(); ?>js/jquery-3.1.1.min.js"></script>
<script src="<?php echo base_url(); ?>js/materialize.js"></script>
<script src="<?php echo base_url(); ?>js/administracion.js"></script>
</body>
</html>