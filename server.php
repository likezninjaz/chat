<?php

require('vendor/autoload.php');

use Ratchet\Server\IoServer;
use ChatApp\chat;

$server = IoServer::factory(
    new Chat(),
    8000
);

$server->run();

print('Server started');


?>
