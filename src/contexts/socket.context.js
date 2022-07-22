import React from "react";
const { io } = require("socket.io-client");

export const socket = io("https://localhost:8080", {
  reconnection: true,
  reconnectionDelay: 500,
  reconnectionAttempts: 10,
});

const socketContext = React.createContext(socket);

export default socketContext;
