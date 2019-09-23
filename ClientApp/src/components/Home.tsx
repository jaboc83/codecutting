// 3rd Party
import React from 'react';
import { Link } from 'react-router-dom';

// Images
import face from '../assets/images/face.jpg';

// Component
const Home: React.FC = () => {
  return (
    <>
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
              className='rounded-full border-blue-400 border-4 m-4'
            />
            <h1 className='text-2xl bold'>Jake Moening</h1>
            <span className='text text-gray-600 bold'>
              Developer at{' '}
              <a
                href='https://www.imagetrend.com/'
                target='_blank'
                className='text-blue-600'
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
              className='block bg-blue-600 hover:bg-blue-400 focus:bg-blue-400 text-white text-xl rounded border-none shadow-lg px-4 py-2 my-2'
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </main>
      <div
        className='m-auto'
        style={{
          animation: 'bounce 3s infinite',
          MozAnimation: 'bounce 3s infinite',
          WebkitAnimation: 'bounce 3s infinite'
        }}
      >
        <img
          width='40'
          height='40'
          alt=''
          src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4='
        />
      </div>
    </>
  );
};

export default Home;
