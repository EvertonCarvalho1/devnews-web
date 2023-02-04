
import React from "react";
import { RouteProps as ReactDOMRouterProps, Route as ReactDOMRoute } from 'react-router-dom';

interface RouteProps extends ReactDOMRouterProps {
    component: React.ComponentType;
}

export function Route({ component: Component, ...rest }: RouteProps) {

    return (
        <ReactDOMRoute {...rest} render={({ location }) => {
            return (<Component />)
        }} />
    )
}
