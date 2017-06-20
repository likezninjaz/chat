<?php
namespace ChatApp;
use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

use Ratchet\Http\HttpServer;
use ratchet\WebSocket;


class Chat implements MessageComponentInterface{

    protected $clients;

    function __construct(){

        $this->clients =  new \SplObjectStorage;
    }

    

    public function onOpen(ConnectionInterface $conn){

        $this->clients->attach($conn);
        echo "New connection ({$conn->resourceId})\n";
    }

    public function onMessage(ConnectionInterface $from, $msg){
        
        echo $msg;

          foreach($this->clients as $client){
            if($client !== $from){
                $client->send($msg);
            }
        } 
    }

    public function onClose(ConnectionInterface $conn){
      $this->clients->detach($conn);
      echo "Connection {$conn->resourceId} has disconnected";
    }

    public function onError(ConnectionInterface $conn, \Exception $e){
        echo "An error has occured: {$e->getMessage()}";
        $conn->close();
    }
}

?>