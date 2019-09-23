// 3rd Party
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Other Components
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import PageNotFound from './PageNotFound';
import Projects from './Projects';
import Writing from './Writing';

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
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/writing' component={Writing} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
