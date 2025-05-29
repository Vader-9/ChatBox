import './Body.css'

function Body(props){

    

    let messages = props.messages
    console.log(messages)

    const child = messages.map((message, index) => {
        return (
            <div key={index} className='message'>
                <p id='message'>{message}</p>
            </div>
        )
    })

    return(<div id='body'>
        {child}
    </div>)

   
}

export default Body;