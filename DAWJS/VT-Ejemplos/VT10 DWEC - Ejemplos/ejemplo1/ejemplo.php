<?php 

	$valor1 = "Alegría";
	$valor2 = "Esfuerzo";
	$valor3 = "Detalles";
	$valor4 = "Ilusión";

	if (isset($_GET['busca'])) {
		switch ($_GET['busca']) {
			case '1':
				echo $valor1;
				break;
			case '2':
				echo $valor2;
				break;
			case '3':
				echo $valor3;
				break;
			case '4':
				echo $valor4;
				break;
			default:
				echo "Error";
				break;
		}
	}

?>

