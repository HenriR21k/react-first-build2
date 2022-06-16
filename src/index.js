import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { FavouritesContextProvider } from './components/data/Favourites';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavouritesContextProvider>
    <App />
  </FavouritesContextProvider>
  
);


