<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Crear extends CI_Controller {


	//public function costruct
    public function __construct() {
        parent:: __construct();
        $this->load->helper(array('url', 'form', 'array', 'html'));
        $this->load->model(array('CrearModel', '',''));
    }

	public function index()
	{
        session_start();
		$this->load->view('crear');
	}
    //
    public function nuevoUsuario()
    {
        $nombre1 = $_POST['nombre1'];
        $nombre2 = $_POST['nombre2'];
        $apellido1 = $_POST['apellido1'];
        $apellido2 = $_POST['apellido2'];
        $identificacion = $_POST['identificacion'];
        $celular = $_POST['celular'];
        $usuario = $_POST['usuario'];
        $contrasenia = $_POST['contrasenia'];
        $rol = $_POST['rol'];

        $insert = $this->CrearModel->insertar($nombre1,$nombre2,$apellido1,$apellido2,$identificacion,$celular,$usuario,$contrasenia,$rol);
        header('Content-type: application/json; charset=utf-8');
        echo json_encode($insert);
    }

}
