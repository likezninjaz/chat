<?php
require('vendor/autoload.php');

use ChatApp\entities\Message;

echo message::all()->toJSON();

?>