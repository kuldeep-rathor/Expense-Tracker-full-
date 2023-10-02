import React from 'react'
import AuthForm from '../Auth/AuthForm';
import { useSelector } from 'react-redux';
import Expenses from '../expenses/Expenses';

const Home = () => {
    const isAuth=useSelector(state=>state.auth)
    const isLoggedIn=isAuth.isLoggedIn
    // console.log(isLoggedIn)

    return (
        <div>
            {!isLoggedIn?(<AuthForm />):(<Expenses />)}
        </div>
    )
}

export default Home
