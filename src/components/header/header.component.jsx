import React from 'react'
import { Link } from 'react-router-dom'

import { auth } from '../../firebase/firebase.utils'

import Navigation from '../navigation/navigation.component'

import TitleLogo from '../../assets/header/gomra-logo.png'
import './header.styles.scss'

class Header extends React.Component {

    constructor({ currentUser }) {
        super(currentUser)

        this.state = {
            searchStatus: 'img-search',
            searchStatusTrigger: false
        }
    }

    searchClicked = () => {
        console.log('search clicked')
        this.setState({
            searchStatusTrigger: !this.state.searchStatusTrigger
        }, () => {
            console.log(this.state.searchStatusTrigger)
            if (this.state.searchStatusTrigger) {
                this.setState({
                    searchStatus: 'img-search-clicked'
                })
            } else {
                this.setState({
                    searchStatus: 'img-search'
                })
            }
        })
    }

    submitSearch = (event) => {
        if (event.keyCode === 13) {
            console.log('search submitted', event.target.value)
        }

        if (event.keyCode === 27) {
            console.log('escaped', event.target.value)
            this.setState({
                searchStatus: 'img-search',
                searchStatusTrigger: !this.state.searchStatusTrigger
            })
        }

    }

    render() {

        const { searchStatus } = this.state

        return (
            <div className='header-container'>
                <div className='header'>
                    <img className='header-logo' src={TitleLogo} alt="TitleLogo"></img>
                    <div className='right-menu'>
                        <div className='options'>
                            <Link className='options'>CREATE POST</Link>
                            {/* {console.log("curren user", this.props.currentUser)} */}
                            {
                                
                                this.props.currentUser ?
                                    <div className='options' onClick={() => auth.signOut() }>SIGN OUT</div>
                                    :
                                    <Link className='options' to='/signin'>SIGN IN</Link>
                            }

                            <input
                                className={searchStatus}
                                onClick={this.searchClicked}
                                onKeyDown={this.submitSearch}
                                autoComplete='new-password'
                            >
                            </input>

                        </div>
                    </div>

                </div>
                <Navigation />
            </div>
        )
    }
}

export default Header