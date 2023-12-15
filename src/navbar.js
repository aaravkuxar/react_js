import './App.css'
import { useNavigate } from 'react-router-dom';
import Signup from './pages/signup';
export default function Navbar(){
    const navigate=useNavigate();
    return (

        <><div class="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div>
          <button onClick={()=>navigate("/signup")}>Login</button>&nbsp;
          
        </div>
      </div></>
    )
}