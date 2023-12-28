import React from 'react';
import Login from '../../components/config/Login';
import { useLocation } from 'react-router-dom';

export default function HomePage(){

    const location = useLocation();
    return (
        <>
        <h1>Home page{location.state.id}</h1>
        </>
    );
}