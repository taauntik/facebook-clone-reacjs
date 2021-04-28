import { Avatar } from "@material-ui/core";
import React, { useContext, useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import { UserContext } from "../../App";
import db from "../../firebase";
import firebase from "firebase";

function MessageSender() {
  const [user, setUser] = useContext(UserContext);
  const [input, setInput] = useState("");
  const [imgURL, setImgURL] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imgURL,
    });

    setInput("");
    setImgURL("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`What's on you mind ${user.displayName}`}
            className="messageSender__input"
          />
          <input
            value={imgURL}
            onChange={(e) => setImgURL(e.target.value)}
            placeholder="img URL (Optional)"
          />
          <button type="submit" onClick={handleSubmit}>
            Hidden Button
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
