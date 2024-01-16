// const express= require("express")

// const http= require("http")

// const io= require("socket.io")(httpServer, {
//     cors: {
//         origin: "https://your-app-name.onrender.com",
//         methods: ["GET", "POST"],
//     },})

// const app= express()

// const server= http.createServer(app)

// const socket= io(server)

// app.set("view engine","ejs")

// app.get("/",(req,res)=>{
//  res.render('homepage')
// })

// socket.on("connection",(socket)=>{
//     //the socket in  the argument can be anything and it does not have anything to do with the actual socket but it has to be same with what youre consologging, the server is assuming the argument is the response sent from the client and that is why the id can be gotten 
// console.log(socket.id)

// socket.on("message",(data)=>{
// socket.broadcast.emit("message",data)
// })
// })


// const port= 5009

// server.listen(port,()=>{
// console.log(`listening on port ${port}`)
// })

// const express = require("express");
// const http = require("http");
// const socketIO = require("socket.io"); 

// const app = express();
// const server = http.createServer(app);
// const io = socketIO(server, {
//     cors: {
//         origin: "https://oluchi-chat-app.onrender.com",
//         methods: ["GET", "POST"],
//     },
// });

// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//     res.render('homepage');
// });

// io.on("connection", (socket) => {
//     console.log(`Socket connected: ${socket.id}`);

//     socket.on("message", (data) => {
//         socket.broadcast.emit("message", data);
//     });
// });

// const port = 5009;

// server.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
// });



const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: "https://oluchi-chat-app.onrender.com",
        methods: ["GET", "POST"],
    },
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render('homepage');
});

io.on("connection", (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    socket.on("message", (data) => {
        io.emit("message", data); 
    });
});

const port = 5009;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
