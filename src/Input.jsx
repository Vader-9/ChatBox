import { useState } from 'react';
import './Input.css'



function Input({setMessages}){

    const [sendMessage, setSendMessage] = useState('')

    

    function message(e){
         setSendMessage(e.target.value)
    }

    function send(){
       
        setMessages(prevMessages => [...prevMessages, sendMessage])
        setSendMessage('')
        
    }

    return(<div id='input'>
            
            <input type="text" onChange={(e)=>message(e)} value={sendMessage} placeholder='Meassage' />
            <button onClick={send}>==</button>
            
    </div>)
}

export default Input;