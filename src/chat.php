<?php
namespace ChatApp;
use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

class Chat implements MessageComponentInterface{

    protected $clients;

    function __construct(){

    }




    public function onOpen(ConnectionInterface $conn){

        echo "Connection sucessfull";
    }

    public function onMessage(ConnectionInterface $from, $msg){

        echo $msg;
    }

    public function onClose(ConnectionInterface $conn){

    }

    public function onError(ConnectionInterface $conn, \Exception $e){

    }
}

?>
