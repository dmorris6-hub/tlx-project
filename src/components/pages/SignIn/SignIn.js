import React from 'react'
import Footer from '../../Footer'
import './SignIn.css'
import Login from './Login'
import SignUp from './SignUp'

function SignIn() {
    return (
        <div>
            <Login />

            <SignUp />
            <Footer />
        </div>
    )
}

export default SignIn
