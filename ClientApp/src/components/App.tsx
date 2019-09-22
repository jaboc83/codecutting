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
          className='m-auto flex flex-col md:flex-row flex-1 justify-center'
        >
          <div className='flex flex-col lg:mt-4 max-w-2xl m-auto h-full lg:flex-row'>
            <div
              id='bio'
              className='flex flex-col items-center m-auto p-4 rounded-lg'
            >
              <img
                src={face}
                height={180}
                width={180}
                className='rounded-full border-green-400 border-4 m-4'
              />
              <h1 className='text-2xl bold'>Jake Moening</h1>
              <span className='text text-gray-600 bold'>
                Developer at{' '}
                <a
                  href='https://www.imagetrend.com/'
                  target='_blank'
                  className='text-green-600'
                >
                  ImageTrend
                </a>
              </span>
              <p className='text-justify text-lg mt-2 font-fancy w-full'>
                Hey, I'm Jake, I've been a software developer since 2007, and I
                love the creative aspect of making good software that solves
                interesting problems. As a web developer I enjoy many aspects of
                the craft including design, full-stack development, and devops.
              </p>
              <p className='text-justify text-lg mt-2 font-fancy w-full'>
                When I'm not cutting code I enjoy cooking, getting outdoors,
                photography and reading.
              </p>
              <Link
                to='#projects'
                className='block bg-green-600 hover:bg-green-400 focus:bg-green-400 text-white text-xl rounded border-none shadow-lg px-4 py-2 my-2'
              >
                View Portfolio
              </Link>
            </div>
          </div>
          <div
            className='scroll-downs absolute right-0 left-0 m-auto'
            style={{ width: 34, height: 55, bottom: 35 }}
          >
            <div
              className='mousey opacity-75'
              style={{
                width: 3,
                padding: '10px 15px',
                height: '35px',
                borderRadius: 25,
                border: '2px solid #000',
                boxSizing: 'content-box'
              }}
            >
              <div
                className='scroller rounded-full bg-black'
                style={{
                  width: 3,
                  height: 10,
                  animationName: 'scroll',
                  animationDuration: '2.2s',
                  animationTimingFunction: 'cubic-bezier(.15,.41,.69,.94)',
                  animationIterationCount: 'infinite'
                }}
              ></div>
            </div>
          </div>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
