// 3rd Party
import React from 'react';

// Images
import ynab from '../../assets/images/ynab-sdk.png';

// Component
const YNABSDK: React.FC = () => {
  return (
    <div
      id='ynab-sdk-showcase'
      className='flex flex-col justify-center text-justify m-4'
    >
      <h2 className='text-blue-500 text-2xl font-bold text-center'>
        <a href='https://www.nuget.org/packages/YNAB.SDK/'>
          YNAB .net Core SDK
        </a>
      </h2>
      <img
        src={ynab}
        alt='YNAB SDK Screen Shot'
        className='block m-auto md:max-w-3xl shadow-md mb-4'
      />
      <h3 className='text-gray-700 flex flex-col lg:flex-row justify-between text-sm mb-2 text-left'>
        <span className='px-2 max-w-xl'>
          <strong>Contributions:</strong> 2019-Present
        </span>
        <span className='px-2 max-w-xl'>
          <strong>Technology:</strong> ASP.NET Core{' '}
        </span>
        <span className='px-2 max-w-xl'>
          <strong>Roles:</strong> Developer
        </span>
      </h3>
      <p className='font-fancy'>
        YNAB.SDK is a .net core wrapper for the YNAB Rest API. YNAB is one of my
        favorite products and I wanted to contribute back to the community in
        some way. At the time there were .NET SDK implementations, but none in
        .net core so I decided to make this one.
      </p>
    </div>
  );
};

export default YNABSDK;
