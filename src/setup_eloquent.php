<?php 
	use \Illuminate\Database\Capsule\Manager as Capsule;
	use \Illuminate\Events\Dispatcher;
	use \Illuminate\Container\Container;

	date_default_timezone_set('Europe/London');

	$container = new Container;
	$capsule = new Capsule;

	$capsule->addConnection([
		'driver' => 'mysql',
		'host' => 'localhost',
		'database' => 'chat_db',
		'username' => 'chat',
		'password' => '12345678',
		// 'charset' => 'utf-8',
		'collation' => 'utf8_unicode_ci',
		'prefix' => '',
		]);

	$capsule->setEventDispatcher(new Dispatcher($container));
	$capsule->setAsGlobal();
	$capsule->bootEloquent();

?>