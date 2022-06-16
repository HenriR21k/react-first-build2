import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layouts/Layout.js'
import Home from './components/pages/Home.js';
import SignIn from './components/pages/SignIn.js';
import ContactUs from './components/pages/ContactUs';
import PageNotFound from './components/pages/404.js';


import './App.css';




function App() {
  return (
  
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/signin' element={<SignIn />}/>
          <Route path='/contact' element={<ContactUs />}/>
          <Route path='*' element={<PageNotFound />}/>
        </Routes>
      </Layout>
      </BrowserRouter>
    
  );
}

export default App;
