import Layout from './components/layouts/Layout.js'
import Home from './components/pages/Home.js';
import SignIn from './components/pages/SignIn.js';
import ContactUs from './components/pages/ContactUs';
import PageNotFound from './components/pages/404.js';


import './App.css';



function App() {
  return (
    <Layout>
      <Home />
    </Layout>

  );
}

export default App;
