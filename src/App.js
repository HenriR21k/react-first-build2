import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layouts/Layout.js'
import MyModules from './components/pages/MyModules.js';
import MyAssessment from './components/pages/MyAssessment.js';
import MySchedule from './components/pages/MySchedule';
import PageNotFound from './components/pages/404.js';


import './App.css';




function App() {
  return (
  
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<MyModules />}/>
          <Route path='/MyAssessment' element={<MyAssessment />}/>
          <Route path='/MySchedule' element={<MySchedule />}/>
          <Route path='*' element={<PageNotFound />}/>
        </Routes>
      </Layout>
      </BrowserRouter>
    
  );
}

export default App;
