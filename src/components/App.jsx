import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Splash from '../pages/Splash';
import Home from '../pages/Home';
// import Maintenance from '../pages/Maintenance';

import '../assets/scss/index.scss';

const App = () => {
   const [showHome, setShowHome] = useState(false);

   setTimeout(() => setShowHome(true), 3800);

   return (
      <Routes>
         <Route path="/" element={showHome ? <Home /> : <Splash />} />
         {/* <Route path="/" element={<Maintenance />} /> */}
         <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
   );
};

export default App;
