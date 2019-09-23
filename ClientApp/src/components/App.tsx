// 3rd Party
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Other Components
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import PageNotFound from './PageNotFound';

// Component
const App: React.FC = () => {
  return (
    <div
      id='application'
      role='application'
      className='text-gray-900 h-screen w-screen flex flex-col font-main'
    >
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={Home} />
        {/* <Route component={PageNotFound} /> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
