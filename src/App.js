import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './Components/AddUser/AddUser';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NothigFound from './Components/NothingFound/NothigFound';
import UpdateUser from './Components/UpdateUser/UpdateUser';
import Users from './Components/Users/Users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/add' element={<AddUser />} />
          <Route path='/users/update/:id' element={<UpdateUser />} />
          <Route path='*' element={<NothigFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
