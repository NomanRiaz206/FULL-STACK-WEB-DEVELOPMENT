
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Form from './components/Form';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Products from './Pages/Products';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
const App = ()=>{
  return(
 <div>
 <Navbar/>
   <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/form' element={<Form/>}></Route>
<Route path='/contact' element={<Contact/>}></Route>
<Route path='/products' element={<Products/>}></Route>
<Route path='/signup' element={<Signup/>}></Route>
<Route path='/login' element={<Login/>}></Route>


   </Routes>
 </div>
 
  )
}
export default App;