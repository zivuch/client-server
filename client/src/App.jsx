import { useState } from "react";

import "./App.css";

function App() {
  const [msg, setMsg] = useState({});
  const [name, setName] = useState("");

  const sendName = () => {
    if (name) {
      fetch(`/api/user?name=${name}`)
        .then((res) => res.json())
        .then((data) => {
          setMsg(data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <>
      <input
        placeholder='Your name...'
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={sendName}>Send</button>
      <div>Message: {msg?.messgae}</div>
    </>
  );
}

export default App;
