// import Register from './register';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './register.js';
import Login from './login.js';
import Dashboard  from './dashboard.js';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/signup" element={<Register/>}/>
        <Route path="" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    );
}

export default App;

