<?php

class Form extends CI_Controller {

	function index()
	{
		$this->load->helper(array('form', 'url'));

		$this->load->library('form_validation');

		if ($this->form_validation->run() == FALSE)
		{
			$data['title']="Hoşgeldiniz!";
			$this->load->view('form', $data);
		}
		else
		{
			$this->load->view('formSuccess');
		}
	}
}
?>