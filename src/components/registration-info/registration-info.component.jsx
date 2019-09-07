import React from 'react'

import MoonlightImage from '../../assets/registration-assets/moonlight.svg'

import './registration-info.styles.scss'

const RegistrationInfo = () => (
    <div className='registration-info' >
        <img src={MoonlightImage} />
        <h2>WELCOME BACK!</h2>
        <p>Already have a Gomra Account?<br />
        Sign in to your account to continue.</p>
    </div>
)

export default RegistrationInfo