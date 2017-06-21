
<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <title>Chat</title>
    </head>
    <body>
        <div class="container">
              <div class="row">
                    <div class="col-md-push-2 col-md-8">
                        <h2>Php Chat<h2>
                            <h3>Message</h3>
                            <ul class="message-list">

                            </ul>

                                <form class="chat-form" actio="index.html" method="post">
                                <div class="form-group">
                                    <label for="message">Message</label>
                                    <textarea type="button" id="message" name="message" class="form-control" value="">
                                    </textarea>

                                </div>
                                <div class="">
                                   <button type="submit" name="button" class="btn btn-primary pull-right">Send</button>
                                </div>          
                            </form>
                    </div>
              </div>
        </div>
    </body>
    <script src='js/jquery.js'></script>
    <script src='js/jquery.cookie.js'></script>
    <script src='js/main.js'></script>
</html>

