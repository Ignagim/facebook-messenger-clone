import { useEffect, useState } from "react";
import { FormControl, Input, IconButton } from "@mui/material";
import "../styles/App.css";
import { Message } from "./Message";
import { serverTimestamp, onSnapshot, addDoc } from "firebase/firestore";
import { colRef, q } from "../firebase";
import SendIcon from "@mui/icons-material/Send";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
      );
    });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name") || "Guest");
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    addDoc(colRef, {
      message: input,
      username: username,
      timestamp: serverTimestamp(),
    });

    // setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <header className="app__header">
        <img
          className="app__logo"
          src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
          alt="messenger-logo"
        />
        <h1>Messenger App</h1>

        <h2 className="app__titleUser">Welcome {username}</h2>
      </header>

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <article className="app__messages">
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </article>
    </div>
  );
}

export default App;
