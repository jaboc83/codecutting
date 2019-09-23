// 3rd Party
import React from 'react';
import { RouteComponentProps } from 'react-router';

// Component
const PageNotFound: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <main className='container flex justify-center m-auto'>
      Page {history.location.pathname} not found
    </main>
  );
};

export default PageNotFound;
