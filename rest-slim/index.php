<?php

require_once 'vendor/autoload.php';

$app = new \Slim\Slim();

$db = new mysqli('localhost', 'root', '11', 'expenses');

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}

$app->get("/tests", function() use($app, $db){
	echo "Hi world since Slim PHP";
});

$app->get("/testing", function() use($app, $db){
	echo "Another Text";
});


//Get all product
$app->get('/product', function() use($db, $app){

	$sql = "SELECT * FROM product ORDER BY id DESC;"; 
	$query = $db->query($sql);

	$products[] = null;

	while ($product = $query->fetch_assoc()) {
		$products[] = $product;
	}

	$response = array(
		'status' => 'success',
		'code' => 200,
		'data' => $products
	);

	echo json_encode($response);

});

//Create Product
$app->post('/product', function() use($app, $db){

	$json = $app->request->post('json');
	$data = json_decode($json, true);

	if (!isset($data['name'])) {
		$data['name'] = null;
	}

	if (!isset($data['description'])) {
		$data['description'] = null;
	}

	if (!isset($data['price'])) {
		$data['price'] = null;
	}

	if (!isset($data['image'])) {
		$data['image'] = null;
	}

	$query = "INSERT INTO product VALUES(NULL,".
			"'{$data['name']}',".
			"'{$data['description']}',".
			"'{$data['price']}',".
			"'{$data['image']}'".
			");";

	$insert = $db->query($query);

	$response = array(
		'status' => 'error',
		'code' => 404,
		'message' => 'Product not created'
	);

	if ($insert) {

		$response = array(
			'status' => 'success',
			'code' => 200,
			'message' => 'Product created corretly'
		);
		
	}

	echo json_encode($response);

});

//Get a product
$app->get('/product/:id', function($id) use($db, $app){

	$sql = 'SELECT * FROM product WHERE id ='.$id; 
	$query = $db->query($sql);

	$response = array(
		'status' => 'error',
		'code' => 404,
		'message' => 'Product not available'
	);

	if ($query->num_rows == 1) {
		
		$product = $query->fetch_assoc();

		$response = array(
			'status' => 'success',
			'code' => 200,
			'data' => $product
		);

	} 

	echo json_encode($response);

});

//Delete a product
$app->get('/delete-product/:id', function($id) use($db, $app){

	$sql = 'DELETE FROM product WHERE id ='.$id; 
	$query = $db->query($sql);

	$response = array(
		'status' => 'error',
		'code' => 404,
		'message' => 'Failed to delete product'
	);

	if ($query) {
		
		$response = array(
			'status' => 'success',
			'code' => 200,
			'message' =>  'Product successfully deleted'
		);

	} 

	echo json_encode($response);

});

//Update a product
$app->get('/update-product/:id', function($id) use($db, $app){

	$json = $app->request->post('json');
	$data = json_decode($json, true);

	$sql = "UPDATE product SET ".
			"name =  '{$data['name']}', ".
			"description = '{$data['description']}', ".
			"price = '{$data['price']}' 
			WHERE id = {$id}";

	$query = $db->query($sql);

	if ($query) {
		
		$response = array(
			'status' => 'success',
			'code' => 200,
			'message' =>  'Product updated correctly '
		);

	} else {

		$response = array(
			'status' => 'error',
			'code' => 404,
			'message' => 'Failed to update product'
		);

	} 

	echo json_encode($response);

});

//Upload image
$app->post('/upload-image', function() use($db, $app) {

	if (isset($_FILES['upload'])) {

		$piramideUploader = new PiramideUploader();

		$upload = $piramideUploader->upload(
							'img', 
							'upload',
							'img',
							array('image/jpeg', 'image/png', 'image/gif')
							); 

		$file = $piramideUploader->getInfoFile();

		$file_name = $file['complete_name'];

		if (isset($upload) && $upload['uploaded'] == false) {
			
			$response = array(
				'status' => 'error',
				'code' => 404,
				'message' => 'File could not upload'
			);

		} else {

			$response = array(
				'status' => 'success',
				'code' => 200,
				'message' => 'File uploaded correctly',
				'filename' => $file_name
			);
		}
		
	}

});

$app->run();