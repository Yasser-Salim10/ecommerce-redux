import  React  from 'react';
import './App.css';
import Main from './Components/Main/Main';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FilterdProducts from './Components/FilterdProducts/FilterdProducts';
import SingleProduct from './Components/FilterdProducts/SingleProduct';
import Login from './Components/Login/Login';
import { useSelector } from 'react-redux';

function App() {
  const user =useSelector((state) => state.user.user);
  const {authUser} = user;
  console.log("user", user)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
          path="/" 
          element={authUser ? <Main></Main> : <Login></Login>}
          ></Route>
          <Route 
          path="/filtredproducts/:type" 
          element={<FilterdProducts></FilterdProducts>}
          ></Route>
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct></SingleProduct>}
          ></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;