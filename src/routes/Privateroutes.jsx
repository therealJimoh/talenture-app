import React from 'react'
import { Route, Redirect } from "react-router-dom";

const Privateroutes = ({ isAuth, component: Component, ...rest}) => {
    return (
       <Route {...rest} render={(props) => {
           if (isAuth) {
               return <Component />;
           } else {
               return (
                   <Redirect to={{ pathname: "/login"}} />
               )
           }
       }} />
    )
}

export default Privateroutes
