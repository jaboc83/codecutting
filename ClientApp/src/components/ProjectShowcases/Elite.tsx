// 3rd Party
import React from 'react';

// Images
import elite from '../../assets/images/imagetrend-elite.png';

// Component
const Elite: React.FC = () => {
  return (
    <div
      id='elite-showcase'
      className='flex flex-col justify-center text-justify m-4'
    >
      <a href='https://www.imagetrend.com/Elite'>
        <h2 className='text-blue-500 text-2xl font-bold text-center'>
          ImageTrend Elite
        </h2>
      </a>
      <img
        src={elite}
        alt='Elite Field Demo'
        className='block m-auto md:max-w-3xl mb-4'
      />
      <h3 className='text-gray-700 flex flex-col lg:flex-row justify-between text-sm mb-2'>
        <span className='px-2 max-w-xl'>
          <strong>Contributions:</strong> 2013-2018
        </span>
        <span className='px-2 max-w-xl'>
          <strong>Technology:</strong> ASP.NET MVC, JS w/ KnockoutJS, MSSQL,
          Powershell
        </span>
        <span className='px-2 max-w-xl'>
          <strong>Roles:</strong> Dev Lead, DevOps, Architect
        </span>
      </h3>
      <p className='font-fancy'>
        ImageTrend Elite is a data collection tool primarily used for EMS and
        Fire data. The application consists of a couple applications. The first
        application is designed mainly for administrators and is written in a
        combination of ASP.NET MVC and JavaScript. The second part is a PWA
        written mainly in JavaScript and is used for offline data collection at
        patient-side.
      </p>
      <p className='font-fancy'>
        This project was unique at the time it was started as PWAs were not yet
        terribly common and browser features not quite as rich. As the front-end
        frameworks of the time were pretty large and offline storage
        capabilities fairly weak we opted to build our application using
        primarily vanilla JS with some help from KnockoutJS.
      </p>
    </div>
  );
};

export default Elite;
