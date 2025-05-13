import './Body.css'

function Body(props){

    const value = props.valueinfo

    

    return(<div id='body'>
    <div className="outgoing">
        <p>{value}</p>
    </div>
    <div className="ingoing">

    </div>
    </div>)
}

export default Body;