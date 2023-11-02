
const io = require("socket.io")(6060, {
  cors: {
    origin: "https://instant-messaging-tm.netlify.app",
  },
})

let activeUsers = []

io.on("connection", (socket) => {
  socket.on("new-user-add", (newUserID) => {
    console.log(newUserID)
    if (newUserID !== null) {
      if (!activeUsers.some((user) => user.userID === newUserID)) {
        activeUsers.push({
          userID: newUserID,
          socketID: socket.id,
        })
      }
    }
    console.log("connected users", activeUsers)
    io.emit("get-users", activeUsers)
  })

  socket.on("send-message", (data) => {
    console.log('Data',data);
    let chatID=data.chatID
    let text=data.text
    let senderID=data.senderID
    let otherUserID = data.otherUser
    const user = activeUsers.find((user) => user.userID === otherUserID)
    console.log(user);
    if (user) {
      console.log(chatID,senderID,text);
      io.to(user.socketID).emit("receive-message", data)
    }
  })

  socket.on("disconnect", () => {
    activeUsers = activeUsers.filter((user) => user.socketID !== socket.id)
    console.log("user disconnected", activeUsers)
    io.emit('get-users',activeUsers)
  })
})
