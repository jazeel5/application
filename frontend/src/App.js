import logo from './logo.svg';
import './App.css';
import Insert from './Component/Insert';
import View from './Component/View';
import Edit from './Component/Edit';
import StudentContext from './Context/student';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Component/Login';
import Register from './Component/Register';


function App() {
  return (
    <>
      <StudentContext>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<View />} />
            <Route exact path='/insert' element={<Insert />} />
            <Route exact path='/edit/:id' element={<Edit />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </StudentContext>
    </>
  );
}

export default App;


















