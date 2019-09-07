import React from "react"
import { Link } from 'react-router-dom'

import './navigation.styles.scss'

const Navigation = () => (

    <div className='navigation'>
        <div className='options'>
            {/* <Link to='/boosting'>BOOSTING</Link>
    <Link to='/gaming-account'>GAMING ACCOUNTS</Link>
    <link to='/gaming-items'>GAMING ITEMS</link>
    <Link to='/tournaments'>TOURNAMENTS</Link>
    <Link to='/event-tickets'>EVENT TICKETS</Link> */}
            <Link className='options'>BOOSTING</Link>
            <Link className='options'>GAMING ACCOUNTS</Link>
            <Link className='options'>GAMING ITEMS</Link>
            <Link className='options'>TOURNAMENTS</Link>
            <Link className='options'>EVENT TICKETS</Link>
        </div>
    </div>

)

export default Navigation