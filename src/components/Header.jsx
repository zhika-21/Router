import {Link} from "react-router-dom"
function Header (){
    return (
        <ul>
            <li><Link to=
            {{pathname: "/",
            state:{
                name: "customername",
                category: "categoryname"
            }
            }}>Home</Link></li>
            <li><Link to="/About/iphone300"> About</Link></li>
            <li><Link to="/">Profile</Link></li>
        </ul>
    )
}
export default Header;