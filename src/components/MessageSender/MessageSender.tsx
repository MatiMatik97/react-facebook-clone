import React from "react";
import "./MessageSender.scss";
import { Avatar } from "@material-ui/core";
import { useForm } from "react-hook-form";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useUserContext } from "../../contexts/UserContext";

type Message = {
  message: string;
  image: string;
};

const MessageSender: React.FC = () => {
  const {
    state: { user },
  } = useUserContext();
  const { register, handleSubmit } = useForm<Message>();

  const onSubmit = (data: Message) => {
    console.log(data);
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user?.photoURL || ""} />

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="What's on your mind"
            ref={register}
            name="message"
          />
          <input
            placeholder="image URL (Optional)"
            ref={register}
            name="image"
          />
          <button type="submit">Hidden Submit</button>
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
};

export default MessageSender;
