import React from "react";
const { io } = require("socket.io-client");

export const socket = io(process.env.REACT_APP_URL, {
  reconnection: true,
  reconnectionDelay: 500,
  reconnectionAttempts: 10,
});

const socketContext = React.createContext(socket);

export default socketContext;
