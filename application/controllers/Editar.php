<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Editar extends CI_Controller {

	//public function costruct
    public function __construct() {
        parent:: __construct();
        $this->load->helper(array('url', 'form', 'array', 'html'));
        $this->load->model(array('EditarModel', '',''));
    }

	public function index()
	{
        session_start();
		$this->load->view('editar');
	}
    
    public function listarRoles()
    {
        $roles = $this->PermisosModel->listarRoles();
        header('Content-type: application/json; charset=utf-8');
        echo json_encode($roles);
    }

    
    public function listarDatos()
    {
        $idusuario = $_POST['idusuario'];
        $datosP = $this->EditarModel->listarDatosUsuarios($idusuario);
        header('Content-type: application/json; charset=utf-8');
        echo json_encode($datosP);
    }

}
