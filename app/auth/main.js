import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppNavigator from '../navigation/AppNavigator';
import { selectUserState, setAuthenticated } from "../store/user";

import  AuthNavigator  from "../navigation/AuthNavigator";


const MainScreen = () => {
    const dispatch = useDispatch();
    const {isAuthenticated} = useSelector(selectUserState);

    useEffect(()=>{
        dispatch(setAuthenticated(false));
    },[])

    if (isAuthenticated) {
        return <AppNavigator />
    }

    return (
        <AuthNavigator />
    );
};

export default MainScreen;
