import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {signInUser, signInWithGoogle, resetAllAuthForms} from './../../../redux/User/user.actions'

import './Login.css'
import SIButton from './SIButton'
import AuthWrapper from './../../Wrapper/AuthWrapper'
import FormIn from './FormIn'

const mapState = ({user}) => ({
    signInSuccess: user.signInSuccess
})

const Login = props => {
    const {signInSuccess} = useSelector(mapState)
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (signInSuccess) {
            ResetForm()
            dispatch(resetAllAuthForms())
            props.history.push('/')
        }
    }, [signInSuccess])

    const ResetForm = () => {
        setEmail('')
        setPassword('')
    }

    const handleSubmit =  e => {
        e.preventDefault();
        dispatch(signInUser({email, password}))
    }

    const handleGoogleSignIn = () => {
        dispatch(signInWithGoogle())
    }

    const configAuthWrapper = {
        headline: 'Login'
    }

    return (
        <AuthWrapper {...configAuthWrapper}>
            <div className='login-form-wrap'>
                <form onSubmit={handleSubmit}>

                    <FormIn 
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        handleChange = {e => setEmail(e.target.value)}
                    />

                    <FormIn 
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        handleChange = {e => setPassword(e.target.value)}
                    /> 

                    <SIButton type="submit">
                        LogIn
                    </SIButton>

                    <div className='socialSignIn'>
                        <div className='sSI-Row'>
                            <SIButton onClick={handleGoogleSignIn}>
                                Sign in with Google
                            </SIButton>
                        </div>
                    </div>
                    <div className='links'>
                        <Link to='/recover'>
                            <p className='reset-text'>Reset Password</p>
                        </Link>
                    </div>
                </form>
            </div>
        </AuthWrapper>
    )
}


export default withRouter(Login)
