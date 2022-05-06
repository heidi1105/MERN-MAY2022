import React, {useState} from "react"
import ParentComponent from './components/ParentComponent';
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';

function App() {
  const [currMessage, setCurrMessage] = useState("")
  const [messages, setMessages] = useState([]) 

  const handleNewMessage = (newMessage) =>{
    setCurrMessage(newMessage)
    setMessages([...messages, newMessage])
  }

  return (
    <div >
      {/* <ParentComponent /> */}
      <MessageForm onNewMessage = {handleNewMessage}/>
      <MessageDisplay currMessage={currMessage} messages={messages}/>


    </div>
  );
}

export default App;
// send info from Parent to Child : props
