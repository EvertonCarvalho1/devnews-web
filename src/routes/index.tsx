import React from "react";
import { Switch } from 'react-router-dom';

import { Route } from "./Route";

import { NewsList } from '../pages/NewsList'

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path='/' exact component={<NewsList    {...props}
                newsPost={newsPost}
                removeNewsHandler={removeNewsHandler} />} />
        </Switch>
    )
};

export default Routes;