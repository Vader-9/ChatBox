import { useState } from 'react';
import './Input.css'
import Body from './Body';


function Input(){

    const [sendMessage, setSendMessage] = useState('')

    const valueinfo = {sendMessage}

    function message(e){
         setSendMessage(e.target.value)
    }

    function send(){
        console.log(sendMessage)
        setSendMessage('')
    }

    return(<div id='input'>
            <Body value = {valueinfo}/>
            <input type="text" onChange={(e)=>message(e)} value={sendMessage} placeholder='Meassage' />
            <button onClick={send}>==</button>
            
    </div>)
}

export default Input;