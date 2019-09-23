// 3rd Party
import React from 'react';
import { Link } from 'react-router-dom';

// Other Components
import Elite from './ProjectShowcases/Elite';
import Hubble from './ProjectShowcases/Hubble';
import YNABSDK from './ProjectShowcases/YNABSDK';
import TTMG from './ProjectShowcases/TTMG';
import Rangers from './ProjectShowcases/Rangers';
import BudgetOrYourLife from './ProjectShowcases/BudgetOrYourLife';

// Component
const Projects: React.FC = () => {
  return (
    <main className='container flex flex-col justify-center m-auto'>
      <h1 className='mt-4 text-3xl font-bold text-center'>Projects</h1>
      <p className='mb-8 p-4 font-fancy text-center text-lg max-w-2xl text-justify m-auto'>
        Aside from{' '}
        <Link to='/' className='text-blue-500'>
          this very site
        </Link>
        , I have a variety of other products I have built that you can check out
        below. You can always see what I'm currently working on by checking out
        my{' '}
        <a
          href='https://github.com/jaboc83'
          target='_blank'
          className='text-blue-500'
        >
          github.
        </a>
      </p>
      <hr />
      <Hubble />
      <hr />
      <YNABSDK />
      <hr />
      <BudgetOrYourLife />
      <hr />
      <Elite />
      <hr />
      <TTMG />
      <hr />
      <Rangers />
    </main>
  );
};

export default Projects;
