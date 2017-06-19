<?php

require('vendor/autoload.php');

use Ratchet\Server\IoServer;
use ChatApp\chat;

$server = IoServer::factory(
    new Chat(),
    8080
);

$server->run();




?>
