import React from 'react'

import Registration from '../../components/registration/registration.component'
import RegistrationInfo from '../../components/registration-info/registration-info.component'
import './sign-in-and-sign-up.styles.scss'

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up' >
        {/* <center> */}
            <Registration />
            <RegistrationInfo/>
    </div>
)

export default SignInAndSignUpPage