<?php

$testnet = false;
$cacheLocation = __DIR__.'/'.($testnet ? 'cache-testnet' : 'cache');
$daemonAddress = '95.179.152.61';
$rpcPort = $testnet ? 11787 : 11787;
$coinSymbol = 'WAZN';

function transmitRequest($endpoint){
	global $daemonAddress;
	global $rpcPort;

	$url = 'http://'.$daemonAddress.':'.$rpcPort.'/'.$endpoint;
	$ch = curl_init( $url );
	if ( strtolower($_SERVER['REQUEST_METHOD']) == 'post' ) {
		curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
		curl_setopt($ch, CURLOPT_POST, true );
		curl_setopt($ch, CURLOPT_POSTFIELDS, file_get_contents('php://input') );
		curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
	}

	curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, true );
	curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
	curl_setopt( $ch, CURLOPT_ENCODING ,'');

	$contents = curl_exec( $ch );
	$status = curl_getinfo( $ch );
	curl_close( $ch );

	header('Content-type: application/json');
	echo $contents;
}
