import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from './pages/Home';
import Signup from './pages/Signup.js';
import Login from './pages/Login.js';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Data from './pages/Data.js';
import View from './pages/View.js';
import Edit from './pages/Edit.js';
import Forgotpassword from './pages/Forgotpassword.js';
import Changepassword from './pages/Changepassword.js';
import Profile from './pages/Profile.js';
import ForgotPasswordDetails from './pages/ForgotPasswordDetails.js';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/data' element={<Data/>}/>
      <Route exact path='/view' element={<View/>}/>
      <Route exact path='/edit' element={<Edit/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/forgotpassword' element={<Forgotpassword/>}/>
      <Route exact path='/changepassword' element={<Changepassword/>}/>
      <Route exact path='/profile' element={<Profile/>}/>
      <Route exact path='/forgotpassworddetails' element={<ForgotPasswordDetails/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
