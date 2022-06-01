import { Card, CardContent, Typography } from "@mui/material";
import "../styles/Message.css";

export const Message = ({ message, username }) => {
  const isUser = username === message.username;

  return (
    <div className={`message ${isUser && "message__user"}`}>
      {!isUser && <p className="message__messageUser">{message.username}</p>}{" "}
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="black" variant="h5" component="h2">
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
