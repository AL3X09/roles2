<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Eliminar extends CI_Controller {


    //public function costruct
    public function __construct() {
        parent:: __construct();
        $this->load->helper(array('url', 'form', 'array', 'html'));
        //$this->load->model(array('TbaspirantesModel', 'TbusuarioModel','TbprocesoincorporacionModel'));
    }

	public function index()
	{
		$this->load->view('');
	}
}
