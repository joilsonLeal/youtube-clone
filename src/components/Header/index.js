import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

import './styles.css';

function Header() {
    const [inputSearch, setInputSearch] = useState('');


    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img 
                        className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/250px-YouTube_Logo_2017.svg.png" 
                        alt="youtube" 
                    />
                </Link>
            </div>

            <div className="header__input">
                <input 
                    placeholder="Search" 
                    type="text"
                    value={ inputSearch } 
                    onChange={ e => setInputSearch(e.target.value) }
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton" />
                </Link>
            </div>

            <div className="header__icons">
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon"/>
                <Avatar 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThLphY2_lhKMbjeJ6xhZMqUvjRSDxjv6EhnQ&usqp=CAU"
                    alt="Albert Einstein"
                />
            </div>
        </div>
    )
}

export default Header;