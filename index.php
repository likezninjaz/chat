<?php
  error_reporting(E_ALL);
  ini_set('display_errors', 1);
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/main.css">
  <title>Chat</title>
</head>
<body>
  <main>
    <section class="profile">
      <img src="images/profile_photo.jpg" class="profile-photo">
      <h1 class="profile-name">Chris Marina</h1>
      <h2 class="profile-info">Blogger</h2>
      <div class="profile-about">
        <div class="profile-about-city">
          <img src="images/location.png">
          <span>New-York</span>
        </div>
        <div class="profile-about-email">
          <img src="images/email.png">
          <span>chris@marina.com</span>
        </div>
        <div class="profile-about-birthday">
          <img src="images/cake.png">
          <span>23.04.1987</span>
        </div>
        <div class="profile-about-phone">
          <img src="images/phone.png">
          <span>+26559551559</span>
        </div> 
      </div>

    </section>
    <section class="chat">
      <header class="chat-header">
        <h1 class="chat-header-name">Chris Marina</h1>
      </header>
      <ul class="chat-conversation">
        <li>One</li>
        <li class="chat-conversation-message incoming">
          <img src="images/profile_photo.jpg" class="chat-conversation-message-photo" />
          <span class="chat-conversation-message-text">Hello! How are you?</span>
        </li>

        <li class="chat-conversation-message outcoming">
          <span class="chat-conversation-message-text">Hi! I'm okay, thanks.</span>
          <img src="images/profile_photo2.jpg" class="chat-conversation-message-photo" />
        </li>

      </ul>

      <form class="chat-conversation-input" action="index.php" method="post">
        <img src="images/smile.png" class="chat-conversation-input-stiker" />
        <img src="images/attach.png" class="chat-conversation-input-file" />
        <form class="chat-form" action="index.html" method="post">
        <input type="textarea" placeholder="Type something to send..." class="chat-conversation-input-field" id="message"/>
        <!-- <img src="images/send.png" class="chat-conversation-input-send" /> -->
        <button type="submit" name="button" class="chat-conversation-input-send">Send</button>
      </form>
     

    </section>
    <section class="contacts">
      <div class="contacts-user">
        <img src="images/profile_photo2.jpg" class="contacts-user-photo" />
        <div class="contacts-user-info">
          <span class="contacts-user-info-name">Sam Fisher</span>
          <div class="contacts-user-info-status">
            <span class="contacts-user-info-status-icon"></span>
            <span class="contacts-user-info-status-text">Busy</span>
          </div>  
        </div>
        <img src="images/edit.png" class="contacts-user-edit" />
      </div>
      <ul class="contacts-list">
        <li class="contacts-list-profile">
          <img src="images/profile_photo.jpg" class="contacts-list-profile-photo" />
          <div class="contacts-list-profile-info">
            <span class="contacts-list-profile-info-name">Chris Marina</span>
            <span class="contacts-list-profile-info-lastmessage">Last message</span>
          </div>
        </li>
        <li class="contacts-list-profile">
          <img src="images/profile_photo.jpg" class="contacts-list-profile-photo" />
          <div class="contacts-list-profile-info">
            <span class="contacts-list-profile-info-name">Chris Marina</span>
            <span class="contacts-list-profile-info-lastmessage">Last message</span>
          </div>
          <span class="contacts-list-profile-unread">2</span>
        </li>
        <li class="contacts-list-profile">
          <img src="images/profile_photo.jpg" class="contacts-list-profile-photo" />
          <div class="contacts-list-profile-info">
            <span class="contacts-list-profile-info-name">Chris Marina</span>
            <span class="contacts-list-profile-info-lastmessage">Last message</span>
          </div>
        </li>
      </ul>
    </section>
  </main>
</body>

<script src='js/jquery.js'></script>
<script src='js/jquery.cookie.js'></script>
<script src='js/main2.js'></script>
<!-- <script src='js/edit_profile.js'></script> -->
<!-- <script src='js/chat_conversation.js'></script> -->
</html>

