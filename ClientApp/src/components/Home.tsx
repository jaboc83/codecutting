// 3rd Party
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            <h1 className='text-2xl font-bold'>Jake Moening</h1>
            <span className='text text-gray-600'>
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
              Hi. I'm a software developer based in Minnesota and I've been
              cutting code since 2007. I have a passion for creating software
              that solves interesting problems.
            </p>
            <p className='text-justify text-lg mt-2 font-fancy w-full'>
              When I'm not cutting code I enjoy cooking, exploring the outdoors,
              <a
                href='https://500px.com/jaboc83'
                target='_blank'
                className='text-blue-600'
              >
                {' photography '}
              </a>
              and
              <a
                href='https://www.goodreads.com/user/show/51650541-jake'
                target='_blank'
                className='text-blue-600'
              >
                {' reading.'}
              </a>
            </p>
            <a
              href='mailto:jaboc83@gmail.com'
              className='block bg-blue-600 hover:bg-blue-400 focus:bg-blue-400 text-blue-200 text-lg rounded border-none shadow-lg px-4 py-2 my-2'
            >
              <FontAwesomeIcon icon={['far', 'envelope']} />
              {' MESSAGE ME'}
            </a>
          </div>
        </div>
      </main>
      {/* <div
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
      </div> */}
    </>
  );
};

export default Home;
