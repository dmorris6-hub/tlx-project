import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {signUpUser, resetAllAuthForms} from './../../../redux/User/user.actions'

import FormIn from './FormIn'
import SIButton from './SIButton';
import AuthWrapper from './../../Wrapper/AuthWrapper'
import './SignUp.css'


const mapState = ({user}) => ({
    signUpSuccess: user.signUpSuccess,
    signUpError: user.signUpError
})

const SignUp = props => {
    const {signUpSuccess, signUpError} = useSelector(mapState)
    const dispatch = useDispatch()

    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfrimPassword] = useState('')
    const [errors, setErrors] = useState([])

    useEffect(() => {
        if (signUpSuccess) {
            reset()
            dispatch(resetAllAuthForms())
            props.history.push('/')
        }
    }, [signUpSuccess])

    useEffect(() => {
        if (Array.isArray(signUpError) && signUpError.length > 0) {
            setErrors(signUpError)
        }
    }, [signUpError])

    const reset = () => {
        setDisplayName('')
        setEmail('')
        setPassword('')
        setConfrimPassword('')
        setErrors([])
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        dispatch(signUpUser({
            displayName,
            email,
            password,
            confirmPassword
        }))
    }

    const configAuthWrapper = {
        headline: 'SignUp'
    }
    return (
        <AuthWrapper {...configAuthWrapper}>
            <div className='formWrap'>
                {errors.length > 0 && (
                    <ul>
                        {errors.map((err, index) => {
                            return (
                                <li key={index}>
                                    {err}
                                </li>
                            )
                        })}
                    </ul>
                )}

                <form onSubmit={handleFormSubmit}>
                    <FormIn 
                        type="text"
                        name="displayName"
                        value={displayName}
                        placeholder="Full Name"
                        handleChange={e => setDisplayName(e.target.value)}
                    />
                    <FormIn 
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        handleChange={e => setEmail(e.target.value)}
                    />
                    <FormIn 
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        handleChange={e => setPassword(e.target.value)}
                    />
                    <FormIn 
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        handleChange={e => setConfrimPassword(e.target.value)}
                    />
                    <SIButton type='submit'>
                        Register
                    </SIButton>

                </form>
            </div>
        </AuthWrapper>
    );
}
    

export default withRouter(SignUp)
