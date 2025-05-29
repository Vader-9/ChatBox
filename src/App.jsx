import { useState } from 'react'
import './App.css'
import './index.css'
import Header from './Header'
import Body from './Body'
import Input from './Input'
import { Tooltip } from 'react-tooltip'

function App() {


  const [messages, setMessages] = useState([])

  return (
    <div className="app">
     <div className='tool'  data-tooltip-id="my-tooltip">
        <p>ayobami</p>
        
      </div>
      <Tooltip id='my-tooltip' clickable={true}>
            <Header></Header>
       <Body messages={messages}/>
       <Input setMessages={setMessages} />
        
      </Tooltip>
    </div>
  )
}

export default App
