const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

app.get("/", (req, res, next) => {
  res.status(200).send("Server Response");
});

io.on('connection', (socket) => {
  socket.emit('me', socket.id);
  socket.emit('callEnded', socket.id);
  socket.on('disconnect', (data) => {
    console.log(data);
  })
})

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
