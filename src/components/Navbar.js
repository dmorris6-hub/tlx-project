import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { auth } from '../firebase/utils';
import { Button } from './Button';
import Logo from '../assets/logo-original-plain.png'
import './Navbar.css'


const mapState = ({user}) => ({
    currentUser: user.currentUser
})

const Navbar = props => {
    const { currentUser } = useSelector(mapState)

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect (() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="" onClick={closeMobileMenu}>
                        <img src={Logo} alt='TLX'/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                HOME
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/live-event' className="nav-links" onClick={closeMobileMenu}>
                                LIVE EVENT
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/past-work' className="nav-links" onClick={closeMobileMenu}>
                                PAST WORK
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/what-we-offer' className="nav-links" onClick={closeMobileMenu}>
                                WHAT WE OFFER
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/day-in-the-life' className="nav-links" onClick={closeMobileMenu}>
                                DAY IN THE LIFE
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                                ABOUT
                            </Link>
                        </li>
                    </ul>
                    {currentUser && (
                        <ul>
                            <li>
                                <Link to='/dashboard'>
                                    My Account
                                </Link>
                            </li>
                            <li className="button-menu" onClick={() => auth.signOut()}>
                                {button && <Button buttonStyle="btn--outline">SIGN-OUT</Button>}
                            </li>
                        </ul>
                    )}
                    {!currentUser && (
                        <ul>
                            <li className="button-menu">
                                {button && <Button buttonStyle="btn--outline">SIGN-IN</Button>}
                            </li>
                            
                        </ul>
                        
                    )}
                    
                    
                    
                </div>
            </nav>

        </>
    )
}

Navbar.defaultProps = {
    currentUser: null
};


export default Navbar
