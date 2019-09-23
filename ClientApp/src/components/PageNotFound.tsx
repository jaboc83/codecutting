// 3rd Party
import React from 'react';
import { RouteComponentProps } from 'react-router';

// Component
const PageNotFound: React.FC<RouteComponentProps> = ({ history }) => {
  return <main>Page {history.location.pathname} not found</main>;
};

export default PageNotFound;
