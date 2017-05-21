'use strict'

const app = require('express')()

const http = require('http').Server(app)

const io = require('socket.io')(http)

const url = require('url')

const qs = require('querystring')

const cookieParser = require('cookie-parser')

app.use(cookieParser())

 let usersOnline = 0;

app.get('/', function(req, res){
    
    console.log("Get request")
     //Проверяю cookies на наличие имя пользователя

     if(req.cookies.username == undefined){

            //Если имени нет то отправляю страницу для авторизации
            res.sendFile(__dirname + '/login.html');   
           
     }else{
        
        //Если имя есть то отправляю страницу с чатом
        res.sendFile(__dirname + '/index.html');
    }

});

app.get("/changeName", (req, res)=>{
    res.sendFile(__dirname + '/login.html')
})

// Обработка введёного логина
app.get('/login', function(req, res){

    const query = url.parse(req.url).query;

    const username = qs.parse(query).username;

    console.log("Username : " + username + " was logged");

    //Устанавливаю cookie и указываю путь для неё
    res.cookie("username", username, {path:"/"});

    console.log("Cookie changed");

    res.sendFile(__dirname + "/index.html");
});

io.on('connection', function(socket){

    usersOnline++;
    console.log('A user connected ' + usersOnline);
    io.emit('users online', usersOnline);

    socket.on('disconnect', function(){
        usersOnline--;
        console.log('user disconnected ' + usersOnline);
        io.emit('users online', usersOnline);
    });

    socket.on('chat message', function(mess, username){
        console.log(username + " - " + mess);

        // Приклеиваю имя к сообщению, и отправляю на клиент
        const message = username + " -> " + mess;

        io.emit('chat message',  message);// Отправляю всем 
    });
});

http.listen(8080, ()=> console.log("server listen port : 8080"))



