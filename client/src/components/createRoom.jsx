import React from "react";
import Axios from "axios";

const CreateRoom = (props) => {
  const handleJoin = () => {
    Axios.get(`http://localhost:4000/join`).then((res) => {
      props.history?.push(`/join/${res.data.link}`);
    });
  };
  return (
    <React.Fragment>
      <div className="container-fluid">
        <button className="btn btn-primary m-4" onClick={handleJoin}>Create Room</button>
      </div>
    </React.Fragment>
  );
};

export default CreateRoom;
