import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css'




import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-bootstrap';
import HomePage from './home.page';
import HomePageLayout from './home.page.layout';
import ErrorPage from './components/error.pagej';
import RegisterPage from './components/regis.page';
import LoginPage from './components/login.page';


const App =() => {
  return (
    <>
     <ToastContainer/>
    <BrowserRouter>
<Routes>

  <Route path='/' element={<HomePageLayout/>}>

        <Route index element={<HomePage />} />
        
        <Route path='/register' element= {<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
       
        <Route path='*' element={<ErrorPage/>}/>
       
      </Route>
      </Routes>
      </BrowserRouter>


    </>
  )
}


export default App;