// 3rd Party
import React from 'react';

// Images
import boyl from '../../assets/images/boyl.png';

// Component
const BudgetOrYourLife: React.FC = () => {
  return (
    <div
      id='budget-or-your-life-showcase'
      className='flex flex-col justify-center text-justify m-4'
    >
      <h2 className='text-blue-500 text-2xl font-bold text-center'>
        <a href='https://budgetoryourlife.com'>Budget or Your Life for YNAB</a>
      </h2>
      <img
        src={boyl}
        alt='Budget or Your Life Screenshot'
        className='block m-auto md:max-w-3xl shadow-md mb-4'
      />
      <h3 className='text-gray-700 flex flex-col lg:flex-row justify-between text-sm mb-2 text-left'>
        <span className='px-2 max-w-xl'>
          <strong>Contributions:</strong> 2019-Present
        </span>
        <span className='px-2 max-w-xl'>
          <strong>Technology:</strong> ASP.NET Core, React, TypeScript, Azure
          Hosting
        </span>
        <span className='px-2 max-w-xl'>
          <strong>Roles:</strong> Developer, DevOps, Designer
        </span>
      </h3>
      <p className='font-fancy'>
        Budget or Your Life is a simple web app I threw together to visualize a
        YNAB budget using life energy as outlined in the book 'Your Money or
        Your Life'.
      </p>
      <p className='font-fancy'>
        This app was created as a way for me to test my newly created .net core
        YNAB sdk. It was one of my first attempts at building a TypeScript +
        React app as well.
      </p>
    </div>
  );
};

export default BudgetOrYourLife;
