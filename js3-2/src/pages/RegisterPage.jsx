import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom'
import LoginComponent from '../components/LoginComponent';
import RegisterComponent from '../components/RegisterComponent'
import UserKit from '../data/userKit'

export default function register() {
    return (
        <>
            <RegisterComponent />
            <LoginComponent />
        </>
    )
}
