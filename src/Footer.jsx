import { assets } from "./assets/assets"
import"./Footer.css"

function Footer(){

    return(<div className="footer">
        <div className="edemy">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A assumenda repudiandae rerum doloribus molestias quaerat, sint, error tempore dolores saepe vitae aspernatur velit quisquam pariatur doloremque ab accusantium rem temporibus!</p>
        </div>
        <div className="company">
            <h3>Company</h3>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="subscribe">
            <h3>Subscribe to our newsletter</h3>
            <p>The latest news, articles, and resources, sent to</p>
            <p>your inbox weekly</p>
            <input type="text" />
            <button>Susbcribe</button>
        </div>
    </div>)
}

export default Footer;