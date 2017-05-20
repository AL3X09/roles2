<!DOCTYPE html>
<html lang="es">
<head>
<!-- CSS  -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="<?php echo base_url(); ?>css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
<title> APLICIÓN ADMINISTRATIVA </title>
</head>

<body class="cyan">
<div class="section"></div>
<div class="row">
<?php
if (isset($msg)){
    echo $msg;
    echo '<script>editar();</script>';
   }
?>
</div>
<div class="row">
    <div class="col m4"></div>

            <div class="col s12 m4  z-depth-5 card-panel">

                <form method="post" id="loginForm" method="post" action="<?php echo base_url(); ?>Administracion/acceder">

                    <div class='row '>
                        <div class='col s12'>
                            <div class="input-field col s12 center">
                                <img src="https://spearcommunication.files.wordpress.com/2016/01/6650fa_f60c4bb75c7448a6a015b4334e27ac38.gif?w=527&h=395" alt=""  height="150" width="150" class="circle responsive-img valign profile-image-login">
                                <p class="center login-form-text">por favor, ingrese con su cuenta asignada</p>
                            </div>
                        </div>
                    </div>

                    <div class='row'>
                        <div class='input-field col s12'>
                            <i class="material-icons prefix">account_circle</i>
                            <input class='validate' type='text' name='user' id='user' required/>
                            <label for='email'>Ingrese su usuario</label>
                        </div>
                    </div>

                    <div class='row'>
                        <div class='input-field col s12'>
                            <i class="material-icons prefix">lock_outline</i>
                            <input class='validate' type='password' name='password' id='password' required/>
                            <label for='password'>Ingrese su contraseña</label>
                        </div>

                    </div>

                    <br />

                        <div class='row'>

                            <div class='input-field col s12'>
                            <button type='submit' name='btn_login' class='btn waves-effect waves-light col s12' >Ingrsar</button>
                            </div>
                        </div>

                </form>
            </div>

</div>


    <div class="section"></div>
    <div class="section"></div>

<!--  Scripts-->
<script src="<?php echo base_url(); ?>js/jquery-3.1.1.min.js"></script>
<script src="<?php echo base_url(); ?>js/materialize.js"></script>
<script src="<?php echo base_url(); ?>js/index.js"></script>

</body>

</html>