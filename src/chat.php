<?php
namespace ChatApp;
use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

use Ratchet\Http\HttpServer;
use ratchet\WebSocket;

use ChatApp\entities\message;


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
        $msg = json_decode($msg);

        switch ($msg->type) {
            case 'message':
                            
          foreach($this->clients as $client){
            if($client !== $from){
                $client->send($msg->text);
            }
        } 

        message::create([
            'text' => $msg->text,
            'sender' => $msg->sender
            ]);
                break;
                   case 'value':
                # code...
                break;
                   case 'value':
                # code...
                break;
            
            default:
                # code...
                break;
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