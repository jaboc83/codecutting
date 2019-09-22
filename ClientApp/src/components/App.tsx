// 3rd Party
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Other Components
import Header from './navigation/Header';
import Footer from './navigation/Footer';

// Images
import face from '../assets/images/face.jpg';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div
      role='application'
      className='text-gray-900 h-screen w-screen flex flex-col font-main'
    >
      <BrowserRouter>
        <Header />
        <main
          role='main'
          className='container m-auto flex bg-cover bg-no-repeat bg-center bg-top flex-grow justify-center'
        >
          <div id='bio' className='flex flex-col items-center lg:max-w-md'>
            <img
              src={face}
              height={180}
              width={180}
              className='rounded-full border-blue-400 border-4 m-4'
            />
            <span className='text-xl bold'>Jake Moening</span>
            <span className='text text-gray-600 bold'>
              Developer at{' '}
              <a
                href='https://www.imagetrend.com/'
                target='_blank'
                className='text-blue-400'
              >
                ImageTrend
              </a>
            </span>
            <p className='text-justify'>
              Hey, I'm Jake, a software developer, backpacker, photographer, and
              home cook.
            </p>
          </div>
          <div className='flex flex-col'>
            <Link to='#projects' className='text-blue-400'>
              development projects
            </Link>
            <Link to='#photography' className='text-blue-400'>
              photography
            </Link>
          </div>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
