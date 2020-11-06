import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {resetPassword, resetAllAuthForms} from './../../redux/User/user.actions'
import './EmailPassword.css'

import AuthWrapper from './../Wrapper/AuthWrapper'
import FormIn from './../pages/SignIn/FormIn'
import SIButton from './../pages/SignIn/SIButton'


const mapState = ({user}) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    resetPasswordError: user.resetPasswordError
})

const EmailPassword = props => {
    const {resetPasswordSuccess, resetPasswordError} = useSelector(mapState)
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])

    useEffect(() => {
        if (resetPasswordSuccess) {
            dispatch(resetAllAuthForms())
            props.history.push('/sign-in')
        }
    }, [resetPasswordSuccess])

    useEffect(() => {
        if (Array.isArray(resetPasswordError) && resetPasswordError.length > 0) {
            setErrors(resetPasswordError)
        }
    }, [resetPasswordError])

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(resetPassword({email}))
        
    }

        const configAuthWrapper = {
            headline: "Email Password"
        }

    return (
        <AuthWrapper {...configAuthWrapper}>
            <div className='formWrap'>
                {errors.length > 0 && (
                    <ul>
                        {errors.map((e, index) => {
                            return (
                                <p key={index}>
                                    {e}
                                </p>
                            )
                        })}
                    </ul>
                )}
                <form onSubmit={handleSubmit}>
                    <FormIn 
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        handleChange= {e => setEmail(e.target.value)}
                    />
                    <SIButton type='submit'>
                        Email Password
                    </SIButton>
                </form>
            </div>
        </AuthWrapper>
        
    );
}


export default withRouter(EmailPassword)