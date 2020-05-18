import React from 'react';
import './header.scss';
import logoImg from '../../assets/images/rick-and-morty-logo.svg';

const Header = (props) => {

    return (
        <div className='headerContainer'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#"><img src={ logoImg } /></a>
            </nav>
        </div>
    );
}

export default Header;