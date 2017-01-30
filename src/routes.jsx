import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Home from './components/Home';
import SignUp from './components/SignUp';
import List_Page from './components/Create_List/List_Page';
export default(
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/List_Page" component={List_Page} />

        {/* <Route path="posts/:id" component={PostsShow} /> */}
    </Route>
);
