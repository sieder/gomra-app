import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import EnvelopeInputIcon from '../../assets/form-input-icons/envelope.png'
import LockInputIcon from '../../assets/form-input-icons/lock.png'
import UserNinjaInputIcon from '../../assets/form-input-icons/user-ninja.png'
import GomraTitleLogo from '../../assets/title-logo/gomra-title-logo.png'
import PasswordHide from '../../assets/form-input-icons/password-hide.svg'
import PasswordShow from '../../assets/form-input-icons/password-show.svg'

import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './registration.styles.scss'

class Registration extends React.Component {
    constructor() {
        super()

        this.state = {
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            hidden: 'password',
            passwordIcon: PasswordShow
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        const { password, confirmPassword } = this.state
        if (password !== confirmPassword) {
            alert('Password does not match!')
            return
        }

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

        const { email, username, hidden, password, passwordIcon, confirmPassword } = this.state
        const noEmptySpace = Object.values(this.state).some(value => !value)

        return (
            <div className="registration" style={{ backgroundImage: `url(${GomraTitleLogo})` }}>

                <div className="registration-form">

                    <h1 className='registration-h1'>CREATE ACCOUNT</h1>

                    <form className="registration-form-field" onSubmit={this.handleSubmit}>
                        <FormInput
                            style={{ backgroundImage: `url(${EnvelopeInputIcon})` }}
                            name="email"
                            value={email}
                            handleChange={this.handleChange}
                            type="email"
                            label="Email"
                            autoComplete="new-password"
                            required
                        />
                        <FormInput
                            style={{ backgroundImage: `url(${UserNinjaInputIcon})` }}
                            name="username"
                            type="text"
                            value={username}
                            handleChange={this.handleChange}
                            label="Username"
                            autoComplete="new-password"
                            required
                        />
                        <FormInput
                            style={{ backgroundImage: `url(${LockInputIcon})` }}
                            name="password"
                            type={hidden ? "password" : "text"}
                            value={password}
                            handleChange={this.handleChange}
                            label="Password"
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

                        <FormInput
                            style={{ backgroundImage: `url(${LockInputIcon})` }}
                            name="confirmPassword"
                            type={hidden ? "password" : "text"}
                            value={confirmPassword}
                            handleChange={this.handleChange}
                            label="Confirm Password"
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

                        <br />
                        {console.log(noEmptySpace)}
                        <CustomButton disabled={noEmptySpace} >Sign Up</CustomButton>
                        <div className="registration-footer">

                            <p>or sign up with <FontAwesomeIcon icon={faFacebookSquare} /> </p>

                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export default Registration

