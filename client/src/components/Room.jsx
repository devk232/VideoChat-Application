import React, { useEffect, useRef } from "react";
import { io } from "socket.io-client";

const Room = () => {
  let socketInstace = useRef(null);
  useEffect(() => {
    startConnection();
  }, []);
  const handleDisconnect = () => {
    socketInstace.current?.destroyConnection();
    props.history.push("/");
  };
  return <div></div>;
};

export default Room;
