import React from 'react';
import { Router, Route , IndexRoute } from 'react-router';

import App from './components/App';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const Routes = (props) => (
 <Router {...props}>
   <Route path="/" component={App}>
      <IndexRoute component={App} />
      <Route path="*" component={NotFoundPage} />
   </Route>
 </Router>
);
export default Routes;
