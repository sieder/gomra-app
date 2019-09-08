import React from 'react'
import { Link } from 'react-router-dom'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import LockInputIcon from '../../assets/form-input-icons/signin/lock.png'
import EnvelopeInputIcon from '../../assets/form-input-icons/signin/envelope.png'
import GomraTitleLogo from '../../assets/title-logo/gomra-title-logo.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import GoogleIcon from '../../assets/google-icon.png'

import PasswordHide from '../../assets/form-input-icons/password-hide.svg'
import PasswordShow from '../../assets/form-input-icons/password-show.svg'

import { signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: '',
            hidden: 'password',
            passwordIcon: PasswordShow,
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({ email: '', password: '', username: '', confirmPassword: '' })
    }
    handleChange = event => {
        const { value, name } = event.target
        this.setState({ [name]: value })
    }

    handleShowPasword = () => {
        this.setState({
            hidden: !this.state.hidden
        }, () => {
            console.log(this.state.hidden)
            if (this.state.hidden) {
                this.setState({
                    passwordIcon: PasswordShow
                })
            } else {
                this.setState({
                    passwordIcon: PasswordHide
                })
            }
        })
    }

    render() {
        const { email, hidden, password, passwordIcon } = this.state
        return (
            <div className='sign-in'>
                <div className='sign-in-form-wrapper' style={{ backgroundImage: `url(${GomraTitleLogo})` }}>
                    <form className='sign-in-form' onSubmit={this.handleSubmit} >
                        <h1 className='sign-in-h1'>SIGN IN</h1>
                        <FormInput
                            style={{ background: `#2A2E41 url(${EnvelopeInputIcon}) no-repeat 30px center` }}
                            name='email'
                            value={email}
                            handleChange={this.handleChange}
                            type='email'
                            label='Email'
                            autoComplete="off"
                            required
                        />
                        <FormInput
                            style={{ background: `#2A2E41 url(${LockInputIcon}) no-repeat 30px center` }}
                            name='password'
                            value={password}
                            type={hidden ? "password" : "text"}
                            handleChange={this.handleChange}
                            label='Password'
                            required
                        />
                        <span
                            style={{
                                backgroundImage: `url(${passwordIcon})`,
                                position: 'relative',
                                float: 'right',
                                marginRight: '10px',
                                marginTop: '-40px',
                                zIndex: '2',
                                width: '14px',
                                height: '8px'
                            }}
                            onClick={this.handleShowPasword}
                        >
                        </span>
                        <p className='forgot-your-password'>Forgot your password?</p>
                        <CustomButton type="submit" value="Submit Form">Sign in</CustomButton>

                        <div className='sign-in-footer'>
                            <p className='sign-in-p'>or sign in with</p>
                            <div className='sign-in-social-media'>

                                <img
                                    src={FacebookIcon}
                                    alt='facebook-icon'
                                />
                                <p className='facebook-icon-option' >Facebook</p>


                                <img
                                    src={GoogleIcon}
                                    alt='google-icon'
                                    style={{ paddingLeft: '10px' }}
                                />
                                <p onClick={signInWithGoogle} className='google-icon-option'>
                                    Google
                                    </p>

                            </div>

                        </div>
                    </form>
                </div>
                <div className='sign-in-content'>
                    <Link to='/register' >SignUp</Link>
                </div>
            </div>
        )
    }
}

export default SignIn