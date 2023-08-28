import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import { Toast, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
    toast.success('Successfully Created!');
  };

  const joinRoom = () => {
    if (!roomId) {
      toast.error('Please enter the room ID');
      return;
    } else if (!username) {
      toast.error('Please enter the username');
      return;
    }

    //................Redirect..................
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });

  };

  const handleInputEnter = (e) => {
    if (e.code == 'Enter'){
      joinRoom();
    }
  };

  return <div className="homePageWrapper">
    <div className="formWrapper">
      <img className="homePageLogo"src="codlab-logo.png" alt="codlab-logo"/>
      <div className="inputGroup">
        <input 
            type="text" 
            className="inputBox" 
            placeholder="ROOM ID" 
            onChange={(e) => setRoomId(e.target.value)} 
            value={roomId}
            onKeyUp={handleInputEnter}
        />
        <input 
            type="text" 
            className="inputBox" 
            placeholder="USERNAME"
            onChange={(e) => setUsername(e.target.value)} 
            value={username}
            onKeyUp={handleInputEnter}
        />
        <button className="btn joinBtn" onClick={joinRoom}>JOIN</button>
        <span className="createInfo">
          If you don’t have invite create &nbsp;
          <a onClick={createNewRoom} href="" className="createNewBtn">new room</a>
        </span>
      </div>
    </div>
  </div>;
};

export default Home