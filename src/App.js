import './App.css';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Signup from './pages/signup.js';
import Home from './pages/home.js'
export default function App() {
  return (
    <><BrowserRouter>
    <Routes>
      
    <Route path="/signup" element={<Signup/>}/>
    <Route index element={<Home/>}/>
    
    
    </Routes>
    </BrowserRouter> 
</>
    
  );
}


